<template>
  <div class="flex flex-row">
    <button
      @click="close"
      class="inline-flex items-center px-12 py-3 font-semibold bg-transparent border-2 rounded-full shadow-sm"
      :class="style"
    >
      <Row class="m-1">
        <slot></slot>
        <slot name="icon" />
      </Row>
    </button>
  </div>
</template>
<script setup>
import { computed, ref } from "vue-demi";
import Row from "../flex/Row.vue";
import Stack from "../flex/Stack.vue";
const color = ref("orange");
const text = ref("white");
const style = computed(() => {
  return `bg-${color?.value}-500 text-${text?.value}`;
});
</script>
