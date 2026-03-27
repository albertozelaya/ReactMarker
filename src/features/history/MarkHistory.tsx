import { type SchedulerTypes } from "devextreme-react/scheduler";
import { useEffect, useState } from "react";

import Calendar from "../../components/Calendar";
import { useMarkContext } from "../../contexts/useMarkContext";
import type { HistoryIntl } from "../../interfaces/historyInt";
import AppointmentCustom from "./SingleHistory";
import { transformHistory } from "./transformHistory";

const editing = {
  allowAdding: false,
  allowUpdating: false,
  allowDeleting: false,
  allowDragging: false,
};

const views: SchedulerTypes.ViewType[] = ["day", "week", "workWeek", "month"];

function MarkHistory() {
  const { history } = useMarkContext();
  // 2. Estado para controlar el ancho de forma reactiva
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 800);
  const historyData = history as HistoryIntl;

  const appointments = transformHistory(historyData?.data ?? []);
  // console.log(appointments);

  useEffect(function () {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 800);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen bg-gray-50 px-[10%] py-20 sm:py-16 md:pt-20 xl:pt-16 xl:pb-10 2xl:py-18">
      <article className="3xl:gap-17 flex flex-col gap-10 lg:gap-12 xl:gap-10">
        <h2 className="3xl:text-5xl text-center text-3xl leading-8 font-semibold tracking-tight text-gray-800 lg:text-4xl lg:text-gray-700 xl:text-4xl xl:tracking-normal 2xl:text-[2.75rem]">
          Historial
        </h2>

        <Calendar
          className="3xl:h-[76vh] h-120 shadow-md sm:h-128 lg:h-[75vh] lg:shadow-lg xl:h-[76vh] xl:shadow-xl"
          dataSource={appointments}
          customComponent={AppointmentCustom}
          defaultCurrentView="month"
          defaultCurrentDate={appointments.at(-1)?.startDate}
          views={views}
          editing={editing}
          adaptivityEnabled={!isLargeScreen}
        />
      </article>
    </div>
  );
}

export default MarkHistory;
