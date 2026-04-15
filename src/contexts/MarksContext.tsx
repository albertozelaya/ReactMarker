import { useApiMarkers } from "../services/useApiMarkers";
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
    insertMarker,
    getColorsIndicator,
    isLoading,
    setIsLoadingHistory,
    isLoadingForm,
    setIsLoadingForm,
    code,
    setCode,
    addResponse,
    getHistory,
    getUser,
    getTodayHistory,
  } = useApiMarkers();

  return (
    <MarksContext.Provider
      value={{
        setIsLoadingHistory,
        getHistory,
        getUser,
        insertMarker,
        getTodayHistory,
        isLoadingForm,
        setIsLoadingForm,
        getColorsIndicator,
        historyToday,
        code,
        setCode,
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
