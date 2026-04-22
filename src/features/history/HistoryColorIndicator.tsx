import { useState } from "react";

import { useMarkContext } from "../../contexts/useMarkContext";
import type { ColorIntData } from "../../interfaces/historyInt";

interface HistoryColorIndicatorParams {
  data?: ColorIntData[];
  className?: string;
}

export default function HistoryColorIndicator() {
  const { colorIndData } = useMarkContext();
  const [openIndicator, setOpenIndicator] = useState(false);

  const handleIndicator = function () {
    setOpenIndicator((open) => !open);
  };

  return (
    <>
      <button
        className="3xl:text-xl 3xl:h-10 3xl:w-10 3xl:font-bold 3xl:border-gray-200 absolute top-8 right-5 h-8 w-8 cursor-pointer rounded-full border border-gray-100 bg-none p-1 font-semibold text-gray-600 shadow-sm lg:right-8 xl:h-9 xl:w-9 xl:text-lg"
        onClick={handleIndicator}
      >
        {openIndicator ? "X" : "i"}
      </button>

      <ColorIndicator
        data={colorIndData?.data}
        className={
          openIndicator
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }
      />
    </>
  );
}

export function ColorIndicator({
  data,
  className,
}: HistoryColorIndicatorParams) {
  return (
    <aside
      className={`absolute top-18 right-5 z-30 rounded-sm p-3 text-sm tracking-wider text-gray-800 shadow-sm transition-opacity duration-200 lg:right-8 lg:p-4 xl:top-20 xl:shadow-md 2xl:p-5 2xl:tracking-wide ${className} 3xl:border-gray-200 3xl:shadow-lg 3xl:text-lg 3xl:backdrop-blur-md border border-gray-100 bg-gray-50/50 backdrop-blur-sm lg:text-base xl:rounded-lg`}
    >
      <ul className="flex flex-col gap-1 xl:gap-2">
        {data?.map((info) => {
          return (
            <li className="flex items-center gap-2 xl:gap-3" key={info?.id}>
              <span
                className="3xl:h-4 3xl:w-4 h-2 w-2 rounded-full xl:h-3 xl:w-3"
                style={{ backgroundColor: info?.color }}
              />
              <p>{info?.label}</p>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
