<template>
  <div>
    <h1 class="text-red">TPOT Pages</h1>

    <Section>
      <Stack>
        <pre v-show="loading">loading? {{ loading }}</pre>
        <pre v-show="error">error? {{ error }}</pre>

        <Button
          @click="createPage(samplePage)"
        >
          Create Page in Neo
        </Button>

        <!-- <pre v-if='devmode' class="text-ocean-600">pages? {{ pages?.length || -1 }}</pre> -->

      <h1 class='text-ocean-600'>Teachings</h1>

      <pre>teachings? {{ teachings }}</pre>
      
      <h1 class='text-ocean-600'>Neo Pages</h1>
      <Grid mode='feed' class='overflow-auto' v-for="(page, i) in pages" :key="i">
          <Card class='m-2'>
            <template v-slot:header>
              <h3>{{ page?.Title || "<no title>" }}</h3>
            </template>
            <p class='overflow-wrap'>{{ page?.Url }}</p>
          </Card>
        </Grid>

      <AddPage/>

      </Stack>
    </Section>
  </div>
</template>

<script>
import { useBugs, usePages, useWordpress } from "../hooks";
import { Stack, Row, Grid } from "../components/flex";
import { Section, Card } from "../components/molecules";
import { Button } from "../components/atoms";
import { devmode } from '../helpers'
import AddPage from '../components/pages/AddPage.vue'

export default {
  data() {
    return {
      samplePage: {
        Title: "Opinion",
        Url: "https://www.thepathoftruth.com/teachings/opinion.htm",
      },
      devmode
    };
  },
  setup(props) {    
    const { pages, loading, error, createPage } = usePages();
    // const { teachings }  = useWordpress();

return {
      pages,
      loading,
      error,
      createPage,
      // teachings
    };
  },
  components: {
    Section,
    Card,
    Stack,
    Row,
    Button,
    Grid,
    AddPage
  },
};
</script>
