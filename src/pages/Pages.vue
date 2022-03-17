<template>
  <div>
    <h1>Test</h1>
    <pre v-show="loading">loading? {{ loading }}</pre>
    <Section>
      <div class="text-ocean-500">pages? {{ pages }}</div>
    </Section>
    <pre v-show="error">error? {{ error }}</pre>

    <button @click="createPage(samplePage)" class="bg-orange-500">
      Create Page in Neo
    </button>
  </div>
</template>

<script>
import { useBugs, useNeo } from "../hooks";
import { Section } from "../components/molecules";
export default {
  data() {
    return {
      samplePage: {
        Title: "Opinion",
        Url: "https://www.thepathoftruth.com/teachings/opinion.htm",
      },
    };
  },
  setup(props) {
    // const { bugs } = useBugs();
    const { pages, loading, error, createPage } = useNeo();

    return {
      // bugs,
      pages,
      loading,
      error,
      createPage,
    };
  },
};
</script>
