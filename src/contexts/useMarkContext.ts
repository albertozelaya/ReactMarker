import { createContext, useContext } from "react";
import type { Response } from "../hooks/useApiResponse";
import type { MarkersState } from "../features/marker/markerSlice";
import type {
  ColorIndicatorIntl,
  HistoryIntl,
  HistoryTodayIntl,
} from "../interfaces/historyInt";

interface MarkContextParams {
  // State
  history?: HistoryIntl;
  historyToday?: HistoryTodayIntl;
  user?: HistoryTodayIntl;
  colorIndData?: ColorIndicatorIntl;
  loading: MarkersState["loading"]; // { history, historyToday, user, colors, form }
  isLoading: boolean;
  // Responses
  responses: Response[];
  addResponse: (message: string, type: "success" | "error") => void;
  clearResponse: (message: string) => void;
  // Actions
  setLoading: (key: keyof MarkersState["loading"], value: boolean) => void;
  getHistory: () => void;
  getTodayHistory: () => void;
  getUser: () => void;
  insertMarker: () => Promise<void>;
}

export const MarksContext = createContext<MarkContextParams | undefined>(
  undefined,
);

function useMarkContext() {
  const context = useContext(MarksContext);
  if (context === undefined) throw new Error("No esta en un hijo directo");
  return context;
}

export { useMarkContext };
