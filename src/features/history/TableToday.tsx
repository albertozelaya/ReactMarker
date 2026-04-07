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
    <table className="border-collapse overflow-hidden rounded-sm tracking-wide shadow-sm">
      <thead>
        <tr>
          <th className="3xl:text-lg 3xl:p-2 bg-gray-300 p-2 text-start text-sm font-medium text-gray-700 lg:text-base">
            Entrada
          </th>
          <th className="3xl:text-lg 3xl:p-2 border-l border-l-gray-200 bg-gray-300 p-2 text-start text-sm font-medium text-gray-700 lg:text-base">
            Salida
          </th>
        </tr>
      </thead>

      <tbody>
        <tr className="bg-container">
          <td
            className={`3xl:text-lg 3xl:p-2 p-2 text-start text-sm font-semibold italic lg:text-base ${data?.startDate ? "" : "text-main"}`}
          >
            {data?.startDate ? getDate(data?.startDate) : "Pendiente"}
          </td>
          <td
            className={`3xl:text-lg 3xl:p-2 border-l border-l-gray-200 p-2 text-start text-sm font-semibold italic lg:text-base ${data?.endDate ? "" : "text-main"} `}
          >
            {data?.endDate ? getDate(data?.endDate) : "Pendiente"}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
