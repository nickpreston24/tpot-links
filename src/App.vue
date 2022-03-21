<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <Page>
      <template v-slot:header>
        <!-- <Sidebar /> -->
      </template>
    </Page>
  </div>
</template>

<script setup>
import { Page } from "./components/templates";
</script>
