<template>
  <div
    class="box-border items-center justify-center max-h-screen p-0 m-0 bg-slate-600 lex"
  >
    <svg
      id="logo"
      fill="none"
      width="200mm"
      height="200mm"
      viewBox="0 0 210 230"
      xmlns="http://www.w3.org/2000/svg"
    >
      <slot v-for="i in 8" :key="i" :delay="i"></slot>
      <!-- Wanna try this w/ slots: https://github.com/sethidden/vue-compound-components -->
      <!-- <template #default="scope">
        <LetterPath :multiple="scope.multiple" />
      </template> -->
    </svg>
  </div>
</template>
<script setup>
import { onMounted } from "vue";

const props = defineProps({
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
  console.log("props", props);
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
