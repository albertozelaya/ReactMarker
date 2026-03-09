import { useApiMarkers } from "../hooks/useApiMarkers";
import { MarksContext } from "../hooks/useMarkContext";

interface MarkContextParams {
  children: React.ReactNode;
}

function MarkContext({ children }: MarkContextParams) {
  const { history, markers, errors, clearError } = useApiMarkers();

  return (
    <MarksContext.Provider value={{ history, markers, errors, clearError }}>
      {children}
    </MarksContext.Provider>
  );
}

export { MarkContext };
