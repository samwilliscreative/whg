export enum DynamicFormFieldType {
  checkbox,
  date,
  dropdown,
  email,
  password,
  text,
}

export interface DynamicFormValidationRule {
  required?: boolean;
  minChars?: number;
}

export interface DynamicFormFieldOption {
  value: string | number;
  label: string;
}

export type DynamicFormField = {
  name: string;
  label: string;
  type: DynamicFormFieldType;
  options?: DynamicFormFieldOption[];
  value: null | string | number;
  validation?: DynamicFormValidationRule[];
  isValid: boolean;
  isDirty: boolean;
};
