import { useCallback, useState } from "react";

export interface Response {
  message: string;
  type: "success" | "error";
}

export function useApiError() {
  const [responses, setResponses] = useState<Response[]>([]);

  const addResponse = useCallback(
    (message: string, type: "success" | "error") => {
      setResponses((prev) => {
        if (prev.some((response) => response.message === message)) return prev;
        return [...prev, { message, type }];
      });
    },
    [],
  );

  const clearResponse = useCallback(
    (message: string) =>
      setResponses((prev) =>
        prev.filter((response) => response.message !== message),
      ),
    [],
  );

  return { responses, addResponse, clearResponse };
}
