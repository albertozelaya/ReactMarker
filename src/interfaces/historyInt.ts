import type { MarkersState } from "../features/marker/markerSlice";

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
  text: string;
  code: string;
  fullName: string;
  date: string;
  startDate: string;
  endDate: string;
  colorStart: string;
  colorEnd: string;
}

//* History colors
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

//* User
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

export interface HistoryTransformed {
  startDate: string;
  endDate: string;
  id: number;
  text: string;
  code: string;
  fullName: string;
  date: string;
  colorStart: string;
  colorEnd: string;
}

//* API
export interface GetHistoryParams<T> {
  onSuccess: (data: T) => void;
  loadingKey: keyof MarkersState["loading"];
  params?: Record<string, string>;
  successMsg?: string;
  errorMsg: string;
}

