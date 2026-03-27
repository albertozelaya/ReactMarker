export function TableToday() {
  return (
    <table className="overflow-hidden rounded-sm tracking-wide shadow-sm">
      <thead>
        <tr>
          <th className="border-none bg-gray-300 p-2 text-start text-sm xl:text-base font-semibold text-gray-700">
            Entrada
          </th>
          <th className="border-none bg-gray-300 p-2 text-start text-sm xl:text-base font-semibold text-gray-700">
            Salida
          </th>
        </tr>
      </thead>

      <tbody>
        <tr className="bg-container">
          <td className="border-gray-100 p-2 text-start text-sm xl:text-base">9:30am</td>
          <td className="border-gray-100 p-2 text-start text-sm xl:text-base text-gray-600">
            Pendiente
          </td>
        </tr>
      </tbody>
    </table>
  );
}
