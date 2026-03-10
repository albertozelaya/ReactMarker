const variants = {
  error: "bg-red-500 text-white hover:text-red-200",
  success: "bg-green-500 text-white hover:text-green-200",
  warning: "bg-yellow-500 text-white hover:text-yellow-200",
  info: "bg-blue-500 text-white hover:text-blue-200",
};

interface NotificationParams {
  message: string;
  onClose: (message: string) => void;
  variant?: keyof typeof variants;
}

//* NOTIFICATION COMPONENT
export function AddNotification({
  message,
  onClose,
  variant = "error",
}: NotificationParams) {
  return (
    <div
      className={`flex items-center justify-between gap-3 rounded-lg px-4 py-3 shadow-lg ${variants[variant]}`}
    >
      <span className="text-sm">{message}</span>
      <button
        onClick={() => onClose(message)}
        className={`cursor-pointer ${variants[variant].split(" ").at(-1)}`}
      >
        ✕
      </button>
    </div>
  );
}

//* NOTIFICATION CONTAINER
interface NotContainerParams {
  children: React.ReactNode;
}

export function NotificationContainer({ children }: NotContainerParams) {
  return (
    <div className="fixed top-4 right-4 flex flex-col gap-2">{children}</div>
  );
}
