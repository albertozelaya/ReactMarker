import { useCallback, useEffect, useMemo, useState } from "react";

const variants = {
  error:
    "border border-rose-600 bg-white text-rose-600 hover:text-red-800 hover:border-red-800",
  success:
    "text-green-600 bg-white hover:text-green-800 hover:border-green-800 border border-green-600",
  warning:
    "text-yellow-600 bg-white hover:text-yellow-800 hover:border-yellow-800 border border-yellow-600",
  info: "text-blue-600 bg-white hover:text-blue-800 border hover:border-blue-800 border-blue-600",
};

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

  const msgFormatted = useMemo(
    function () {
      return message
        ?.toLowerCase()
        .split(" ")
        ?.map((letter, index) =>
          index === 0 ? letter[0].toUpperCase() + letter.slice(1) : letter,
        )
        .join(" ");
    },
    [message],
  );

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
      className={`flex items-center justify-between gap-3 rounded-lg px-4 py-3 text-green-600 shadow-lg transition-all duration-300 ease-in-out ${variants[variant]} ${visible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"} `}
    >
      <span className="text-sm">{msgFormatted}</span>

      <button
        onClick={handleClose}
        className={`cursor-pointer ${variants[variant].split(" ").at(-1)}`}
      >
        ✕
      </button>
    </div>
  );
}
