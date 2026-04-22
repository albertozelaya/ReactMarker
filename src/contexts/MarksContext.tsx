import { useApiMarkers } from "../services/useApiMarkers";
import { MarksContext } from "./useMarkContext";

interface MarkContextParams {
  children: React.ReactNode;
}

function MarkContext({ children }: MarkContextParams) {
  const {
    history,
    historyToday,
    user,
    colorIndData,
    loading,
    isLoading,
    setLoading,
    responses,
    addResponse,
    clearResponse,
    getHistory,
    getTodayHistory,
    getUser,
    insertMarker,
  } = useApiMarkers();

  return (
    <MarksContext.Provider
      value={{
        history,
        historyToday,
        user,
        colorIndData,
        loading,
        isLoading,
        setLoading,
        responses,
        addResponse,
        clearResponse,
        getHistory,
        getTodayHistory,
        getUser,
        insertMarker,
      }}
    >
      {children}
    </MarksContext.Provider>
  );
}

export { MarkContext };
