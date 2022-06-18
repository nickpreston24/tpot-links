<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <Page />
  </div>
</template>

<script setup>
import { Page } from "./components/templates";
import { collapsed } from "./components/organisms/sidebar/useSidebar";
import { onMounted } from "vue-demi";
onMounted(async () => {
  setTimeout(() => {
    collapsed.value = true;
  }, 2500);
});
</script>
