import SingleHistory from "./SingleHistory";

function MarkHistory() {
  return (
    <aside className="w-full overflow-hidden rounded-lg bg-gray-50 px-8 py-12 pt-8 pb-6 shadow-lg xl:grid xl:w-2/3 xl:grid-cols-2">
      <div className="">
        <h2 className="text-center text-[1.4rem] text-gray-800 xl:text-3xl">
          Historial de marcados
        </h2>
      </div>

      <div className="mt-4 max-h-64 overflow-auto rounded-md">
        <div className="flex flex-col gap-4">
          <SingleHistory />
          <SingleHistory />
          <SingleHistory />
        </div>
      </div>
    </aside>
  );
}

export default MarkHistory;
