import { useEffect, useState } from "react";
import { getRequests } from "../services/apiMarkers";
import { useApiError } from "./useApiError";
import type { HistoryIntl } from "../interfaces/historyInt";
import type { MarkersIntl } from "../interfaces/markersInt";

export function useApiMarkers() {
  const [history, setHistory] = useState<HistoryIntl>();
  const [markers, setMarkers] = useState<MarkersIntl>();
  const { errors, addError, clearError } = useApiError();

  useEffect(() => {
    //*HISTORY
    getRequests(`${import.meta.env.VITE_BASE_API_URL}/marcador`)
      .then(setHistory)
      .catch(() => addError("No se pudo cargar el historial."));

    //* MARKERS
    getRequests(`${import.meta.env.VITE_BASE_API_URL}/marcador/types`)
      .then(setMarkers)
      .catch(() => addError("No se pudieron cargar los marcadores."));
  }, [addError]);

  return { history, markers, errors, clearError };
}
