import { useApiMarkers } from "../hooks/useApiMarkers";
import { MarksContext } from "./useMarkContext";

interface MarkContextParams {
  children: React.ReactNode;
}

function MarkContext({ children }: MarkContextParams) {
  const { history, markers, responses, clearResponse, isLoading, addResponse } =
    useApiMarkers();

  return (
    <MarksContext.Provider
      value={{
        history,
        markers,
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

