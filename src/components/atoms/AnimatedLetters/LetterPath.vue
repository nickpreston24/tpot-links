<template>
  <path ref="path"></path>
</template>

<script setup>
import { computed, onMounted, ref, onUpdated } from "vue";
import { devmode } from "../../../helpers";
const length = ref(0);
// const length = computed(() => {
//   console.log("this?.$refs", this?.$refs);
//   return this?.$refs?.getTotalLength();
// });
const delay = ref(props.delay);

onMounted(() => {
  length.value = document.querySelector("path").getTotalLength();
  devmode && console.log("length.value", length.value); // TODO: all these paths turn out to have the same length.  Somehow, I'll need to have that be a passed down property.

  devmode && console.log("delay.value", delay.value);
});
// created(() => {
//   devmode && console.log("this.$refs", this.$refs);
// });

onUpdated(() => {
  devmode && console.log("this.$refs", this.$refs);
});

const props = defineProps({
  delay: {
    default: ".3s",
    required: false,
  },
});
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
