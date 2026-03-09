interface ErrorNotParams {
  message: string;
  onClose: (message: string) => void;
}

export function ErrorNotification({ message, onClose }: ErrorNotParams) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-lg bg-red-500 px-4 py-3 text-white shadow-lg">
      <span className="text-sm">{message}</span>
      <button
        onClick={() => onClose(message)}
        className="cursor-pointer text-white hover:text-red-200"
      >
        ✕
      </button>
    </div>
  );
}

interface ErrorValidationParams {
  error: string;
}

export function ErrorForm({ error }: ErrorValidationParams) {
  return <p className="mt-4 text-sm text-red-500 2xl:text-base">{error}</p>;
}
