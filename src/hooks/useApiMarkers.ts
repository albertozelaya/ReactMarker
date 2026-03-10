import { useEffect, useState } from "react";

import type { HistoryIntl } from "../interfaces/historyInt";
import type { MarkersIntl } from "../interfaces/markersInt";
import { getRequests } from "../services/apiMarkers";
import { useApiError } from "./useApiResponse";

export function useApiMarkers() {
  const [history, setHistory] = useState<HistoryIntl>();
  const [markers, setMarkers] = useState<MarkersIntl>();
  const [isLoadingHistory, setIsLoadingHistory] = useState(true);
  const [isLoadingMarkers, setIsLoadingMarkers] = useState(true);
  const { responses, addResponse, clearResponse } = useApiError();

  const isLoading = isLoadingHistory || isLoadingMarkers;

  useEffect(() => {
    //*HISTORY
    getRequests(`${import.meta.env.VITE_BASE_API_URL}/marcador`)
      .then(setHistory)
      .catch(() => addResponse("No se pudo cargar el historial.", "error"))
      .finally(() => setIsLoadingHistory(false));

    //* MARKERS
    getRequests(`${import.meta.env.VITE_BASE_API_URL}/marcador/types`)
      .then(setMarkers)
      .catch(() =>
        addResponse("No se pudieron cargar los marcadores.", "error"),
      )
      .finally(() => setIsLoadingMarkers(false));
  }, [addResponse]);

  return {
    history,
    markers,
    responses,
    addResponse,
    clearResponse,
    isLoading,
  };
}
