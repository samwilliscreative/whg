<template>
  <div v-for="field in fields">
    {{ field.name }}
    {{ field.label }}
    {{ field.type }}
  </div>
</template>
<script setup lang="ts">
import type { DynamicFormField } from "./types/dynamic-form";

defineProps({
  fields: Array<DynamicFormField>,
});
</script>
