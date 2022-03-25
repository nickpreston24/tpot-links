<template>
  <path></path>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
const length = ref(0);

onMounted(() => {
  length.value = document.querySelector("path").getTotalLength();
  // console.log("props", props);
});

const props = defineProps({
  delay: {
    default: "1.8s",
    required: false,
  },
});
onMounted(() => {
  console.log("props", props);
});
// const shadow = ref(`${props.shadow} / ${props.opacity}`);
const delay = ref(props.delay);
</script>
<style scoped>
path {
  stroke-dasharray: v-bind(length);
  stroke-dashoffset: v-bind(length);
  animation: line-anim 2s ease forwards v-bind(delay);
}

@keyframes line-anim {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
