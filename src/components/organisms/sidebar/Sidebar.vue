<script>
import SidebarLink from "./SidebarLink.vue";
import { collapsed, toggleSidebar, sidebarWidth, className, hidden } from "./useSidebar";

export default {
  props: {
    mode: { type: String, default: "LEFT" },
  },
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth, className, hidden };
  },
};
</script>
<template>
  <div
    v-show="!hidden"
    class="duration-300 p-25 text-tahiti-100 z-1"
    :class="className"
    :style="{ width: sidebarWidth }"
  >
    <!-- <pre>classname: {{ className }}</pre> -->
    <!-- <pre>Mode: {{ mode }}</pre> -->
    <h1>
      <span v-if="collapsed">
        <div>R</div>
        <div>W</div>
      </span>
      <span v-else>Rifle Workshop</span>
    </h1>

    <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
    <SidebarLink to="/builds" icon="fas fa-gear">Builder</SidebarLink>
    <SidebarLink to="/about" icon="fas fa-image">About</SidebarLink>

    <span
      class="absolute bottom-0 p-2 text-white transition duration-200 opacity-70"
      @click="toggleSidebar"
      :class="{ 'rotate-180': collapsed }"
    >
      <icon class="fas fa-angle-double-left" />
    </span>
  </div>
</template>
<style scoped>
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
