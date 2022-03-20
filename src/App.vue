<template>
  <div :class="page">
    <DashboardLayout>
      <Dashboard class="min-w-full" />

      <Grid mode="photo">
        <Card class="w-auto" v-for="(bug, index) in bugs" :key="index">
          <template:header>
            <Row class="flex-wrap">
              <h1 class="text-xl">
                {{ bug?.Title || "[ no title ]" }}
              </h1>
              <Chip class="shadow-lg bg-red shadow-red/30"
                >Issues ({{ bug?.["Related Issues"]?.length }})</Chip
              >
              <Chip class="shadow-md shadow-orange-400"> Status: {{ bug?.Status }} </Chip>
            </Row>
          </template:header>
          <div class="m-2 text-lg text-tahiti-700">
            {{ bug?.Description }}
          </div>
          <template:footer>
            <Center>
              <Row class="flex-wrap text-lg">
                <Button class="shadow-xl shadow-regal-500/30">
                  <h2 class="m-2">View the Page</h2>
                  <!-- <a href="bug?.Url" /> -->
                </Button>
              </Row>
            </Center>
          </template:footer>
        </Card>
        <!-- <Button class="border-2" @click="count += 1000">{{ count }}</Button> -->
      </Grid>

      <Center>
        <Row>
          <pre>result? {{ result }}</pre>
          <label for="">Search by id</label>
          <input v-model="text" @change="onChange" type="text" />
          <Button @click="search">GO</Button>
        </Row>
      </Center>
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

import { useBugs, useIssues, useTeachings } from "./hooks";
import Chip from "./components/atoms/Chip.vue";
const { issues } = useIssues();
const { bugs } = useBugs();
const { getPageById } = useTeachings();

const text = ref("12345");
const result = ref("");

const search = async () => {
  const response = await getPageById(text.value);
  result.value = response?.data;
};
</script>
