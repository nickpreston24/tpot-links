<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { collapsed } from "./useSidebar";
import { sidebar } from "../../../hooks/useTheme";

export default {
  props: {
    to: { type: String, required: true },
    icon: { type: String, required: true },
  },
  setup(props) {
    const route = useRoute();
    const isActive = computed(() => route?.path === props.to);

    return {
      collapsed,
      isActive,
    };
  },
};
</script>

<template>
  <router-link
    :to="to"
    class="relative flex items-center h-8 m-2 font-normal text-white no-underline rounded cursor-pointer select-none hover:bg-tahiti-500 active:bg-tahiti-800"
    :class="sidebar"
  >
    <!-- 
    :class="{ active: isActive }"
   -->
    <icon class="flex-shrink w-5 ml-2 mr-2" :class="icon"></icon>
    <transition name="fade">
      <span v-if="!collapsed">
        <slot />
      </span>
    </transition>
  </router-link>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1 s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
/* 
.link:hover {
  background-color: var(--sidebar-item-hover);
}

.link:active {
  background-color: var(--sidebar-item-active);
} */
</style>
