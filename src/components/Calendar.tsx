import { forwardRef, type ReactNode } from "react";

import Scheduler, {
  type SchedulerRef,
  type SchedulerTypes,
} from "devextreme-react/scheduler";
import type { FirstDayOfWeek } from "devextreme/common";
import "devextreme/dist/css/dx.light.css";
import { Buttons, type ButtonsIntl } from "./Buttons";

// 1. Extraemos el tipo base de una cita de DevExtreme para asegurar compatibilidad
type AppointmentBase = SchedulerTypes.Appointment;
type EditingConfig = SchedulerTypes.Properties["editing"];

export interface AppointmentComponentProps<T> {
  data: {
    appointmentData: T;
    targetedAppointmentData?: T;
  };
  index: number;
}

interface CalendarParams<T extends AppointmentBase> {
  children?: ReactNode;
  dataSource?: T[];
  defaultCurrentView?: string;
  defaultCurrentDate?: Date | string;
  height?: string | number;
  width?: string | number;
  startDayHour?: number;
  endDayHour?: number;
  cellDuration?: number;
  firstDayOfWeek?: FirstDayOfWeek;
  showAllDayPanel?: boolean;
  views: SchedulerTypes.ViewType[];
  customComponent?: React.ComponentType<AppointmentComponentProps<T>>;
  className?: string;
  buttons?: ButtonsIntl[];
  editing?: EditingConfig;
  adaptivityEnabled?: boolean;
}

// 3. Aplicamos la misma restricción en la función
const CalendarInner = <T extends AppointmentBase>(
  {
    children,
    dataSource,
    defaultCurrentView = "timelineMonth",
    defaultCurrentDate = new Date(),
    customComponent,
    startDayHour = 7,
    endDayHour = 20,
    cellDuration = 60,
    firstDayOfWeek = 1,
    showAllDayPanel = false,
    className,
    editing,
    buttons,
    views,
    height,
    width,
    adaptivityEnabled = true,
  }: CalendarParams<T>,
  ref?: React.Ref<SchedulerRef>,
) => {
  return (
    <div className="bg-gray-100 p-4 shadow-md lg:shadow-lg xl:shadow-xl">
      {buttons && <Buttons buttons={buttons} />}

      <Scheduler
        ref={ref}
        timeZone="America/Tegucigalpa"
        className={`3xl:h-[76vh] h-120 sm:h-128 lg:h-[45vh] xl:h-[85vh] [&_.dx-scheduler-header]:border-none! [&_.dx-scheduler-header]:bg-gray-100! ${className}`}
        dataSource={dataSource}
        views={views}
        appointmentComponent={customComponent}
        adaptivityEnabled={adaptivityEnabled}
        defaultCurrentView={defaultCurrentView}
        defaultCurrentDate={defaultCurrentDate}
        height={height}
        width={width}
        startDayHour={startDayHour}
        endDayHour={endDayHour}
        cellDuration={cellDuration}
        firstDayOfWeek={firstDayOfWeek}
        showAllDayPanel={showAllDayPanel}
        onAppointmentRendered={(e) => {
          e.appointmentElement.style.backgroundColor = "transparent";
          e.appointmentElement.style.borderColor = "transparent";
          e.appointmentElement.style.boxShadow = "none";
        }}
        editing={editing}
      >
        {children}
      </Scheduler>
    </div>
  );
};

const Calendar = forwardRef(CalendarInner) as <T extends AppointmentBase>(
  props: CalendarParams<T> & { ref?: React.Ref<SchedulerRef> },
) => React.ReactElement;

export default Calendar;
