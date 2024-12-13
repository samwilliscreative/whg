<template>
  <form @submit.prevent="validateAndSubmit" novalidate>
    <div v-for="field in formFields" class="mb-4">
      <label :for="field.name" class="block">{{ field.label }}</label>

      <DynamicFormFieldsTextField
        v-if="field.type === DynamicFormFieldType.text"
        :field="field"
      ></DynamicFormFieldsTextField>

      <DynamicFormFieldsEmailField
        v-if="field.type === DynamicFormFieldType.email"
        :field="field"
      ></DynamicFormFieldsEmailField>

      <DynamicFormFieldsDropdownField
        v-if="field.type === DynamicFormFieldType.dropdown"
        :field="field"
      ></DynamicFormFieldsDropdownField>
    </div>

    <button type="submit" class="py-2 px-4 bg-green-400 border rounded-lg">
      Submit
    </button>
  </form>
</template>
<script setup lang="ts">
import {
  DynamicFormFieldType,
  type DynamicFormProps,
} from "./types/dynamic-form";

const props = defineProps<DynamicFormProps>();
const emit = defineEmits(["submitForm"]);

const { buildFormFields } = useDynamicForm();
const { testValidationRequired, testValidationMinChars, testValidationEmail } =
  useValidation();

const formFields = ref([...buildFormFields(props.fields)]);

const validateAndSubmit = (): void => {
  if (validateFields()) {
    emit("submitForm", formFields.value);
  }
};

const validateFields = (): boolean => {
  formFields.value.forEach((field) => {
    const testsToDo = [];

    field.validation?.forEach((v) => {
      const validationType = Object.keys(v)[0];

      switch (validationType) {
        case "required":
          testsToDo.push(testValidationRequired(field.value));
          break;
        case "minChars":
          testsToDo.push(testValidationMinChars(field.value));
          break;
      }
    });

    if (field.type === DynamicFormFieldType.email && field.value) {
      testsToDo.push(testValidationEmail(field.value));
    }

    const doAllTestsPass = testsToDo.every((t) => t);

    field.isValid = doAllTestsPass;
    field.isValidated = true;
    field.isDirty = true;
  });

  return !!formFields.value?.every((f) => f.isValid);
};
</script>
