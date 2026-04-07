import { useMarkContext } from "../../contexts/useMarkContext";
import type { Response } from "../../hooks/useApiResponse";
import { AddNotification } from "./AddNotification";

//* NOTIFICATION CONTAINER
interface NotContainerParams {
  responses: Response[];
}

export function Notifications({ responses }: NotContainerParams) {
  const { clearResponse } = useMarkContext();

  return (
    <div className="fixed top-4 right-6 z-30 flex flex-col gap-2">
      {responses.map((response) => (
        <AddNotification
          key={response.message}
          message={response.message}
          onClose={clearResponse}
          variant={response.type}
        />
      ))}
    </div>
  );
}
