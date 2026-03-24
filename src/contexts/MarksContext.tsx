import { useApiMarkers } from "../hooks/useApiMarkers";
import { MarksContext } from "./useMarkContext";

interface MarkContextParams {
  children: React.ReactNode;
}

function MarkContext({ children }: MarkContextParams) {
  const {
    history,
    // markers,
    responses,
    clearResponse,
    isLoading,
    addResponse,
    getHistory,
    // getMarkers,
  } = useApiMarkers();

  return (
    <MarksContext.Provider
      value={{
        getHistory,
        // getMarkers,
        history,
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
