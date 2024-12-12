<template>
  <!-- use form tag -->
  <!-- make this a component and pass each field and then watch each field for changes to mark as dirty -->
  <div v-for="field in formFields">
    {{ field.label }}
    <input
      v-if="field.type === 5"
      v-model="field.value"
      type="text"
      class="border"
      :class="field.isDirty && !field.isValid ? '!text-rose-600' : ''"
    />
    <input
      v-if="field.type === 3"
      v-model="field.value"
      type="email"
      class="border"
      :class="field.isDirty && !field.isValid ? '!text-rose-600' : ''"
    />
    <select
      v-if="field.type === 2"
      v-model="field.value"
      type="email"
      class="border"
      :class="field.isDirty && !field.isValid ? '!text-rose-600' : ''"
    >
      <option v-for="option in field.options" :value="option.value">
        {{ option.label }}
      </option>
    </select>
    valid: {{ field.isValid }}. dirty: {{ field.isDirty }}
  </div>
  <button @click="validateAndSubmit">Submit</button>

  {{ fields }}
</template>
<script setup lang="ts">
import {
  DynamicFormFieldType,
  type DynamicFormField,
} from "./types/dynamic-form";

const props = defineProps({
  fields: Array<DynamicFormField>,
});

const formFields = ref([...props.fields]);
// need a function that adds the valid and dirty etc to the fields. create new interface for what is passed to the builder

const formIsValid = ref(false);

const validateAndSubmit = () => {
  validateFields();

  if (formIsValid.value) {
    // emit submit event
  }
};

const validateFields = () => {
  formFields.value?.forEach((field) => {
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

    const tests = testsToDo.every((t) => t);

    field.isValid = tests;
    field.isDirty = true;
    debugger;

    return tests;
  });

  formIsValid.value = !!formFields.value?.every((f) => f.isValid);
};

const testValidationRequired = (fieldValue): boolean => {
  return !!fieldValue;
};

const testValidationMinChars = (fieldValue): boolean => {
  return fieldValue?.length >= 2;
};

const testValidationEmail = (fieldValue): boolean => {
  return !!String(fieldValue)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
</script>
