import { ref, computed } from 'vue'

export function useViewBox() {
  const x = ref(0)
  const y = ref(0)
  const width = ref(100)
  const height = ref(100)

  const viewBox = computed(() => {
    return `${x.value} ${y.value} ${width.value} ${height.value}`
  })

  return {
    x,
    y,
    height,
    width,
    viewBox
  }
}
export default useViewBox
