import type { Datum } from "../../interfaces/historyInt";

interface TableTodayParams {
  data?: Datum;
}

const getDate = function (date: string) {
  return new Intl.DateTimeFormat(navigator.language, {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  })
    .format(new Date(date))
    .toLowerCase()
    .replace(/\s/g, "");
};

export function TableToday({ data }: TableTodayParams) {
  return (
    /* He añadido border-collapse para que los bordes internos se rendericen bien */
    <table className="border-collapse overflow-hidden rounded-sm tracking-wide shadow-sm xl:w-[18rem]">
      <thead>
        <tr>
          <th className="3xl:text-lg bg-gray-300 p-2 text-start text-sm font-semibold text-gray-700 xl:text-base">
            Entrada
          </th>
          <th className="3xl:text-lg border-l border-l-gray-200 bg-gray-300 p-2 text-start text-sm font-semibold text-gray-700 xl:text-base">
            Salida
          </th>
        </tr>
      </thead>

      <tbody>
        <tr className="bg-container">
          <td className="3xl:text-lg p-2 text-start text-sm text-gray-600 xl:text-base">
            {data?.startDate ? getDate(data?.startDate) : "Pendiente"}
          </td>
          <td className="3xl:text-lg text-main border-l border-l-gray-200 p-2 text-start text-sm font-semibold xl:text-base">
            {data?.endDate ? getDate(data?.endDate) : "Pendiente"}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
