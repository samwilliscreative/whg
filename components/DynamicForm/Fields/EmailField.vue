<template>
  <input
    v-model="field.value"
    :id="field.name"
    @change="(field.isDirty = true), (field.isValidated = false)"
    type="email"
    class="border"
    :class="getErrorClass(field)"
  />
</template>
<script setup lang="ts">
import type { DynamicFormField } from "../types/dynamic-form";

const { getErrorClass } = useDynamicForm();

interface TextFieldProps {
  field: DynamicFormField;
}

defineProps<TextFieldProps>();
</script>
