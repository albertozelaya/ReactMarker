import { useEffect, useRef } from "react";
import type { ButtonVariant } from "../interfaces/buttonInt";

interface ButtonParams {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: ButtonVariant;
}

export default function Button({
  children,
  className = "",
  type = "base",
  onClick,
}: ButtonParams) {
  const btnRef = useRef<HTMLButtonElement>(null);

  const types = {
    base: "bg-main uppercase text-gray-100 focus:ring-red-400 hover:bg-button-hover bg-main xl:text-base 3xl:text-xl z-20 focus:ring focus:ring-offset-1 xl:px-5 xl:py-2.5 font-semibold xl:font-bold xl:tracking-wider",
    download:
      "border border-rose-600 bg-white text-rose-600 capitalize hover:text-red-800 hover:border-red-800 xl:px-3 xl:py-1.5 lg:text-xs xl:text-sm xl:tracking-wide 3xl:tracking-wider fill-rose-600 hover:fill-red-800",
  };

  useEffect(() => {
    btnRef.current?.focus();
  }, []);

  return (
    <button
      ref={btnRef}
      onClick={onClick}
      className={
        types[type] +
        ` cursor-pointer rounded-md px-4 py-2 tracking-wider shadow-sm transition-all duration-200 focus:outline-none active:scale-95 md:tracking-wide ${className}`
      }
    >
      {children}
    </button>
  );
}
