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
    // markers,
    responses,
    clearResponse,
    isLoading,
    addResponse,
    getHistory,
    getTodayHistory,
    // getMarkers,
  } = useApiMarkers();

  return (
    <MarksContext.Provider
      value={{
        getHistory,
        getTodayHistory,
        historyToday,
        // getMarkers,
        history,
        user,
        // markers,
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
