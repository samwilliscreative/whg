import type {
  DynamicFormData,
  DynamicFormField,
} from "~/components/DynamicForm/types/dynamic-form";

const useDynamicForm = () => {
  const buildFormFields = (fields: DynamicFormData[]): DynamicFormField[] => {
    return fields.map((field) => {
      return {
        ...field,
        isValid: null,
        isValidated: false,
        isDirty: false,
      };
    });
  };

  const getErrorClass = (field: DynamicFormField): string => {
    return field.isDirty && !field.isValid && field.isValidated
      ? "!text-rose-600 border-rose-600"
      : "";
  };

  return { buildFormFields, getErrorClass };
};

export default useDynamicForm;
