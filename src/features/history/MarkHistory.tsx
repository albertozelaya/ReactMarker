import { useMarkContext } from "../../contexts/useMarkContext";
import SingleHistory from "./SingleHistory";

function MarkHistory() {
  const { history } = useMarkContext();

  return (
    <aside className="2xl:max-w-auto 3xl:py-14 w-full overflow-hidden rounded-lg bg-gray-50 p-8 pt-8 pb-6 shadow-lg sm:pt-6 lg:py-10 xl:grid xl:w-2/3 xl:grid-cols-1 xl:pt-9 2xl:py-12">
      <div>
        <h2 className="3xl:text-3xl text-center text-[1.4rem] leading-8 font-semibold tracking-tight text-gray-800 uppercase lg:text-gray-700 xl:text-2xl 2xl:text-[1.6rem]">
          Historial
        </h2>
      </div>

      <div className="3xl:mt-10 mt-4 max-h-32 overflow-auto rounded-md xl:max-h-72 2xl:mt-10 2xl:max-h-[55vh]">
        <div className="3xl:gap-7 flex flex-col gap-4 lg:gap-5 2xl:gap-6">
          {history?.data.map((history) => (
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
