<template>
  <header
    class="z-0 flex items-center justify-between px-6 py-2 bg-white border-b-4 border-indigo-600 max-w-auto"
    :class="searchbar"
  >
    <div cl class="flex items-center">
      <button
        @click="collapsed = true"
        class="text-gray-500 focus:outline-none lg:hidden"
      >
        <svg
          class="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6H20M4 12H20M4 18H11"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <div class="relative mx-4 lg:mx-0">
        <span class="absolute inset-y-0 left-0 flex items-center pl-3 ml-2">
          <svg class="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>

        <input
          class="py-2 pl-10 pr-4 ml-8 text-indigo-600 border-gray-200 rounded-md sm:w-64 focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
          type="text"
          placeholder="Search"
          v-model="text"
        />
        <!-- <pre>targets? {{ targets }}</pre> -->
        <!-- <pre>text? {{ text }}</pre> -->
        <!-- <pre>results? {{ fuzzyResults }}</pre> -->
        <!-- <p>{{ fuzzyResults?.map((r) => r?.target) }}</p> -->
        <ul>
          <li v-for="(result, index) in fuzzyResults" :key="index">
            <!-- <p>{{ result?.[0]?.target }}</p> -->
            <!-- <p>{{ result?.[1]?.target }}</p> -->
            <!-- <pre>{{ result?.obj}}</p> -->
            <!-- <pre>result?.obj? {{ result?.obj }}</pre> -->
            <span class="bg-ocean-200">
              <h1 class="font-bold">{{ result?.Title }}</h1>
              <!-- <p class="font-bold">{{ result?.Excerpt }}</p> -->
            </span>
          </li>
        </ul>
        <!-- <pre>inverted? {{ inverted }}</pre> -->
      </div>
    </div>

    <div class="flex items-center">
      <div class="flex items-center">
        <div class="relative">
          <button class="" @click="toggleDarkMode">
            <icon>{{ darkMode ? "Mode: Dark :)" : "Mode: Light :(" }}</icon>
          </button>
        </div>

        <div class="relative">
          <button
            @click="notificationOpen = !notificationOpen"
            class="flex mx-4 text-gray-600 focus:outline-none"
          >
            <svg
              class="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          <div
            v-show="notificationOpen"
            @click="notificationOpen = false"
            class="fixed inset-0 z-10 w-full h-full"
          ></div>

          <div
            v-show="notificationOpen"
            class="absolute right-0 z-10 mt-2 overflow-hidden bg-white rounded-lg shadow-xl w-80"
            style="width: 20rem"
          >
            <slot :name="notifications" />
          </div>
        </div>
      </div>
      <div class="relative">
        <button
          @click="dropdownOpen = !dropdownOpen"
          class="relative z-10 block w-10 h-10 overflow-hidden rounded-full shadow focus:outline-none text-tahiti-300"
        >
          <span>V H</span>
          <!-- <img
            class="object-cover w-full h-full"
            src=""
            alt="Your avatar"
          /> -->
        </button>

        <div
          v-show="dropdownOpen"
          @click="dropdownOpen = false"
          class="fixed inset-0 z-10 w-full h-full"
        ></div>

        <transition
          enter-active-class="transition duration-150 ease-out transform"
          enter-from-class="scale-95 opacity-0"
          enter-to-class="scale-100 opacity-100"
          leave-active-class="transition duration-150 ease-in transform"
          leave-from-class="scale-100 opacity-100"
          leave-to-class="scale-95 opacity-0"
        >
          <div
            v-show="dropdownOpen"
            class="absolute right-0 z-20 w-48 py-1 mt-2 bg-white rounded-lg shadow-xl"
          >
            <a
              href="#"
              class="flex px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-indigo-600 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Profile</a
            >
            <a
              href="#"
              class="flex px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-indigo-600 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Settings</a
            >
            <router-link
              to="/"
              class="flex px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-indigo-600 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Log out</router-link
            >
          </div>
        </transition>
      </div>
    </div>
  </header>
</template>
<script setup>
import { ref, computed } from "vue";
import { collapsed, hidden } from "../organisms/sidebar/useSidebar";
import { Center, Stack, Row, Right, Left, Flex } from "../flex";
import { darkMode, toggleDarkMode, useTeachings } from "../../hooks";
const dropdownOpen = ref(false);
const notificationOpen = ref(false);
const searchbar = computed(() => {
  if (!!hidden.value) return "";
  return collapsed.value ? "ml-10" : "ml-48";
});

const { teachings } = useTeachings();

const text = ref("");
// const inverted = computed(() => {
//   return text?.value?.reverse();
// });

// const contents = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur doloribus facere magni impedit? Vel doloribus mollitia tempora. Veniam omnis, distinctio tenetur laudantium perspiciatis earum sequi excepturi neque dolor, necessitatibus soluta!

// Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quas accusantium excepturi officiis dolores enim iusto aliquid quos reprehenderit unde explicabo dignissimos, illum amet quod mollitia, inventore, praesentium consequatur. Sapiente!`;

// async function fuzzySearch(text) {
//   console.log("text", text);
//   const results = fuzzysort.go(text, contents, { key: null });
//   console.log("fuzzy results", results);
// }

const targets = computed(() => {
  return teachings.value?.map((teaching) => {
    return {
      Title: teaching?.Title,
      Content: teaching?.Contents,
      Excerpt: teaching?.Excerpt,
      Description: teaching?.Description,
    };
  });
});

/** from: https://github.com/farzher/fuzzysort */
const options = {
  limit: 100,
  allowTypo: true,
  threshold: -10000,
  key: null,
  keys: ["Title", "Excerpt", "Description", "Content"],
};

const fuzzyResults = computed(() => {
  // let targets = contents.split(/[\s*.!,\t*]+/);
  let results = fuzzysort.go(text.value, targets.value, options);

  var bestResult = results?.[0];
  if (bestResult?.length > 0) {
    fuzzysort.highlight(bestResult?.[0]);
    fuzzysort.highlight(bestResult?.[1]);
  }
  console.log("results", results);
  // bestResult.obj.title
  return results.map((r) => r?.obj);
});
</script>
