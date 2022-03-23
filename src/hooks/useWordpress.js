import axios from 'axios'
import { ref, onMounted, computed, toRefs } from 'vue'
import { countEmpty, groupBy, isArray, urlExists } from '../helpers'
import { getTPOTFrontPage } from './wordpress'

const config = {
  // endpoint: process.env.REACT_APP_WP_ENDPOINT,
  endpoint: 'https://www.thepathoftruth.com/wp-json'
  // username: process.env.REACT_APP_WP_USERNAME,
  // password: process.env.REACT_APP_WP_PASSWORD,
}

// TODO: Temporary - Refactor this to be DB configurable:
export const wpapi = new WPAPI(config)

export function useWordpress() {
  const users = ref([])
  const superUser = ref(null)
  const token = ref(null)
  const categories = ref([])
  const tags = ref([])
  const loading = ref(false)
  const error = ref(false)

  const state = useStorage('wordpress-store', { categories: [], tags: [] })

  /** Preload data */
  onMounted(async () => {
    loading.value = true

    // 2. Get all categories
    categories.value = await axios('https://tpot-api.vercel.app/api/categories')
    tags.value = await axios('https://tpot-api.vercel.app/api/tags')
    users.value = await axios('https://tpot-api.vercel.app/api/users')

    console.log('users?.length', users.value?.length)
    console.log('cats?.length', categories.value?.length)
    console.log('tags?.length', tags.value?.length)

    loading.value = false
  })

  const categoryMap = computed(() => categories.map((c) => c?.Title))

  //   const getPageBySlug = (slug: string) => wpapi.pages().slug(slug)

  //   const getPageById = (id: number) => wpapi.pages().id(id)

  //   const getPages = (authorId: number, perPage: number = 10) =>
  // wpapi.pages().author(authorId).perPage(perPage)

  //   const search = (term: string) => wpapi.search(term)

  return {
    users,
    token,
    superUser,

    // getPages,
    // getPageById,
    // getPageBySlug

    // publish,
    // token,
    categories: categoryMap,
    // search

    loading,
    error
  }
}
