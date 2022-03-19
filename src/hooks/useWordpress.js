import { ref, onMounted, computed, toRefs } from 'vue'
import { countEmpty, groupBy, isArray, urlExists } from '../helpers'
import { getTPOTFrontPage } from './wordpress'

export function useWordpress() {
  const teachings = ref([])
  const users = ref([])
  const superUser = ref(null)
  const token = ref(null)
  const categories = ref([])

  const loading = ref(false)
  const error = ref(false)

  /** Preload data */
  onMounted(async () => {
    loading.value = true

    // 1. Get first 10 pages
    // 2. Get all categories
    // 3. Get all tags
    // 4. Get all
    loading.value = false
  })

  //   const getPageBySlug = (slug: string) => wpapi.pages().slug(slug)

  //   const getPageById = (id: number) => wpapi.pages().id(id)

  //   const getPages = (authorId: number, perPage: number = 10) =>
  // wpapi.pages().author(authorId).perPage(perPage)

  //   const search = (term: string) => wpapi.search(term)

  return {
    users,
    teachings,
    token,
    superUser,

    // getPages,
    // getPageById,
    // getPageBySlug

    // publish,
    // token,
    // categories,
    // search

    loading,
    error
  }
}
