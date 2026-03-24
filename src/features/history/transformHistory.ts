import type { Datum } from "../../interfaces/historyInt";

export type HistoryItem = {
  id: number;
  code: string;
  fullName: string;
  date: string;
  startDate: Date;
  endDate: Date;
};

/**
 * Transforma la data del backend al formato que espera el Scheduler de DevExtreme
 */
export function transformHistory(data: Datum[]): HistoryItem[] {
  return data.map((item) => ({
    ...item,
    startDate: new Date(item.startDate),
    endDate: new Date(item.endDate),
  }));
}
