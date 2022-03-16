<template>
  <section class="card-wide card-tall" :class="gridType">
    <slot></slot>
  </section>
</template>
<script>
export default {
  props: {
    mode: {
      type: String,
      default: "feed",
    },
  },
  computed: {
    gridType() {
      return `${this.mode}-grid`;
    },
  },
};
</script>

<style scoped>
/* The following are From: https://youtu.be/Qhaz36TZG5Y?list=TLPQMDkwMjIwMjI3gsnCHkv2gA */
/* .grid {
  display: grid;
  grid-template-columns: 1fr 500px 1fr;
  grid-template-rows: 100px 200px;
}

.grid-flex {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 1rem;
  max-width: 80rem;
  margin: 5rem auto;
  padding: 0 5rem;
} */
</style>
