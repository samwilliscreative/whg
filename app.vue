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
  { name: "name", label: "Name", type: DynamicFormFieldType.text },
  { name: "email", label: "Email", type: DynamicFormFieldType.email },
  { name: "password", label: "Password", type: DynamicFormFieldType.password },
  { name: "date", label: "Date", type: DynamicFormFieldType.date },
  {
    name: "service",
    label: "Choice of Service",
    type: DynamicFormFieldType.dropdown,
  },
  {
    name: "terms",
    label: "Terms and Conditions ",
    type: DynamicFormFieldType.checkbox,
  },
];
</script>
