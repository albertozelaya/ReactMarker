import { useCallback, useEffect, useReducer } from "react";

import type { MarkersState } from "../features/marker/markerSlice";
import { initialState, markersReducer } from "../features/marker/markerSlice";
import { useApiError } from "../hooks/useApiResponse";
import type {
  GetHistoryParams,
  HistoryIntl,
  HistoryTodayIntl,
} from "../interfaces/historyInt";
import { getRequests, insertMark } from "./apiMarkers";

export function useApiMarkers() {
  const [state, dispatch] = useReducer(markersReducer, initialState);
  const { responses, addResponse, clearResponse } = useApiError();

  const setLoading = (key: keyof MarkersState["loading"], value: boolean) =>
    dispatch({ type: "SET_LOADING", key, value });

  const isLoading =
    state.loading.history ||
    state.loading.historyToday ||
    state.loading.user ||
    state.loading.colors;

  // ── Generic fetch helper ─────────────────────────────────────────────────

  const fetchHistory = useCallback(
    async <T>({
      onSuccess,
      loadingKey,
      params,
      successMsg,
      errorMsg,
    }: GetHistoryParams<T>) => {
      setLoading(loadingKey, true);

      await getRequests(`${import.meta.env.VITE_BASE_API_URL}/marcador`, params)
        .then((data) => {
          if (successMsg) addResponse(successMsg, "success");
          onSuccess(data as T);
        })
        .catch(() => addResponse(errorMsg, "error"))
        .finally(() => setLoading(loadingKey, false));
    },
    [addResponse],
  );

  // ── Actions ──────────────────────────────────────────────────────────────

  const getHistory = useCallback(
    () =>
      fetchHistory<HistoryIntl>({
        loadingKey: "history",
        onSuccess: (data) => dispatch({ type: "SET_HISTORY", payload: data }),
        successMsg: "Historial cargado correctamente",
        errorMsg: "Error al cargar el historial",
      }),
    [fetchHistory],
  );

  const getTodayHistory = useCallback(
    () =>
      fetchHistory<HistoryTodayIntl>({
        loadingKey: "historyToday",
        params: { typeConsult: "T" },
        onSuccess: (data) =>
          dispatch({ type: "SET_HISTORY_TODAY", payload: data }),
        errorMsg: "Error al cargar el marcado de hoy",
      }),
    [fetchHistory],
  );

  const getUser = useCallback(
    () =>
      fetchHistory<HistoryTodayIntl>({
        loadingKey: "user",
        params: { typeConsult: "S" },
        onSuccess: (data) => dispatch({ type: "SET_USER", payload: data }),
        errorMsg: "Error al cargar el usuario",
      }),
    [fetchHistory],
  );

  const getColorsIndicator = useCallback(() => {
    setLoading("colors", true);

    getRequests(`${import.meta.env.VITE_BASE_API_URL}/marcador/colors`)
      .then((data) => dispatch({ type: "SET_COLOR_IND_DATA", payload: data }))
      .catch(() => addResponse("No se pudo cargar el indicador", "error"))
      .finally(() => setLoading("colors", false));
  }, [addResponse]);

  const insertMarker = useCallback(async () => {
    setLoading("form", true);

    await insertMark()
      .then((res) => {
        if (res?.errors?.length > 0) {
          addResponse(res.errors.join(", "), "error");
        } else {
          addResponse(res?.data?.response, "success");
          getHistory();
          getTodayHistory();
        }
      })
      .catch(() => addResponse("Error al insertar el marcador", "error"))
      .finally(() => setLoading("form", false));
  }, [addResponse, getHistory, getTodayHistory]);

  useEffect(() => {
    getHistory();
    getTodayHistory();
    getUser();
    getColorsIndicator();
  }, [getColorsIndicator, getHistory, getTodayHistory, getUser]);

  return {
    history: state.history,
    historyToday: state.historyToday,
    user: state.user,
    colorIndData: state.colorIndData,
    loading: state.loading,
    setLoading,
    isLoading,
    responses,
    addResponse,
    clearResponse,
    getHistory,
    getTodayHistory,
    getUser,
    insertMarker,
  };
}
