<template>
  <div :class="card">
    <div
      v-bind:class="animation"
      @mouseover="isHovering = true"
      @mouseout="isHovering = false"
    >
      <div>
        <slot name="header"></slot>
      </div>
      <div>
        <slot></slot>
      </div>
      <div>
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
import { card } from "../../hooks/useTheme";
const isHovering = ref(false);
const animation = computed(() => {
  return isHovering ? "shadow-xl" : "shadow-lg";
});
</script>
<style scoped>
.resizeable {
  resize: horizontal;
  overflow: hidden;
}
</style>
