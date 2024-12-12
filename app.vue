<template>
  <div>
    <h1>This is my form</h1>
    <DynamicForm :fields="formFields"></DynamicForm>
  </div>
</template>
<script setup lang="ts">
import {
  DynamicFormFieldType,
  type DynamicFormField,
} from "./components/DynamicForm/types/dynamic-form";

const formFields: DynamicFormField[] = [
  {
    name: "name",
    label: "Name",
    type: DynamicFormFieldType.text,
    value: null,
    validation: [{ required: true }, { minChars: 2 }],
    isValid: false,
    isDirty: false,
  },
  {
    name: "email",
    label: "Email",
    type: DynamicFormFieldType.email,
    value: null,
    validation: [{ required: true }],
    isValid: false,
    isDirty: false,
  },
  {
    name: "password",
    label: "Password",
    type: DynamicFormFieldType.password,
    value: null,
    isValid: false,
    isDirty: false,
  },
  {
    name: "date",
    label: "Date",
    type: DynamicFormFieldType.date,
    value: null,
    isValid: false,
    isDirty: false,
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
    isValid: false,
    isDirty: false,
  },
  {
    name: "terms",
    label: "Terms and Conditions ",
    type: DynamicFormFieldType.checkbox,
    value: null,
    isValid: false,
    isDirty: false,
  },
];
</script>
