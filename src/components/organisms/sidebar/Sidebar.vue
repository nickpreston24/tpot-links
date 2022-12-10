<template>
  <div class="drawer">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <div class="w-full navbar bg-base-300">
        <div class="flex-none lg:hidden">
          <label for="my-drawer-3" class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-6 h-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div class="flex-1 px-2 mx-2">TPOT Links</div>
        <div class="flex-none hidden lg:block">
          <ul class="menu menu-horizontal">
            <li v-for="route in routes">
              <SidebarLink :to="route.path">{{ route.name }}</SidebarLink>
              <!-- <a :href="route.path">{{ route.name }}</a> -->
            </li>
          </ul>
        </div>
      </div>
      <!-- Page content here -->
      <slot></slot>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-3" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 bg-ghost">
        <li v-for="route in routes">
          <SidebarLink :to="route.path">{{ route.name }}</SidebarLink>
          <!-- <a :href="route.path">{{ route.name }}</a> -->
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { routes } from '../../../router/index.js'

const devmode = import.meta.env.DEV
devmode && console.log('routes :>> ', routes)
import SidebarLink from '../sidebar/SidebarLink.vue'
</script>
<style scoped>
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
