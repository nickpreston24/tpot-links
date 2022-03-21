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
    class="text-2xl duration-300 p-25 text-tahiti-100 z-1"
    :class="className"
    :style="{ width: sidebarWidth }"
  >
    <h1 class="mx-auto">
      <span v-if="collapsed">
        <div>T</div>
        <div>L</div>
      </span>
      <span class="" v-else>TPOT Links</span>
    </h1>

    <span class="mx-auto">
      <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
      <SidebarLink to="/issues" icon="fas fa-gear">Issues</SidebarLink>
      <SidebarLink to="/about" icon="fas fa-image">About</SidebarLink>
    </span>

    <span
      class="absolute bottom-0 p-2 mb-4 ml-4 text-white transition duration-200 opacity-70"
      @click="toggleSidebar"
      :class="{ 'rotate-180': collapsed }"
    >
      <!-- <icon class="fas fa-angle-double-left" /> -->
      <icon v-if="mode === 'RIGHT'" class="text-xl"> {{ ">>" }} </icon>
      <icon v-else class="text-xl"> {{ "<<" }} </icon>
    </span>
  </div>
</template>
<style scoped>
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
