import { ref, onMounted, computed, toRefs } from 'vue'
import { countEmpty, devmode, groupBy, isArray } from '../helpers'
import { getRecords, create } from './neo'
import axios from 'axios'

const initial = {
  Title: '',
  Url: ''
}

export function useTeachings() {
  const teachings = ref([])
  const loading = ref(true)
  const error = ref(null)
  const searchHistory = ref([])

  onMounted(async () => {
    loading.value = true
    teachings.value = await searchPages('Opinion').catch((err) => {
      console.log('err', err)
      return (error.value = err)
    })
    devmode && console.log('pages', teachings)
    loading.value = false
  })

  const createPage = async (props = {}) => {
    devmode && console.log('props', props)
    const page = await create('Page', { ...props }).catch((err) => {
      console.log('err', err)
      return (error.value = err)
    })
    devmode && console.log('pages', page)
  }

  // This has a side-effect.  It will also visit the page in the Graph database.
  const getPageById = async (id) => {
    const url = `https://tpot-api.vercel.app/api/pages?id=${id}`
    const results = await axios(url)
    searchHistory.value.push(url)
    return results?.data
  }

  // https://tpot-api.vercel.app/api/pages?keyword=holy%20spirit
  const searchPages = async (keyword) => {
    const url = `https://tpot-api.vercel.app/api/pages?keyword=${keyword}`
    const results = await axios(url)
    searchHistory.value.push(url)
    return results?.data
  }

  return {
    teachings,
    loading,
    error,
    searchHistory,
    //api
    createPage,
    getPageById
  }
}

export default useTeachings
