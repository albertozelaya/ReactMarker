import { pdf } from "@react-pdf/renderer";
import { type SchedulerTypes } from "devextreme-react/scheduler";
import { memo, useCallback, useMemo } from "react";
import { HistoryPDF } from "./HistoryPDF";

import type { ButtonsIntl } from "../../components/Buttons";
import Calendar from "../../components/Calendar";
import { useMarkContext } from "../../contexts/useMarkContext";
import type { HistoryIntl } from "../../interfaces/historyInt";
import { PDFIcon } from "../../ui/icons/PDFIcon";

import HistoryColorIndicator from "./HistoryColorIndicator";
import AppointmentCustom from "./SingleHistory";
import { transformHistory } from "./transformHistory";

const editing = {
  allowAdding: false,
  allowUpdating: false,
  allowDeleting: false,
  allowDragging: false,
};

const views: SchedulerTypes.ViewType[] = ["month"];
const classIcon = "h-4 w-4 xl:h-5 xl:w-5";

interface MarkHistoryProps {
  history?: HistoryIntl;
}

function MarkHistory({ history }: MarkHistoryProps) {
  const { user, isLargeScreen } = useMarkContext();
  const historyData = history as HistoryIntl;

  const appointments = useMemo(
    () => transformHistory(historyData?.data),
    [historyData?.data],
  );
  const startDateToday = appointments?.at(0)?.startDate;
  const code = user?.data?.code;

  const save = useCallback(async () => {
    const blob = await pdf(
      <HistoryPDF appointments={appointments} code={code} />,
    ).toBlob();
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `Historial_de_Marcajes_${code}.pdf`;
    a.click();

    URL.revokeObjectURL(url);
  }, [appointments, code]);

  const buttons: ButtonsIntl[] = useMemo(
    function () {
      return [
        {
          key: "downloadHistory",
          content: isLargeScreen ? (
            <div className="3xl:gap-1.5 flex items-center gap-2">
              <p>descargar</p>
              <PDFIcon className={classIcon} />
            </div>
          ) : (
            <PDFIcon className={classIcon} />
          ),
          type: "download",
          onClick: save,
        },
      ];
    },
    [isLargeScreen, save],
  );

  return (
    <div className="3xl:h-screen 3xl:pt-19 3xl:pb-16 relative bg-gray-50 px-[10%] py-12 sm:py-16 md:h-screen md:pt-20 xl:h-fit xl:pt-18 xl:pb-14 2xl:mb-0 2xl:pt-21 2xl:pb-16">
      <HistoryColorIndicator />

      <article className="3xl:gap-6 flex flex-col gap-5.5 lg:gap-12 xl:gap-8 2xl:gap-10">
        <h2 className="3xl:text-5xl text-center text-3xl leading-8 font-semibold tracking-tight text-gray-800 lg:text-4xl lg:text-gray-700 xl:text-4xl xl:tracking-normal 2xl:text-[2.75rem]">
          Historial
        </h2>

        <Calendar
          buttons={buttons}
          dataSource={appointments}
          customComponent={AppointmentCustom}
          defaultCurrentView="month"
          views={views}
          editing={editing}
          adaptivityEnabled={!isLargeScreen}
          {...(startDateToday && {
            defaultCurrentDate: startDateToday,
          })}
        />
      </article>
    </div>
  );
}

export default memo(MarkHistory);
