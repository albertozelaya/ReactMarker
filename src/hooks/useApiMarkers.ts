import { useEffect, useState } from "react";

import type { HistoryIntl, HistoryTodayIntl } from "../interfaces/historyInt";
import { getRequests } from "../services/apiMarkers";
import { useApiError } from "./useApiResponse";

export function useApiMarkers() {
  const [history, setHistory] = useState<HistoryIntl>();
  const [historyToday, setHistoryToday] = useState<HistoryTodayIntl>();
  const [user, setUser] = useState<HistoryTodayIntl>();
  const [isLoadingHistory, setIsLoadingHistory] = useState(true);
  const [isLoadingColors, setIsLoadingColors] = useState(true);
  // const [markers, setMarkers] = useState<MarkersIntl>();
  // const [isLoadingMarkers, setIsLoadingMarkers] = useState(true);
  const [colorIndData, setColorIndData] = useState();
  const { responses, addResponse, clearResponse } = useApiError();

  // const isLoading = isLoadingHistory || isLoadingMarkers;
  const isLoading = isLoadingHistory || isLoadingColors;

  const getSearchHistory = function <T extends HistoryIntl | HistoryTodayIntl>(
    setState?: React.Dispatch<React.SetStateAction<T | undefined>>,
    params?: Record<string, string>,
  ) {
    setIsLoadingHistory(true);

    getRequests(`${import.meta.env.VITE_BASE_API_URL}/marcador`, params)
      .then((data) => {
        if (setState) setState(data as T);
      })
      .catch(() => addResponse("No se pudo cargar el historial.", "error"))
      .finally(() => setIsLoadingHistory(false));
  };

  const getColorsIndicator = () => {
    setIsLoadingColors(true);

    getRequests(`${import.meta.env.VITE_BASE_API_URL}/marcador/Colors`)
      .then((data) => {
        setColorIndData(data);
      })
      .catch(() => addResponse("No se pudo cargar el indicador", "error"))
      .finally(() => setIsLoadingColors(false));
  };

  const getHistory = () => getSearchHistory(setHistory);
  const getTodayHistory = () =>
    getSearchHistory(setHistoryToday, {
      typeConsult: "T",
    });
  const getUser = () =>
    getSearchHistory(setUser, {
      typeConsult: "S",
    });

  // const getMarkers = function () {
  //   getRequests(`${import.meta.env.VITE_BASE_API_URL}/marcador/types`)
  //     .then(setMarkers)
  //     .catch(() =>
  //       addResponse("No se pudieron cargar los marcadores.", "error"),
  //     )
  //     .finally(() => setIsLoadingMarkers(false));
  // };

  useEffect(() => {
    getHistory();
    getTodayHistory();
    getUser();
    getColorsIndicator();

    // getMarkers();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    history,
    user,
    historyToday,
    colorIndData,
    responses,
    addResponse,
    clearResponse,
    getHistory,
    getTodayHistory,
    isLoading,
  };
}
