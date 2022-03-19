<template>
  <Sidebar />
  <div :style="{ 'margin-left': sidebarWidth }"></div>
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <ErrorBoundary v-if="prodmode">
        <component :is="Component"></component>
      </ErrorBoundary>
      <div v-else-if="devmode">
        <component :is="Component"></component>
      </div>
    </transition>
  </router-view>
  <Footer class="min-h-64">
    <!-- <template v-slot:left>LEFT</template> -->
    <Stack>
      <a class="m-2" href="#">Affiliates</a>
      <a class="m-2" href="#">Help</a>
    </Stack>
    <!-- <template v-slot:right>RIGHT</template> -->
  </Footer>
</template>
<script>
import Footer from "../molecules/Footer.vue";
import ErrorBoundary from "../../components/ErrorBoundary.vue";
import { devmode, prodmode } from "../../helpers";
import { Sidebar, SidebarLink } from "../../components/organisms/sidebar";
import { sidebarWidth } from "../organisms/sidebar/useSidebar";
export default {
  components: {
    Sidebar,
    Footer,
    ErrorBoundary,
  },
  data() {
    return {
      prodmode,
      devmode,
    };
  },
};
</script>
