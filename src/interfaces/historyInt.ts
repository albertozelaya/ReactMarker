export interface HistoryIntl {
  errors: string[];
  validationErrors: object;
  data: Datum[];
  metadata: object;
}
export interface HistoryTodayIntl {
  errors: string[];
  validationErrors: object;
  data: Datum;
  metadata: object;
}

export interface Datum {
  id: number;
  code: string;
  fullName: string;
  date: string;
  startDate: string;
  endDate: string;
  colorStart: string;
  colorEnd: string;
}
