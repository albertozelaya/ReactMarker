export interface HistoryIntl {
  errors: any[];
  validationErrors: ValidationErrors;
  data: Datum[];
  metadata: ValidationErrors;
}

interface Datum {
  id: number;
  code: string;
  fullName: string;
  date: string;
  checkInTime: string;
  checkOutTime: string;
}

interface ValidationErrors {}
