<template>
  <Stack class="h-screen" :class="page">
    <h1 class="bg-transparent shadow-lg font-extralight text-7xl shadow-tahiti-500/30">
      Welcome to TPOT Links
    </h1>

    <Row>
      <Chip v-for="(link, index) in links" :key="index">
        <router-link
          :to="link?.route"
          class="relative flex items-center font-normal text-white no-underline rounded cursor-pointer select-none hover:bg-tahiti-500 active:bg-tahiti-800"
          :class="{ active: isActive }"
        >
          <transition name="fade">
            <span v-if="!collapsed">
              {{ link?.name }}
            </span>
          </transition>
        </router-link>
      </Chip>
      <Chip>
        <button class="" @click="toggleDarkMode">
          <icon>Toggle {{ darkMode ? "Light Mode" : "Dark Mode" }}</icon>
        </button>
      </Chip>
    </Row>
  </Stack>
</template>

<script setup>
import { ref } from "vue";
import { Center, Stack, Row, Right, Left, Flex } from "../components/flex";
import { Chip } from "../components/atoms";
import { page, toggleDarkMode, darkMode } from "../hooks/useTheme";
const links = ref([
  {
    name: "Go to Issues",
    route: "issues",
  },
]);
</script>
