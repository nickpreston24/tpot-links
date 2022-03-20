import { ref, computed } from 'vue'
import { devmode } from '../helpers'

const twColor = ref('tahiti')

/**
 * Palletes
 */
//rounded-lg p-tiny bg-ocean-400 text-ocean-800 hover:bg-ocean-500
const lightPallete = computed(
  () => `border-tahiti-500 bg-tahiti-600 text-tahiti-300`
)

const lightPalleteAlt = computed(
  () => `border-tahiti-500 bg-slate-100 text-orange-500`
)

const darkPallete = computed(
  () => `border-regal-300  bg-regal-600 text-ocean-500`
)

const darkPalleteAlt = computed(
  () => `border-regal-300 bg-regal-500 text-ocean-300`
)

/**
 * Theme Map
 */
export const themeMap = computed(() => {
  return {
    dark: {
      headers: `${darkPallete.value}`,
      buttons: `${darkPallete.value} hover:bg-regal-500 focus:ring-regal-500`,
      sidebar: `${darkPallete.value}`,
      table: `${darkPallete.value}`,
      link: `${darkPallete.value}`,
      card: `bg-slate-200 text-regal-800 rounded-xl border-regal-400`,
      banner: `${darkPallete.value}`,
      breadcrumb: `${darkPallete.value}`,
      footer: `${darkPallete.value}`,
      dashboard: `${darkPallete.value}`,
      page: `${darkPalleteAlt.value}`,
      tableHeader: `${darkPalleteAlt.value}`
    },
    light: {
      headers: `${lightPallete.value}`,
      buttons: `${lightPallete.value} hover:bg-tahiti-600 focus:ring-tahiti-600`,
      sidebar: `${lightPallete.value}`,
      table: `${lightPallete.value} `,
      link: `${lightPallete.value}`,
      card: `bg-slate-100 text-slate-700 rounded-xl border-orange-600 shadow-ocean-500`,
      banner: `${lightPallete.value}`,
      breadcrumb: `${lightPallete.value}`,
      footer: `${lightPallete.value}`,
      dashboard: `${lightPalleteAlt.value}`,
      page: `${lightPalleteAlt.value}`,
      tableHeader: `${lightPallete.value}`
    }
  }
})

// TODO: After adding more themes, designate which ones are dark and light, and update this to a computed property.
export const darkMode = ref(true)
export const currentTheme = computed(
  () => themeMap.value[darkMode.value ? 'dark' : 'light']
)

// devmode && console.log('currentTheme.value', currentTheme.value)

// Always compute the classes, here.  They can be referenced by name will filter out button themes without mixiing in header themes.
export const primaryButton = computed(() => currentTheme.value['buttons'])
export const header = computed(() => currentTheme.value['headers'])
export const sidebar = computed(() => currentTheme.value['sidebar'])
export const table = computed(() => currentTheme.value['table'])
export const link = computed(() => currentTheme.value['link'])
export const card = computed(() => currentTheme.value['card'])
export const banner = computed(() => currentTheme.value['banner'])
export const breadcrumb = computed(() => currentTheme.value['breadcrumb'])
export const footer = computed(() => currentTheme.value['footer'])
export const dashboard = computed(() => currentTheme.value['dashboard'])
export const page = computed(() => currentTheme.value['page'])
export const tableHeader = computed(() => currentTheme.value['tableHeader'])
export const chip = `bg-orange-500 text-white border-white`

// Allow theme changes, but hide the current theme value
export const setTheme = (name = 'tahiti') => {
  twColor.value = name
}

// Toggle between dark and light themes
export const toggleDarkMode = () => {
  darkMode.value = !darkMode.value
  console.log('darkMode?.value', darkMode?.value)
}
