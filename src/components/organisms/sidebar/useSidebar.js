import { ref, computed } from 'vue'

const modes = {
  LEFT: 'fixed top-0 bottom-0 left-0 flex flex-col float-left',
  RIGHT: 'fixed top-0 bottom-0 right-0 flex flex-col float-right'
}

export const background = ref('bg-tahiti-600')
export const collapsed = ref(false)
export const hidden = ref(false)
export const mode = ref('RIGHT')
export const toggleSidebar = () => (collapsed.value = !collapsed.value)

export const SIDEBAR_WIDTH = 180
export const SIDEBAR_WIDTH_COLLAPSED = 38

export const sidebarWidth = computed(
  () => `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`
)

export const className = computed(() => {
  return modes[mode.value.toUpperCase()] + ' ' + background.value
})
