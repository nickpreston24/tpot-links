import { html } from '../globals/htm'
import { tw } from '../globals/twind'
import { ref, onMounted } from 'vue'
import { devmode } from '../helpers'
import { searchTable } from './airtable'

export function useSVGs() {
  const icons = ref([])
  const loading = ref(true)
  const error = ref(null)

  onMounted(async () => {
    icons.value = await searchTable('SVGs').catch(console.err)
    loading.value = false
  })

  const getSVGIcon = async (id = null, name = '') => {
    let svgFound =
      !!Id || !!Name
        ? icons.value[id] || icons.value[name]
        : { Id: null, Content: null, Name: 'No SVG for you!' }

    if (!svgFound?.Content) {
      // If not found, search it again:

      const response = await searchTable('SVGs', [
        { Id: id, Name: name }
      ]).catch((err) => console.log('ERROR when fecthing SVG :>>', err))
      devmode && console.log('response?.Data', response?.data)
      svgFound = response?.data
    }

    return svgFound
  }

  return {
    icons,
    error,
    loading,
    //api
    getSVGIcon
  }
}
