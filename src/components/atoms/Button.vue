/* https://tailwindcss.com/docs/box-shadow */

<template>
  <button :class="class">
    <div class="m-2">
      <slot></slot>
    </div>
  </button>
</template>
<script>
export default {
  props: {
    theme: {
      type: String,
      default: "btn-primary",
    },
  },
  computed: {
    class() {
      return this.theme;
    },
  },
};
</script>
/* class="m-0 inline-flex items-center px-6 py-3 mx-auto w-full justify-center rounded-md
border border-gray-300 shadow-sm px-4 py-2 text-base font-medium text-gray-700
hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" */
