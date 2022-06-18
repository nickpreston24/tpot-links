<template>
  <Stack class="h-screen" :class="page">
    <h1 class="bg-transparent shadow-lg font-extralight text-7xl shadow-tahiti-500/30">
      Welcome to TPOT Links
    </h1>
    <p class="text-orange-300">
      An issue tracker for <a :href="url"> The Path of Truth </a>
    </p>
    <Row>
      <Chip>
        <button>
          <a :href="tpotlink"> Visit The Path of Truth </a>
        </button>
      </Chip>

      <Chip v-for="(link, index) in links" :key="index">
        <router-link
          :to="link?.route"
          class="relative flex items-center font-normal no-underline rounded cursor-pointer select-none hover:bg-tahiti-500 active:bg-tahiti-800"
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
          <p>Toggle {{ darkMode ? "Light Mode" : "Dark Mode" }}</p>
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
const tpotlink = "https://www.thepathoftruth.com";
const links = ref([
  {
    name: "Go to Issue Dashboard",
    route: "issues",
  },
]);
</script>
