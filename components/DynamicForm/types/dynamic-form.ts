export type DynamicFormProps = {
  fields: DynamicFormData[];
};

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

export type DynamicFormData = {
  name: string;
  label: string;
  type: DynamicFormFieldType;
  options?: DynamicFormFieldOption[];
  value: null | string | number;
  validation?: DynamicFormValidationRule[];
};

export interface DynamicFormField extends DynamicFormData {
  isValid: null | boolean;
  isValidated: boolean;
  isDirty: boolean;
}
