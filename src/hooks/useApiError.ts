import { useCallback, useState } from "react";

export function useApiError() {
  const [errors, setErrors] = useState<string[]>([]);

  const addError = useCallback(
    (message: string) =>
      setErrors((prev) => (prev.includes(message) ? prev : [...prev, message])),
    [],
  );

  const clearError = (message: string) =>
    setErrors((prev) => prev.filter((e) => e !== message));

  return { errors, addError, clearError };
}
