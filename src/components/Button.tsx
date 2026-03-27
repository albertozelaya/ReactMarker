import { useEffect, useRef } from "react"; // 1. Importar hooks

interface ButtonParams {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className = "" }: ButtonParams) {
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    btnRef.current?.focus();
  }, []);

  return (
    <div className="flex items-center justify-center">
      <button
        ref={btnRef}
        className={`bg-main hover:bg-button-hover 3xl:text-[1.3rem] cursor-pointer rounded-md px-4 py-2 font-semibold tracking-wider text-gray-100 uppercase shadow-sm transition-all duration-200 active:scale-95 md:tracking-wide xl:px-5 xl:py-2.5 xl:text-base xl:font-bold xl:tracking-wider ${className} z-20 focus:ring focus:ring-red-400 focus:ring-offset-1 focus:outline-none`}
      >
        {children}
      </button>
    </div>
  );
}
