import axios from 'axios'
import { ref, onMounted, computed, toRefs } from 'vue'
import { countEmpty, groupBy, isArray, urlExists } from '../helpers'
import { useStorage } from '@vueuse/core'
const config = {
  // endpoint: process.env.REACT_APP_WP_ENDPOINT,
  endpoint: 'https://www.thepathoftruth.com/wp-json'
  // username: process.env.REACT_APP_WP_USERNAME,
  // password: process.env.REACT_APP_WP_PASSWORD,
}

export function useWordpress() {
  const users = ref([])
  const superUser = ref(null)
  const token = ref(null)
  const categories = ref([])
  const tags = ref([])
  const loading = ref(false)
  const error = ref(false)

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

    const store = useStorage('wordpress-store', {
      categories: ['test'],
      tags: []
    })

    console.log('store categories', store['categories'])

    loading.value = false
  })

  const categoryMap = computed(() => categories.map((c) => c?.Title))

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
