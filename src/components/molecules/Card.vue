<template>
  <!-- NOTE: I'm keeping the 'card' class a required so that animated grids can keyframe it -->
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
</template>
<script>
export default {
  data() {
    return {
      isHovering: false,
    };
  },
  computed: {
    animation() {
      return this.isHovering ? "shadow-xl" : "shadow-lg";
    },
  },
};
</script>
<style scoped>
.resizeable {
  resize: horizontal;
  overflow: hidden;
}
</style>
