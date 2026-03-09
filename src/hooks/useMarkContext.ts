import { createContext, useContext } from "react";
import type { HistoryIntl } from "../interfaces/historyInt";
import type { MarkersIntl } from "../interfaces/markersInt";

interface MarkContextParams {
  history?: HistoryIntl;
  markers?: MarkersIntl;
  errors: string[];
  clearError: (message: string) => void;
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
