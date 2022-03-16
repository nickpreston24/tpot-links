<!-- TOdo: try this: https://stackoverflow.com/questions/54535838/scroll-behaviour-vuejs-not-working-properly -->
<template>
  <body class="">
    <div class="text-xl text-orange-300 wrapper">
      <header>
        <img :src="backgroundImage" class="background" />
        <img :src="foregroundImage" class="foreground" />

        <div>
          <Section class="items-center text-3xl">
            <Stack class="gap-2 p-10 m-8">
              <p v-for="(item, index) in description.split('\\n')" :key="index">
                {{ item }}
              </p>

              <h1 class="m-8 text-lg lg:text-3xl text-tahiti-100">Choose your Budget:</h1>
              <slider @range-changed="setRange" />
              <button class="text-3xl text-tahiti-200 hover:text-ocean-500">
                <router-link class="shadow-2xl" to="/builds">Go!</router-link>
              </button>

              <Grid v-if="false" :mode="feed" class="gap-2 p-2">
                <chip
                  v-for="description in categories"
                  :key="description"
                  class="text-white transition-all transform bg-orange-600 border-2 border-white shadow-2xl hover:scale-110 rounded-4xl"
                >
                  <router-link to="/builds">{{ description }} </router-link>
                </chip>
              </Grid>
            </Stack>
          </Section>

          <!-- <Gradient v-if="ready" class="w-2/3">
            <Stack>
              <h1 class="text-lg shadow-2xl lg:text-3xl text-arctic-500">
                {{ title }}
              </h1>
              <subtitle class="text-4xl shadow-2xl text-arctic-700">{{
                subtitle
              }}</subtitle>
              <Row class="gap-20">
                <button class="h-20 text-3xl text-ocean-500 hover:text-orange-500">
                  <router-link class="shadow-2xl" to="/builds">Yes!</router-link>
                </button>
                <button class="h-20 text-3xl text-ocean-500 hover:text-orange-500">
                  <router-link class="shadow-2xl" to="/about">F.A.Q.</router-link>
                </button>
              </Row>
            </Stack>
          </Gradient> -->
        </div>
      </header>
    </div>
  </body>
</template>

<script>
import BorderedIcon from "../../components/atoms/BorderedIcon.vue";
import Button from "../../components/atoms/Button.vue";
import Chip from "../../components/atoms/Chip.vue";
import Section from "../molecules/sections/Section.vue";
import BorderShiftButton from "../../components/atoms/BorderShiftButton.vue";
import BlackHoleIcon from "../../components/atoms/BlackHoleIcon.vue";
import Stack from "../../components/flex/Stack.vue";
import Row from "../../components/flex/Row.vue";
import Gradient from "../../components/atoms/Gradient.vue";
import Slider from "../../components/atoms/Slider.vue";
import FadeTransition from "../../components/transitions/FadeTransition.vue";
import { useRange } from "../../hooks";
import { useStorage } from "@vueuse/core";
const storage = useStorage("range", []);

// import { useTimeout } from "@vueuse/core";
// const { ready, start } = useTimeout(5000, { controls: true });

export default {
  props: {
    title: String,
    backgroundImage: String,
    foregroundImage: String,
    subtitle: String,
    description: String,
  },
  data() {
    return {
      categories: ["Home Defense", "LEO/Military", "Hunting", "Competition"],
      title: "Ready to Build?",
      subtitle: "😎",

      ready: false,
    };
  },
  setup(props) {
    const { range } = useRange();
    return {
      range,
    };
  },

  mounted() {
    this.startTimeouts();
  },
  methods: {
    setRange(range) {
      this.range.value = range;
      storage.value = range;
    },

    startTimeouts() {
      setTimeout(() => {
        this.ready = true;
      }, 2000);
    },
  },
  components: {
    BorderedIcon,
    BlackHoleIcon,
    Gradient,
    Stack,
    Row,
    Button,
    BorderShiftButton,
    Slider,
    Section,
    Chip,
    FadeTransition,
    useRange,
  },
};
</script>
<style scoped>
body {
  margin: 0;
}

.wrapper {
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  perspective: 10px;
  width: 100vw;
}

header {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  transform-style: preserve-3d;
  z-index: -1;
}

.background {
  transform: translateZ(-10px) scale(2.1);
}

.foreground {
  transform: translateZ(-5px) scale(1.5);
}

.background,
.foreground {
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: -1;
}

.title {
  text-shadow: 0 0 5px black;
}
</style>
