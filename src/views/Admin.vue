<template>
  <div class="h-screen bg-primary">
    <!-- <button class="btn btn-primary" v-on:click="count++">ADD</button> -->

    <!-- STATS -->
    <div v-if="false" class="stats shadow">
      <div class="stat">
        <div class="stat-figure text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-8 h-8 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </div>
        <div class="stat-title">Total Likes</div>
        <div class="stat-value text-primary">25.6K</div>
        <div class="stat-desc">21% more than last month</div>
      </div>

      <div class="stat">
        <div class="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-8 h-8 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </div>
        <div class="stat-title">Page Views</div>
        <div class="stat-value text-secondary">2.6M</div>
        <div class="stat-desc">21% more than last month</div>
      </div>

      <div class="stat">
        <div class="stat-figure text-secondary">
          <div class="avatar online">
            <div class="w-16 rounded-full">
              <img src="https://placeimg.com/128/128/people" />
            </div>
          </div>
        </div>
        <div class="stat-value">86%</div>
        <div class="stat-title">Tasks done</div>
        <div class="stat-desc text-secondary">31 tasks remaining</div>
      </div>
    </div>

    <!-- <div x-data="{ open: false }">
      <button @click="open = true">Expand</button>

      <span x-show="open"> Content... </span>
    </div> -->

    <!-- CARDS -->
    <div
      class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:col-auto gap-4"
    >
      <div
        x-data="{ show_excerpt: false }"
        v-for="page in pages"
        class="flex items-center justify-center"
      >
        <div class="indicator">
          <div
            class="bg-neutral text-white card w-96 bg-primary text-primary-content"
          >
            <div class="card-body" :key="page.Id">
              <span class="indicator-item badge badge-secondary">{{
                page.Id
              }}</span>

              <h2 class="card-title">{{ page.Title }}</h2>

              <!-- BADGES -->

              <div>
                <div class="flex flex-row">
                  <div v-if="page.Tags !== ''" class="flex flex-row gap-1">
                    <span
                      class="badge bade-lg badge-info"
                      v-for="tag in page.Tags?.split(',')"
                    >
                      {{ tag }}
                    </span>
                  </div>

                  <div v-if="page?.Status !== ''" class="flex flex-row gap-1">
                    <span class="badge bade-lg badge-accent">
                      {{ page.Status }}
                    </span>
                  </div>

                  <div class="flex flex-row gap-1">
                    <span class="badge bade-lg badge-secondary">
                      Comments {{ page.Comment_status }}
                    </span>
                  </div>
                </div>

                <div v-if="false && page?.Categories !== ''">
                  <span
                    class="badge bade-lg badge-info"
                    v-for="category in page.Categories?.split(',')"
                  >
                    {{ category }}
                  </span>
                </div>
              </div>

              <!-- EXCERPT -->
              <div tabindex="0" class="collapse group">
                <div
                  class="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content"
                >
                  Focus me to see content
                </div>
                <div
                  class="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content"
                >
                  <p v-html="page.Excerpt"></p>
                </div>
              </div>

              <!-- BUTTONS -->
              <div class="flex flex-row">
                <div class="card-actions justify-end">
                  <button :href="page.url" class="btn btn-primary">Go</button>
                  <button class="btn btn-secondary">Edit</button>
                  <button class="btn btn-ghost">Update</button>
                </div>
              </div>
              <!-- <div class="form-control w-52">
              <label class="cursor-pointer label">
                <span class="label-text">Remember me</span>
                <input
                  type="checkbox"
                  class="toggle toggle-secondary"
                  checked
                  x-on:checked="show_excerpt = !show_excerpt"
                />
              </label>

              <span x-text="show_excerpt"></span>
            </div> -->

              <!-- <p class="text-secondary" v-show="false" v-html="page.Excerpt"></p> -->

              <!-- 
            <div v-show="show_excerpt">
            </div> -->

              <!-- 
           

            <div class="form-control">
              <label class="cursor-pointer label">
                <span class="label-text text-lg text-info">Comments Allowed?</span>
                <input
                  type="checkbox"
                  checked="checked"
                  disabled
                  class="checkbox checkbox-success"
                />
              </label>
            </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { get_first_10_pages } from '../db/neo.js'
const devmode = import.meta.env.DEV

const count = ref(-5)
const pages = ref([])

console.log('count :>> ', count)
onMounted(async () => {
  const results = await get_first_10_pages()
  pages.value = results
  pages && console.log('pages :>> ', pages)
})
</script>
