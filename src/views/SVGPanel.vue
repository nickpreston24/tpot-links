<template>
  <stack>
    <h1>Hello, from SVGs!</h1>
    <Grid mode="feed">
      <Card v-for="(attachment, index) in attachments" :key="index">
        <img :src="attachment?.url" />
      </Card>
    </Grid>
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
