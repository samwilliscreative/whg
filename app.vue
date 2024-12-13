<template>
  <div>
    <h1 class="mb-4 text-2xl">This is my form</h1>

    <DynamicForm
      :fields="formFields"
      @submitForm="handleSubmitForm"
    ></DynamicForm>

    <p v-if="showSuccessMessage" class="mt-4">Form submitted succesfully!</p>
  </div>
</template>
<script setup lang="ts">
import {
  DynamicFormFieldType,
  type DynamicFormData,
  type DynamicFormField,
} from "./components/DynamicForm/types/dynamic-form";

const showSuccessMessage = ref(false);

const formFields: DynamicFormData[] = [
  {
    name: "name",
    label: "Name",
    type: DynamicFormFieldType.text,
    value: null,
    validation: [{ required: true }, { minChars: 2 }],
  },
  {
    name: "email",
    label: "Email",
    type: DynamicFormFieldType.email,
    value: null,
    validation: [{ required: true }],
  },
  {
    name: "service",
    label: "Choice of Service",
    type: DynamicFormFieldType.dropdown,
    options: [
      { value: 1, label: "First choice" },
      { value: 2, label: "Second choice" },
    ],
    value: null,
    validation: [{ required: true }],
  },
];

const handleSubmitForm = (formData: DynamicFormField[]): void => {
  showSuccessMessage.value = true;
};
</script>
