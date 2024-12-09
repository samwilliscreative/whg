export enum DynamicFormFieldType {
  checkbox,
  date,
  dropdown,
  email,
  password,
  text,
}

export type DynamicFormField = {
  name: string;
  label: string;
  type: DynamicFormFieldType;
};
