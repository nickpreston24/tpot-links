import { ref, onMounted, computed, toRefs } from 'vue'
import { countEmpty, devmode, groupBy, isArray } from '../helpers'
import { getRecords, create, deleteNode } from './neo'
import axios from 'axios'
import { searchNodes } from './neo'

const initial = {
  Title: '',
  Url: ''
}

// export const Source = {
//   AIRTABLE: 'airtable',
//   NEO4J: 'neo4j'
// }

export function useTeachings() {
  const teachings = ref([])
  const loading = ref(true)
  const error = ref(null)
  const searchHistory = ref([])
  // const db = ref(Source.AIRTABLE)
  // devmode && console.log('db.value', db?.value)

  onMounted(async () => {
    loading.value = true
    // teachings.value = await searchPages('Opinion').catch((err) => {
    //   console.log('err', err)
    //   return (error.value = err)
    // })

    teachings.value = await searchTeachings({}).catch(console.error)

    devmode && console.log('teachings found', teachings)
    loading.value = false
  })

  const createPage = async (props = {}) => {
    devmode && console.log('props', props)
    const page = await create('Page', { ...props }).catch(console.error)

    devmode && console.log('pages', page)
  }

  const searchTeachings = async (props) => {
    const results = await searchNodes('Page', props)
    return results
  }

  /**Wordpress API */

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

  const deleteTeachingNode = async (id) => deleteNode('Page', id)

  return {
    teachings,
    loading,
    error,
    searchHistory,
    //api
    createPage,
    getPageById,
    searchTeachings,
    deleteTeachingNode
  }
}

export default useTeachings
