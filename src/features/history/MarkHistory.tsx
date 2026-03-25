import { type SchedulerTypes } from "devextreme-react/scheduler";

import Calendar from "../../components/Calendar";
import { useMarkContext } from "../../contexts/useMarkContext";
import type { HistoryIntl } from "../../interfaces/historyInt";
import { transformHistory } from "./transformHistory";

const middleWidth = window.innerWidth > 800;

const editing = {
  allowAdding: false,
  allowUpdating: false,
  allowDeleting: false,
  allowDragging: false,
};

const views: SchedulerTypes.ViewType[] = [
  "timelineDay",
  "timelineWeek",
  "workWeek",
  "timelineMonth",
];

function MarkHistory() {
  const { history } = useMarkContext();
  const historyData = history as HistoryIntl;

  const appointments = transformHistory(historyData?.data ?? []);

  return (
    <article className="3xl:gap-16 flex flex-col gap-10 xl:gap-14">
      <div>
        <h2 className="3xl:text-5xl text-center text-3xl leading-8 font-semibold tracking-tight text-gray-800 lg:text-4xl lg:text-gray-700 xl:text-4xl xl:tracking-normal 2xl:text-[2.75rem]">
          Historial
        </h2>
      </div>

      <Calendar
        className="3xl:h-[74vh] h-120 sm:h-128 lg:h-[75vh] xl:h-[72vh]"
        dataSource={appointments}
        defaultCurrentView="timelineDay"
        defaultCurrentDate={appointments.at(-1)?.startDate}
        views={views}
        editing={editing}
        adaptivityEnabled={!middleWidth}
      />
    </article>
  );
}

export default MarkHistory;
