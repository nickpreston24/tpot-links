<template>
  <div>
    <Dashboard class="h-screen" />

    <!-- <div v-else>
      <DashboardSplitLayout class="text-xl font-bold text-white">
        <template v-slot:header>
          <Stack class="w-auto h-32 bg-yellow-500 border-tahiti-600">
            <teachings-panel />
          </Stack>
        </template>
        <template v-slot:top>
          <Stack class="w-auto h-32 bg-yellow-500 border-tahiti-600">
            <bugs-panel />
          </Stack>
        </template>
        <template v-slot:left>
          <Left class="w-auto h-32 bg-yellow-500 border-tahiti-600">
            <logs-panel />
          </Left>
        </template>
        <template v-slot:right>
          <Right class="w-auto h-32 bg-yellow-500 border-tahiti-600">
            <Stack class="w-16 h-16 bg-tahiti-500">1</Stack>
            <Stack class="w-16 h-16 bg-tahiti-500">2</Stack>
            <Stack class="w-16 h-16 bg-tahiti-500">3</Stack>
          </Right>
        </template>
        <template v-slot:bottom>
          <Stack class="w-auto h-32 bg-yellow-500 border-tahiti-600">Bottom</Stack>
        </template>
      </DashboardSplitLayout>
    </div> -->
  </div>
</template>

<script>
import { DashboardSplitLayout } from "./components/templates";
import { Center, Stack, Row, Right, Left, Flex } from "./components/flex";
import BugsPanel from "./views/BugsPanel.vue";
import TeachingsPanel from "./views/TeachingsPanel.vue";
import LogsPanel from "./views/LogsPanel.vue";
import { ref } from "vue  ";
import { devmode } from "./helpers";
import { Dashboard } from "./views";

export default {
  name: "App",
  setup(props) {
    const dashboardType = ref("default");
    return {
      dashboardType,
    };
  },
  data() {
    return { dashTypes: ["default", "standard"], devmode };
  },
  computed: {
    dashboardType() {
      return this.dashboardType.value;
    },
  },
  methods: {
    setDashboardType() {
      console.log("dashboardType.value", this?.dashboardType);
      this.dashboardType.value = "test";
    },
  },
  components: {
    BugsPanel,
    Dashboard,
    DashboardSplitLayout,
    Center,
    Stack,
    Row,
    Right,
    Left,
    Flex,
    LogsPanel,
    TeachingsPanel,
  },
};
</script>
