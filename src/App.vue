<template>
  <div :class="page">
    <DashboardLayout>
      <Dashboard class="min-w-full" />

      <Grid>
        <Card class="border-2" v-for="(bug, index) in bugs" :key="index">
          <template:header>
            <h1>{{ bug?.Title || "[ no title ]" }}</h1>
          </template:header>
          <div>hi</div>
          <template:footer>
            <Chip>{{ bug?.Status }} </Chip>
          </template:footer>
        </Card>
        <!-- <Button class="border-2" @click="count += 1000">{{ count }}</Button> -->
      </Grid>
    </DashboardLayout>
  </div>
</template>

<script setup>
import { DashboardLayout } from "./components/templates";
import { Center, Stack, Row, Right, Left, Flex, Grid } from "./components/flex";
import BugsPanel from "./views/BugsPanel.vue";
import TeachingsPanel from "./views/TeachingsPanel.vue";
import LogsPanel from "./views/LogsPanel.vue";
import { ref } from "vue  ";
import { devmode } from "./helpers";
import { Dashboard } from "./views";
import { Button } from "./components/atoms";
import { Card } from "./components/molecules";
import {
  primaryButton,
  header,
  sidebar,
  page,
  toggleDarkMode,
  themeMap,
  darkMode,
} from "./hooks/useTheme";

import { useBugs, useIssues, useLogs } from "./hooks";
import Chip from "./components/atoms/Chip.vue";
const { issues } = useIssues();
const { bugs } = useBugs();
</script>
