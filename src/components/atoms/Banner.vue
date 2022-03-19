<template>
  <div
    v-show="open"
    class="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-60"
  >
    <div
      class="flex justify-between p-3 text-sm bg-gray-800 shadow-lg text-gray-50 md:rounded"
    >
      <div>
        👉
        <a
          class="hover:underline"
          href="https://github.com/tal7aouy/vue-board"
          target="_blank"
          rel="noreferrer"
        >
          <slot />
        </a>
      </div>
      <button class="ml-5 text-gray-500 hover:text-gray-400" @click="open = false">
        <span class="sr-only">Close</span>
        <svg class="w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16">
          <path
            d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { defineProps, ref } from "vue";
const props = defineProps();
const open = ref(true);
</script>
