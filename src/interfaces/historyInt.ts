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

export interface ColorIndicatorIntl {
  errors: string[];
  validationErrors: object;
  data: ColorIntData[];
  metadata: object;
}

export interface ColorIntData {
  id: number;
  label: string;
  color: string;
}

export interface Datum {
  id: number;
  text: string;
  code: string;
  fullName: string;
  date: string;
  startDate: string;
  endDate: string;
  colorStart: string;
  colorEnd: string;
}

export interface UserIntl {
  errors: string[];
  validationErrors: object;
  data: Data;
  metadata: object;
}

interface Data {
  id: number;
  code: string;
  text: string;
  startDate: null;
  endDate: null;
  colorStart: null;
  colorEnd: null;
}
