// From:
https://medium.com/js-dojo/error-exception-handling-in-vue-js-application-6c26eeb6b3e4
<template>
  <div>
    <slot v-if="err" name="error" v-bind:err="err" v-bind:vm="vm" v-bind:info="info">
      <Center>
        <Stack>
          <h1>OOPS!</h1>
          <p>Something went wrong</p>
          <!-- <pre>{{ test }}</pre> -->
          <Button @click="home">Take Me Home</Button>
          <!-- <Button @click="back">Go Back</Button> -->
        </Stack>
      </Center>
    </slot>
    <slot v-else></slot>
  </div>
</template>

<script>
import { Button } from "./atoms";
import { Center } from "./flex";
import { Section } from "./molecules";
import { create } from "../hooks/airtable";

export default {
  name: "error-boundary",
  props: {
    stopPropagation: Boolean,
  },
  methods: {
    home() {
      window.location.replace("/");
    },
    back() {
      window.history.back();
    },
  },
  data() {
    return {
      err: false,
      vm: null,
      info: null,
    };
  },
  render(h) {
    return this.err ? h("p", "Something went wrong") : this.$slots.default[0];
  },
  computed: {
    test() {
      return this.vm;
    },
  },
  errorCaptured(err, vm, info) {
    // console.log("error boundary:>>", err);
    this.err = err;
    this.vm = vm;
    this.info = info;

    // console.log("test", { ...err });

    const issue = {
      Info: info,
      StackTrace: err.toString(),
      Type: "Bug",
      // Component: view.toString()
    };
    console.log("issue", issue);

    create("Issues", issue)
      .then((res) => {
        console.log("response", res);
      })
      .catch((err) => {
        console.error(err);
      });
    return !this.stopPropagation;
  },
  components: {
    Button,
    Center,
    Section,
  },
};
</script>
