<template>
  <div>
    <h2 class="text-ocean-600">Add a Page</h2>

    <div class="">
      <ul v-if="true">
        <li class="p-2" v-for="(value, key, index) in page" :key="index">
          <Label class="mr-2">{{ key }}:</Label>
          <input type="text" v-bind:placeholder="key" @input="onChange" />
        </li>
      </ul>
      <!-- <pre>ready? {{ ready }}</pre> -->
      <!-- <pre>ready? {{ page }}</pre> -->
      <div class="">
        <Button v-if="ready" v-on:click="createPage(page)">Add Page</Button>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
import { Button } from "../atoms";
import { countEmpty, falsies } from "../../helpers";
import { usePages } from "../../hooks";
import { Stack, Row, Grid } from "../../components/flex";
export default {
  setup(props) {
    const { createPage } = usePages();
    return {
      createPage,
    };
  },
  data() {
    return {
      page: {
        Title: "",
        Url: "",
      },
    };
  },
  methods: {
    onChange(e) {
      const target = e.target;
      const value = target.type === "checkbox" ? target.checked : target.value;
      const name = target.placeholder;
      this.page[name] = value;
    },
  },
  computed: {
    ready() {
      return countEmpty(this?.page) === 0;
    },
  },
  components: {
    Button,
  },
};
</script>
