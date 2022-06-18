<template>
  <stack>
    <h1>{{ teachings?.length }} teachings</h1>

    <Stack>
      <label for="">JSON extraction of Ids</label>
      <textarea v-model="json" />

      <p>{{ idsOnly }}</p>
      <button @click="pushIds(idsOnly)">Push Ids</button>
    </Stack>

    <!-- <Stack>
      <Center v-for="(link, index) in linksOnly" :key="index">
        Chunk #{{ index + 1 }} has {{ chunk?.length }} links
        <p>{{ toSlugFormat(link) }}</p>
        <button @click="push(link)">Push</button>
      </Center>
    </Stack> -->

    <!-- <label for="">Get by slug</label>
    <input v-model="slug" type="text" />
    <pre>slug? {{ slug }}</pre>
    <p>{{ linksOnly[90] }}</p>
    <button @click="getPageBySlug(slug)">Get by slug</button> -->
    <!-- <p>{{ toSlugFormat(teaching) }}</p> -->
  </stack>
</template>

<script setup>
import { computed, ref } from "vue";
import { Stack } from "../components/flex";
import { devmode } from "../helpers";
import { useTeachings } from "../hooks";
const { teachings, createPage, getPageById, getPageBySlug } = useTeachings();
const slug = ref("");
const json = ref("");

const linksOnly = computed(() => {
  return teachings?.value?.map((t) => t?.Links.split(",")).flat();
});

const idsOnly = computed(() => {
  return JSON.parse(json?.value || "[{}]")?.map((x) => x?.["id"]);
});

async function pushIds(ids = []) {
 
}

async function push(link = null) {
  // console.log("link recieved", link);

  const slugs = toSlugFormat(link);
  // console.log("slugs", slugs);
  const result = await getPageBySlug(slugs);
  console.log("result of slug push:>>", result);
}
function toSlugFormat(url = "") {
  let permutations = [];
  // newer format
  permutations.push(
    url
      .replace("https://www.thepathoftruth.com/", "")
      .replace(" ", "-")
      .replace(".htm", "")
  );
  permutations.push(
    url
      .replace("https://www.thepathoftruth.com/", "")
      .replace(" ", "-")
      .replace("/", "__")
      .replace(".htm", "-htm") // older format
  );
  // devmode && console.log("permutations", permutations);
  return permutations;
}
// function toSlugFormat({
//   Title,
//   Category = null, //e.g. The Issues of Life
//   isAnIndex = false, //e.g. is a chinese index
//   Link = ''
// }) {
//   // the-solution-for-the-russian-ukrainian-war
//   //the-issues-of-life___supporting-evil-by-doing-nothing-htm
//   // teachings___holy-waters-htm

//   if(Link) return

//   // Old format:
//   return `${Category ? Category + "__" : ""}${Title.replace(" ", "-").toLowerCase()}`;
// }
</script>
Stack
