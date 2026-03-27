import type { AppointmentComponentProps } from "../../components/Calendar";
import { shortDate } from "../../utils/dateHelpers";
import type { HistoryItem } from "./transformHistory";

// AppointmentCustom.tsx
export default function SingleHistory(
  model: AppointmentComponentProps<HistoryItem>,
) {
  const { appointmentData } = model.data;

  return (
    <figure className="3xl:p-1 3xl:text-sm 3xl:gap-1.5 flex flex-col gap-0.5 lg:gap-1 xl:text-xs">
      <div
        style={{ backgroundColor: appointmentData?.colorStart }}
        className="3xl:pl-1 rounded bg-amber-500 lg:pl-0.5"
      >
        <span>&rarr; &nbsp;</span>
        <span>{shortDate(appointmentData.startDate)}</span>
      </div>

      <div
        style={{ backgroundColor: appointmentData?.colorEnd }}
        className="3xl:pl-1 rounded bg-indigo-500 lg:pl-0.5"
      >
        <span>&larr; &nbsp;</span>
        <span>{shortDate(appointmentData.endDate)}</span>
      </div>
    </figure>
  );
}
