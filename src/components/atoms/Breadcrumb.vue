<template>
  <nav class="mb-6 text-sm font-semibold" :class="breadcrumb" aria-label="Breadcrumb">
    <ol class="inline-flex p-0 list-none">
      <li class="flex items-center text-purple">
        <a href="/" class="ml-2">Dashboard</a>
        <svg
          class="w-3 h-3 mx-3 text-blue-600 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
          />
        </svg>
      </li>
      <li :key="index" class="flex items-center">
        <a :href="'/' + breadcrumb" class="">{{ breadcrumbName }}</a>
      </li>
    </ol>
  </nav>
</template>
<script setup>
import { defineProps, computed } from "vue";
import { breadcrumb } from "../../hooks/useTheme";
const props = defineProps();
const breadcrumbName = computed(() => {
  return props?.breadcrumb?.toUpperCase() || "(???)";
});
</script>
