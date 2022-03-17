/* https://tailwindcss.com/docs/box-shadow */

<template>
  <button :class="class">
    <div
      :class="class"
      class="rounded-lg p-tiny bg-ocean-400 text-ocean-800 hover:bg-ocean-500"
    >
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
/* class="inline-flex items-center justify-center w-full px-4 px-6 py-2 py-3 m-0 mx-auto text-base font-medium text-gray-700 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" */
