import type { AppointmentComponentProps } from "../../components/Calendar";
import { dateWithLargeHours } from "../../utils/dateHelpers";
import type { HistoryItem } from "./transformHistory";

// AppointmentCustom.tsx
export default function SingleHistory(
  model: AppointmentComponentProps<HistoryItem>,
) {
  const { appointmentData } = model.data;

  return (
    <figure className="3xl:p-0.5 3xl:gap-1 flex flex-col gap-0.5 xl:text-sm 2xl:text-base">
      <div
        style={{ backgroundColor: appointmentData?.colorStart }}
        className="3xl:px-2 rounded bg-amber-500 px-1 lg:pl-0.5"
      >
        <span>&rarr;</span>
        <span>&nbsp;</span>
        <span>
          {appointmentData?.startDate?.includes("T")
            ? dateWithLargeHours(appointmentData?.startDate)
            : "Pendiente"}
        </span>
      </div>

      <div
        style={{ backgroundColor: appointmentData?.colorEnd }}
        className="3xl:px-2 rounded bg-indigo-500 px-1 lg:pl-0.5"
      >
        <span>&larr;</span>
        <span>&nbsp;</span>

        <span>
          {appointmentData?.endDate?.includes("T")
            ? dateWithLargeHours(appointmentData?.endDate)
            : "Pendiente"}
        </span>
      </div>
    </figure>
  );
}
