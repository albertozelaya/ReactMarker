export interface MarkersIntl {
  errors: any[];

  validationErrors: ValidationErrors;
  data: Datum[];
  metadata: ValidationErrors;
}

interface Datum {
  type: string;
  description: string;
}

interface ValidationErrors {}
