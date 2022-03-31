<template>
  <div class="">
    <!-- Debugging panel for aligning svgs -->
    <span v-if="debug">
      <pre class="text-white">viewBox? {{ viewBox }}</pre>

      <Row>
        <div class="text-white">
          <label for="">Width</label>
          <Button @click="width--">-</Button>
          <Button @click="width++">+</Button>
        </div>
        <div class="text-white">
          <label for="">Height</label>
          <Button @click="height--">-</Button>
          <Button @click="height++">+</Button>
        </div>
        <div class="text-white">
          <label for="">X</label>
          <Button @click="x--">-</Button>
          <Button @click="x++">+</Button>
        </div>

        <div class="text-white">
          <label for="">Y</label>
          <Button @click="y--">-</Button>
          <Button @click="y++">+</Button>
        </div>
      </Row>

      <Button @click="reset">reset</Button>
    </span>
    <svg
      id="logo"
      :viewBox="box"
      class="border-2 border-yellow-400"
      xmlns="http://www.w3.org/2000/svg"
    >
      <slot></slot>
      <!-- Wanna try this w/ slots: https://github.com/sethidden/vue-compound-components -->
      <!-- <template #default="scope">
        <LetterPath :multiple="scope.multiple" />
      </template> -->

      <!-- Try this: https://jefrydco.id/en/blog/safe-access-vue-refs-undefined/ 
       to fix your Letter lengths
       -->
    </svg>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import useViewBox from "./useViewBox";
import { Row } from "../../flex";
import { Button } from "../../atoms";
const { width, height, viewBox, x, y } = useViewBox();
const box = !!props?.debug ? viewBox : props?.viewBox;
function reset() {
  x.value = 28;
  y.value = 78;
  width.value = 66;
  height.value = 16;
}
const props = defineProps({
  debug: {
    default: false,
  },
  viewBox: {
    type: String,
    default: "0 0 40 40",
  },
  // width: {
  //   default: "100mm",
  // },
  // height: {
  //   default: "100mm",
  // },
  opacity: {
    type: Number,
    default: 0.5,
  },
  shadow: {
    required: false,
    default: "0 0 0",
  },
  from: {
    required: false,
    default: "transparent",
  },
  to: {
    required: false,
    default: "white",
  },
});

onMounted(() => {
  // console.log("props", props);
});
</script>
<style>
#logo {
  animation: fill 0.5s ease forwards 3.5s;
}

@keyframes fill {
  from {
    fill: v-bind(from);
  }
  to {
    fill: v-bind(to);
    filter: drop-shadow(5px 15px 12px rgb(v-bind(shadow)));
  }
}
</style>
