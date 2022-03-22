<template>
  <div
    @mouseover="onMouseOver"
    @mouseleave="onMouseLeave"
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
      <SidebarLink to="/https://tpot-scribe.vercel.app/" icon="fas fa-image"
        >Scribe</SidebarLink
      >
      <SidebarLink to="/issues" icon="fas fa-gear">Issues</SidebarLink>
      <SidebarLink to="/about" icon="fas fa-image">About</SidebarLink>
      <SidebarLink v-if="devmode" to="/sandbox" icon="fas fa-image">Sandbox</SidebarLink>
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
<script setup>
import { devmode } from "../../../helpers";
import SidebarLink from "./SidebarLink.vue";
import { collapsed, toggleSidebar, sidebarWidth, className, hidden } from "./useSidebar";
const props = defineProps({
  mode: { type: String, default: "LEFT" },
});

function onMouseLeave() {
  collapsed.value = true;
  // setTimeout(() => {
  // }, 1500);s
}

function onMouseOver() {
  // setTimeout(() => {
  collapsed.value = false;
  // }, 500);
}
</script>
<style scoped>
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
