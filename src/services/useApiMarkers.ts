import { useCallback, useState } from "react";

import { useApiError } from "../hooks/useApiResponse";
import type { HistoryIntl, HistoryTodayIntl } from "../interfaces/historyInt";
import { getRequests, insertMark } from "./apiMarkers";

export function useApiMarkers() {
  const [code, setCode] = useState("");
  const [history, setHistory] = useState<HistoryIntl>();
  const [historyToday, setHistoryToday] = useState<HistoryTodayIntl>();
  const [user, setUser] = useState<HistoryTodayIntl>();
  const [isLoadingHistory, setIsLoadingHistory] = useState(false);
  const [isLoadingForm, setIsLoadingForm] = useState(false);
  const [isLoadingColors, setIsLoadingColors] = useState(false);
  // const [markers, setMarkers] = useState<MarkersIntl>();
  // const [isLoadingMarkers, setIsLoadingMarkers] = useState(true);
  const [colorIndData, setColorIndData] = useState();
  const { responses, addResponse, clearResponse } = useApiError();

  // const isLoading = isLoadingHistory || isLoadingMarkers;
  // const isLoading = isLoadingHistory || isLoadingColors;
  const isLoading = isLoadingHistory || isLoadingColors;

  //* GET HISTORY
  const getSearchHistory = function <T extends HistoryIntl | HistoryTodayIntl>(
    setState?: React.Dispatch<React.SetStateAction<T | undefined>>,
    params?: Record<string, string>,
  ) {
    setIsLoadingHistory(true);

    getRequests(
      `${import.meta.env.VITE_BASE_API_URL}/marcador/codeEmployee`,
      params,
    )
      .then((data) => {
        addResponse("Historial cargado correctamente", "success");

        if (setState) setState(data as T);
      })
      .catch(() => addResponse("No se pudo cargar el historial.", "error"))
      .finally(() => setIsLoadingHistory(false));
  };
  const getHistory = () => getSearchHistory(setHistory, { code });

  //* GET COLORS INDICATOR
  const getColorsIndicator = useCallback(() => {
    setIsLoadingColors(true);

    getRequests(`${import.meta.env.VITE_BASE_API_URL}/marcador/colors`)
      .then((data) => {
        setColorIndData(data);
      })
      .catch(() => addResponse("No se pudo cargar el indicador", "error"))
      .finally(() => setIsLoadingColors(false));
  }, [addResponse]);

  const getTodayHistory = () =>
    getSearchHistory(setHistoryToday, {
      typeConsult: "T",
      code,
    });

  const getUser = () =>
    getSearchHistory(setUser, {
      typeConsult: "S",
      code,
    });

  //* POST MARKER
  const insertMarker = async () => {
    await insertMark({ code })
      .then((res) => {
        if (res?.errors?.length > 0) {
          addResponse(res?.errors?.join(", "), "error");
        } else {
          addResponse(res?.data?.response, "success");
          getHistory();
          getTodayHistory();
        }
      })
      .finally(() => setIsLoadingForm(false));
  };

  return {
    history,
    user,
    code,
    setCode,
    historyToday,
    colorIndData,
    responses,
    isLoadingForm,
    setIsLoadingForm,
    setIsLoadingHistory,
    getColorsIndicator,
    insertMarker,
    addResponse,
    clearResponse,
    getHistory,
    getUser,
    getTodayHistory,
    isLoading,
  };
}
