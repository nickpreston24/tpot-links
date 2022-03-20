import { ref, onMounted, computed, toRefs } from 'vue'
import { countEmpty, groupBy, isArray } from '../helpers'
import { create, getRecords } from './airtable'

export function useIssues() {
  const issues = ref([])
  const loading = ref(true)
  const error = ref(null)

  onMounted(async () => {
    loading.value = true
    issues.value = await getRecords('Issues', 10).catch((err) => {
      console.log('error when fetching records from airtable! :>> ', err)
      error.value = err
    })
    loading.value = false
  })

  const saveIssue = async (props) => {
    await create('Issues', props)
      .then(() => {
        console.info('Issue reported successfully')
      })
      .catch((err) =>
        console.err('Error when storing issue to airtable :>> ', err)
      )
  }

  return {
    issues,
    loading,
    error,
    // api
    saveIssue
  }
}

export default useIssues
