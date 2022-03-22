<template>
  <div :class="page">
    <DashboardLayout>
      <Dashboard class="min-w-full" v-if="true" />

      <!-- Bugs found -->
      <h1 class="text-3xl">Bugs Reported:</h1>
      <Grid mode="photo">
        <Card class="w-auto" v-for="(bug, index) in bugs" :key="index">
          <template:header>
            <Row class="flex-wrap">
              <h1 class="text-xl">
                {{ bug?.Title || "[ no title ]" }}
              </h1>
              <Chip>Issues ({{ bug?.["Related Issues"]?.length }})</Chip>
              <Chip> Status: {{ bug?.Status }} </Chip>
            </Row>
          </template:header>
          <div class="m-2 text-lg text-tahiti-700">
            {{ bug?.Description }}
          </div>
          <template:footer>
            <Center>
              <Row class="flex-wrap text-lg">
                <a :href="bug?.URL">
                  <Button>
                    <h2 class="">View this Page</h2>
                  </Button>
                </a>
              </Row>
            </Center>
          </template:footer>
        </Card>
      </Grid>

      <!-- Known causes of issues -->
      <h1 v-if="devmode" class="text-3xl">Things to Look for:</h1>
      <Grid mode="photo">
        <Card class="w-auto" v-for="(issue, index) in issues" :key="index">
          <template:header>
            <Row class="flex-wrap">
              <h1 class="text-xl">
                {{ issue?.Name || "[ no title ]" }}
              </h1>
            </Row>
          </template:header>
          <div class="m-2 text-lg text-tahiti-700">
            {{ issue?.Description }}
          </div>
          <template:footer>
            <Center>
              <p></p>
            </Center>
          </template:footer>
        </Card>
      </Grid>

      
    </DashboardLayout>
  </div>
</template>

<script setup>
import { DashboardLayout } from "../components/templates";
import { Center, Stack, Row, Right, Left, Flex, Grid } from "../components/flex";
import BugsPanel from "../views/BugsPanel.vue";
import TeachingsPanel from "../views/TeachingsPanel.vue";
import LogsPanel from "../views/LogsPanel.vue";
import { ref } from "vue  ";
import { devmode } from "../helpers";
import { Dashboard } from "../views";
import { Button } from "../components/atoms";
import { Card, SVGIconBase } from "../components/molecules";
import {
  primaryButton,
  header,
  sidebar,
  page,
  toggleDarkMode,
  themeMap,
  darkMode,
} from "../hooks/useTheme";

import { useBugs, useIssues, useTeachings, useSVGs } from "../hooks";
import Chip from "../components/atoms/Chip.vue";
import MySVG from "../hooks/MySVG.vue";
// import { createSVG } from "../hooks/MySVG";

const { issues } = useIssues();
const { bugs } = useBugs();
const { getPageById } = useTeachings();
const { getSVGIcon, icons } = useSVGs();

const text = ref("12345");
const result = ref("");

const search = async () => {
  const response = await getPageById(text.value);
  result.value = response?.data;
};
</script>
