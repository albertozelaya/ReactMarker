import { useEffect, useState } from "react";
import { useApiMarkers } from "../services/useApiMarkers";
import { MarksContext } from "./useMarkContext";

interface MarkContextParams {
  children: React.ReactNode;
}

function MarkContext({ children }: MarkContextParams) {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1072);

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

  useEffect(function () {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 800);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MarksContext.Provider
      value={{
        isLargeScreen,
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
