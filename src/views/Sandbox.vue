<template>
  <div>
    <Grid mode="photo" class="max-h-screen p-2xl">
      <Card class="text-yellow-500 shadow-sm bg-slate-600 shadow-yellow-500">
        <Center>
          <AnimatedPathSVG />
        </Center>
      </Card>

      <Card v-if="false" class="text-yellow-500 shadow-sm bg-red shadow-yellow-500">
        <HtmlParser />
      </Card>
      <Card v-if="false" class="text-yellow-500 shadow-sm bg-red shadow-yellow-500">
        <AddPage />
      </Card>

      <Card v-if="false" class="text-yellow-500 shadow-sm bg-red shadow-yellow-500">
        <TeachingsPanel />
      </Card>

      <Card v-if="false" class="text-yellow-500 shadow-sm bg-red shadow-yellow-500">
        <SVGPanel />
      </Card>

      <Card v-if="false">
        <Gradient>
          <span class="p-lg"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, praesentium
            sequi hic facere, et, tenetur sint doloribus cumque expedita sit alias ipsam
            omnis eaque qui suscipit inventore. Eum, quaerat magnam.</span
          >
        </Gradient>
      </Card>
    </Grid>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { Center, Stack, Row, Right, Left, Flex, Grid } from "../components/flex";
import { Card } from "../components/molecules";
import { Gradient, AnimatedPathSVG } from "../components/atoms";
import { HtmlParser, AddPage, TeachingsPanel, SVGPanel } from "../views";
</script>
