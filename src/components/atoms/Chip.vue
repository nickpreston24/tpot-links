<template>
  <!-- <div :style="{ 'background-color': color }" @click="toggle" class=""> -->

  <div class="rounded-full">
    <button
      @click="close"
      class="inline-flex items-center px-6 py-3 m-2 font-semibold bg-transparent rounded-md shadow-sm"
    >
      <Row>
        <slot></slot>
      </Row>
    </button>
  </div>
  <!-- 
    
      <svg class="w-5 h-5 ml-3" fill="currentColor" viewBox="0 0 20 20">
        <path
          fill-rule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
     -->

  <!-- </div> -->
  <!-- TODO: Use this when Vuetify catches up to Vue 3 -->
  <!-- <div id="app">
    <v-app id="inspire">
      <v-container fluid>
        <v-layout wrap>
          <v-flex xs12>
            <v-combobox
              multiple
              v-model="select"
              label="Tags"
              append-icon
              chips
              deletable-chips
              class="tag-input"
              :search-input.sync="search"
              @keyup.tab="updateTags"
              @paste="updateTags"
            >
            </v-combobox>
          </v-flex>

          <v-chip close v-for="tag in select" color="success" text-color="white">
            &nbsp; <v-icon left>label</v-icon>{{ tag }}
          </v-chip>
        </v-layout>
      </v-container>
    </v-app>
  </div> -->
</template>
<script>
import Row from "../flex/Row.vue";
import Stack from "../flex/Stack.vue";

export default {
  components: {
    Row,
    Stack,
  },
  props: {
    // primary: { type: String, default: "green" },
    // secondary: { type: String, default: "red" },
  },
  data() {
    return {
      // color: "green",
    };
  },
  methods: {
    // toggle() {
    //   this.toggled = !this.toggled;
    //   this.color = this.toggled ? "red" : "bg-orange-500";
    //   console.log("this.color", this.color);
    // },
  },
};
</script>
<style local>
/* border: 2px solid #42b983;
  border-radius: 0% 50% 50% 0%;
  outline: none; */

.tag-input span.chip {
  background-color: #1976d2;
  color: #fff;
  font-size: 1em;
}

.tag-input span.v-chip {
  background-color: #1976d2;
  color: #fff;
  font-size: 1em;
  padding-left: 7px;
}

.tag-input span.v-chip::before {
  content: "label";
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 20px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}
</style>
