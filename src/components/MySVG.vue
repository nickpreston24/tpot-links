<template>
  <span>
    <div v-html="svgString"></div>
    <pre>props? {{ props?.viewbox }}</pre>
  </span>
</template>
<script setup>
// import { createSVG } from "./svg";
import { ref, computed } from "vue";

const props = defineProps({
  svg: String,
  width: { type: Number, default: 48 },
  height: { type: Number, default: 48 },
  viewbox: { type: String, default: "0 0 100 100" },
});

const { svg, width, height, viewbox } = props;
const content = ref(!!svg ? svg : "<p> No SVG Could be Loaded </p>");
const svgString = computed(() => {
  let text = `
    <svg 
        width="${width}"
        height="${height}"
        viewBox="${viewbox}"
        xmlns="http://www.w3.org/2000/svg">
       ${content?.value}
    </svg>
    `;
  return text;
  //   return createSVG(text);
});
</script>
