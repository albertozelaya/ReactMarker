import { createContext, useContext } from "react";
import type { Response } from "../hooks/useApiResponse";
import type {
  ColorIndicatorIntl,
  HistoryIntl,
  HistoryTodayIntl,
} from "../interfaces/historyInt";

interface MarkContextParams {
  history?: HistoryIntl;
  user?: HistoryTodayIntl;
  historyToday?: HistoryTodayIntl;
  colorIndData?: ColorIndicatorIntl;
  isLoading: boolean;
  insertMarker: () => Promise<void>;
  responses: Response[];
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  setIsLoadingHistory: React.Dispatch<React.SetStateAction<boolean>>;
  isLoadingForm: boolean;
  setIsLoadingForm: React.Dispatch<React.SetStateAction<boolean>>;
  getHistory: () => void;
  getUser: () => void;
  getTodayHistory: () => void;
  getColorsIndicator: () => void;
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
