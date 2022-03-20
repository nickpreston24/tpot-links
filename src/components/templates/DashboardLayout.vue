<template>
  <div class="flex h-screen font-roboto">
    <Sidebar />

    <div class="flex flex-col flex-1 overflow-hidden">
      <Header />

      <main class="flex-1 overflow-x-hidden overflow-y-auto">
        <div class="container px-6 py-8 mx-auto">
          <slot />
        </div>
      </main>
      <Footer />
    </div>
  </div>
</template>

<script>
import Sidebar from "../organisms/sidebar/Sidebar.vue";
import Header from "../organisms/Header.vue";
import Footer from "../molecules/Footer.vue";
import { header } from "../../hooks/useTheme";
// import { collapsed } from "../organisms/sidebar/useSidebar";

export default {
  components: {
    Sidebar,
    Footer,
    Header,
  },
};
</script>
