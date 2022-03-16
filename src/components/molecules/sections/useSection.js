import { computed, ref } from 'vue'

export const hide = ref(false)
export const show = ref(true)

export const toggleHide = computed(() => (hide.value = !hide.value))
export const toggleShow = computed(() => (show.value = !show.value))

export const className = computed(() => (hide.value ? 'hidden' : ''))
