import { useState } from "react";
import {
  colorIndicatorData,
  type ColorIndicatorParams,
} from "../../data/colorIndicatorData";

interface HistoryColorIndicatorParams {
  data: ColorIndicatorParams[];
  className?: string;
}

export default function HistoryColorIndicator() {
  const [openIndicator, setOpenIndicator] = useState(false);

  const handleIndicator = function () {
    setOpenIndicator((open) => !open);
  };

  return (
    <>
      <div className="absolute top-8 right-5 rounded-full bg-gray-100 p-1 font-semibold text-gray-600 shadow-sm lg:right-8 xl:border xl:border-gray-600 xl:text-lg 2xl:font-bold">
        <button
          className="h-6 w-6 cursor-pointer bg-none"
          onClick={handleIndicator}
        >
          {openIndicator ? "X" : "i"}
        </button>
      </div>

      <ColorIndicator
        data={colorIndicatorData}
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
      className={`absolute top-18 right-5 z-30 rounded-sm bg-gray-200/40 p-3 text-sm tracking-wider text-gray-800 shadow-sm transition-opacity duration-200 lg:right-8 lg:p-4 xl:top-20 2xl:p-5 2xl:tracking-wide ${className} backdrop-blur-sm lg:text-base lg:backdrop-blur-md xl:rounded-lg xl:border xl:border-gray-600 2xl:text-lg`}
    >
      <ul className="flex flex-col gap-1 xl:gap-2">
        {data?.map((info) => {
          return (
            <li className="flex items-center gap-2 xl:gap-3">
              <span
                className="h-2 w-2 rounded-full xl:h-3 xl:w-3 3xl:h-4 3xl:w-4"
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
