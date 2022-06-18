import { ref, onMounted, computed, toRefs } from 'vue'
import { countEmpty, groupBy, isArray } from '../helpers'
import { create, getRecords } from './airtable'

export function useBugs() {
  const bugs = ref([])
  const loading = ref(true)
  const error = ref(null)

  onMounted(async () => {
    loading.value = true
    bugs.value = await getRecords('Bugs', 10).catch((err) => {
      console.log('error when fetching records from airtable! :>> ', err)
      error.value = err
    })
    loading.value = false
  })

  const saveBug = async (props) => {
    await create('Bugs', props)
      .then(() => {
        console.info('Bug reported successfully')
      })
      .catch((err) =>
        console.err('Error when storing bug to airtable :>> ', err)
      )
  }

  return {
    bugs,
    loading,
    error,
    // api
    saveBug
  }
}

export default useBugs
