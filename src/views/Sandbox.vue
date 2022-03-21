<template>
  <Center>
    <h1>SANDBOX!! :D</h1>
    <Grid mode="feed">
      <Card class="text-yellow-500 shadow-sm bg-red shadow-yellow-500">
        <HtmlParser />
      </Card>
    </Grid>
  </Center>
</template>
<script setup>
import { ref } from "vue";
import { Center, Stack, Row, Right, Left, Flex, Grid } from "../components/flex";
import { Card } from "../components/molecules";
import { HtmlParser } from "../views";
// const panels = ref(["html-parser", "other"]);
</script>
