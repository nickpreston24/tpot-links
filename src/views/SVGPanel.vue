<template>
  <stack>
    <h1>Hello, from SVGs!</h1>
    <Grid mode="feed">
      <Card v-for="(attachment, index) in attachments" :key="index">
        <img :src="attachment?.url" />
      </Card>
    </Grid>

    <div v-if="false">
      <label for="">SVG ICONS</label>
      <Stack v-for="icon in icons" :key="icon.id">
        <Card class="bg-white">
          <h1>{{ icon?.Name }}</h1>
          <p>{{ icon?.Id }}</p>
          <MySVG
            class="w-64 h-64"
            :width="icon?.Width"
            :height="icon?.Height"
            :viewbox="icon?.ViewBox"
            :svg="icon?.Content"
          />
        </Card>
      </Stack>
    </div>
  </stack>
</template>
<script setup>
import { computed } from "vue-demi";
import { Center, Stack, Row, Right, Left, Flex, Grid } from "../components/flex";
import { Card } from "../components/molecules";
import { useSVGs } from "../hooks";

const { icons } = useSVGs();
const firstAttachment = computed(() => icons?.value[0]?.Attachments?.[0]);
const attachments = computed(() => icons?.value.map((a) => a?.Attachments?.[0]));
</script>
