<template>
  <router-link
    :to="to"
    :class="{ active: isActive }"
    class="relative flex items-center h-8 m-2 font-normal text-ghost no-underline rounded cursor-pointer select-none hover:bg-info active:bg-primary link link-secondary"
  >
    <icon class="flex-shrink w-5 ml-2 mr-2" :class="icon"></icon>
    <transition name="fade">
      <span>
        <slot />
      </span>
    </transition>
  </router-link>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import { useRoute } from 'vue-router'
import { collapsed } from './useSidebar'
import { sidebar } from '../../../hooks/useTheme'

const props = defineProps({
  to: { type: String, required: true },
  icon: { type: String, required: true }
})

const route = useRoute()
const isActive = computed(() => route?.path === props.to)
</script>

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
