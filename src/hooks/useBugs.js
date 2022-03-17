import { ref, onMounted, computed, toRefs } from 'vue'
import { countEmpty, groupBy, isArray } from '../helpers'
import { getRecords } from './airtable'

export function useBugs() {
  const bugs = ref([])
  const loading = ref(true)
  const error = ref(null)

  onMounted(async () => {
    loading.value = true
    bugs.value = await getRecords('Bugs', 5).catch((err) => {
      console.log('error when fetching records from airtable! :>> ', err)
      error.value = err
    })
    loading.value = false
  })

  return {
    bugs,
    loading,
    error
  }
}

export default useBugs
