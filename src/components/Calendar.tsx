import { type ReactNode } from "react";

import Scheduler, { type SchedulerTypes } from "devextreme-react/scheduler";
import type { FirstDayOfWeek } from "devextreme/common";
import "devextreme/dist/css/dx.light.css";

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
  editing?: EditingConfig;
  adaptivityEnabled?: boolean;
}

// 3. Aplicamos la misma restricción en la función
function Calendar<T extends AppointmentBase>({
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
  views,
  height,
  width,
  adaptivityEnabled = true,
}: CalendarParams<T>) {
  return (
    <Scheduler
      timeZone="America/Tegucigalpa"
      className={className}
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
  );
}

export default Calendar;
