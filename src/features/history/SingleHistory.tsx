import type { AppointmentComponentProps } from "../../components/Calendar";
import { shortDate } from "../../utils/dateHelpers";
import type { HistoryItem } from "./transformHistory";

// AppointmentCustom.tsx
export default function SingleHistory(
  model: AppointmentComponentProps<HistoryItem>,
) {
  const { appointmentData } = model.data;

  return (
    <figure className="3xl:p-1 3xl:gap-1.5 flex flex-col gap-0.5 lg:gap-1 xl:gap-0.5 xl:text-sm 2xl:text-base">
      <div
        style={{ backgroundColor: appointmentData?.colorStart }}
        className="3xl:px-2 rounded bg-amber-500 px-1 lg:pl-0.5"
      >
        <span>&rarr; &nbsp;</span>
        <span>
          {appointmentData?.startDate?.includes("T")
            ? shortDate(appointmentData?.startDate)
            : "Pendiente"}
        </span>
      </div>

      <div
        style={{ backgroundColor: appointmentData?.colorEnd }}
        className="3xl:px-2 rounded bg-indigo-500 px-1 lg:pl-0.5"
      >
        <span>&larr; &nbsp;</span>
        <span>
          {appointmentData?.endDate?.includes("T")
            ? shortDate(appointmentData?.endDate)
            : "Pendiente"}
        </span>
      </div>
    </figure>
  );
}
