<template>
  <button
    @click="close"
    :class="chip"
    class="inline-flex items-center font-semibold border-2 rounded-full"
  >
    <Row class="m-1">
      <slot></slot>
      <slot name="icon" />
    </Row>
  </button>
</template>
<script setup>
import { computed, ref } from "vue";
import Row from "../flex/Row.vue";
import Stack from "../flex/Stack.vue";
import { chip } from "../../hooks/useTheme";
// const color = ref("orange");
// const text = ref("white");
// const style = computed(() => {
//   return `bg-${color?.value}-500 text-${text?.value}`;
// });
</script>
