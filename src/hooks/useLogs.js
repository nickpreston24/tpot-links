import { ref, onMounted, computed, toRefs } from 'vue'
import { countEmpty, groupBy, isArray } from '../helpers'
import { create, getRecords } from './airtable'

export function useLogs() {
  const logs = ref([])
  const loading = ref(true)
  const error = ref(null)

  onMounted(async () => {
    loading.value = true
    logs.value = await getRecords('Logs', 10).catch((err) => {
      console.log('error when fetching records from airtable! :>> ', err)
      error.value = err
    })
    loading.value = false
  })

  const saveLog = async (props) => {
    await create('Logs', props)
      .then(() => {
        console.info('Log reported successfully')
      })
      .catch((err) =>
        console.err('Error when storing log to airtable :>> ', err)
      )
  }

  return {
    logs,
    loading,
    error,
    // api
    saveLog
  }
}

export default useLogs
