import { useCallback, useEffect, useState } from "react";

const variants = {
  error: "bg-red-500 text-white hover:text-red-200",
  success: "bg-green-500 text-white hover:text-green-200",
  warning: "bg-yellow-500 text-white hover:text-yellow-200",
  info: "bg-blue-500 text-white hover:text-blue-200",
};

//* NOTIFICATION COMPONENT
interface NotificationParams {
  message: string;
  onClose: (message: string) => void;
  variant?: keyof typeof variants;
}

export function AddNotification({
  message,
  onClose,
  variant = "error",
}: NotificationParams) {
  const [visible, setVisible] = useState(true);

  const handleClose = useCallback(() => {
    setVisible(false);
    setTimeout(() => onClose(message), 300);
  }, [message, onClose]);

  useEffect(() => {
    const timer = setTimeout(handleClose, 5 * 1000);
    return () => clearTimeout(timer);
  }, [handleClose]);

  return (
    <div
      className={`flex items-center justify-between gap-3 rounded-lg px-4 py-3 shadow-lg transition-all duration-300 ease-in-out ${variants[variant]} ${visible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`}
    >
      <span className="text-sm">{message}</span>
      <button
        onClick={handleClose}
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
