import { useApiMarkers } from "../hooks/useApiMarkers";
import { MarksContext } from "./useMarkContext";

interface MarkContextParams {
  children: React.ReactNode;
}

function MarkContext({ children }: MarkContextParams) {
  const {
    user,
    history,
    historyToday,
    responses,
    colorIndData,
    clearResponse,
    isLoading,
    addResponse,
    getHistory,
    getTodayHistory,
  } = useApiMarkers();

  return (
    <MarksContext.Provider
      value={{
        getHistory,
        getTodayHistory,
        historyToday,
        colorIndData,
        history,
        user,
        responses,
        clearResponse,
        isLoading,
        addResponse,
      }}
    >
      {children}
    </MarksContext.Provider>
  );
}

export { MarkContext };
