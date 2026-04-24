import type { Datum } from "../../interfaces/historyInt";
import { dateWithHours } from "../../utils/dateHelpers";

interface TableTodayParams {
  data?: Datum;
}

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
            className={`3xl:text-lg 3xl:p-2 p-2 text-start text-sm font-semibold italic lg:text-base ${data?.startDate ? "text-gray-800" : "text-main"}`}
          >
            {data?.startDate ? dateWithHours(data?.startDate) : "Pendiente"}
          </td>
          <td
            className={`3xl:text-lg 3xl:p-2 border-l border-l-gray-200 p-2 text-start text-sm font-semibold italic lg:text-base ${data?.endDate ? "text-gray-800" : "text-main"} `}
          >
            {data?.endDate ? dateWithHours(data?.endDate) : "Pendiente"}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
