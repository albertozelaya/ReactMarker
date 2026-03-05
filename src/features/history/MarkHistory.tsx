import { singleHistoryData } from "./historySlice";
import SingleHistory from "./SingleHistory";

function MarkHistory() {
  return (
    <aside className="w-full overflow-hidden rounded-lg bg-gray-50 px-8 py-12 pt-8 pb-6 shadow-lg sm:pt-6 lg:py-10 xl:grid xl:w-2/3 xl:grid-cols-1 xl:pt-9">
      <div className="">
        <h2 className="text-center text-[1.4rem] leading-8 font-semibold tracking-tight text-gray-800 uppercase lg:text-gray-700 xl:text-xl">
          Historial de marcados
        </h2>
      </div>

      <div className="mt-4 max-h-32 overflow-auto rounded-md sm:max-h-40 xl:max-h-80">
        <div className="flex flex-col gap-4 lg:gap-5">
          {singleHistoryData.map((history) => (
            <SingleHistory
              key={history.id}
              date={history.date}
              checkInTime={history.checkInTime}
              checkOutTime={history.checkOutTime}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}

export default MarkHistory;
