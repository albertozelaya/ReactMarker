import type { Datum } from "../../interfaces/historyInt";

export type HistoryItem = {
  id: number;
  code: string;
  fullName: string;
  date: string;
  startDate: string;
  endDate: string;
  colorStart: string;
  colorEnd: string;
};

export function transformHistory(data?: Datum[]) {
  if (!data) return;

  return data.map((app) => ({
    ...app,
    startDate:
      typeof app.startDate === "string"
        ? app.startDate.replace(" ", "T")
        : app.startDate,
    endDate:
      typeof app.endDate === "string"
        ? app.endDate.replace(" ", "T")
        : app.endDate,
  }));
}
