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
    <Calendar
      dataSource={appointments}
      defaultCurrentDate={new Date()}
      className="z-20 h-60 sm:h-72 lg:h-[80vh]"
      views={views}
      editing={editing}
      adaptivityEnabled={!middleWidth}
    />
  );
}

export default MarkHistory;
