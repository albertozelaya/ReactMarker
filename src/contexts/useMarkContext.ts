import { createContext, useContext } from "react";
import type { Response } from "../hooks/useApiResponse";
import type { ColorIndicatorIntl, HistoryIntl, HistoryTodayIntl } from "../interfaces/historyInt";

interface MarkContextParams {
  history?: HistoryIntl;
  user?: HistoryTodayIntl;
  historyToday?: HistoryTodayIntl;
  colorIndData?: ColorIndicatorIntl;
  isLoading: boolean;
  responses: Response[];
  getHistory: () => void;
  getTodayHistory: () => void;
  clearResponse: (message: string) => void;
  addResponse: (message: string, type: "success" | "error") => void;
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
