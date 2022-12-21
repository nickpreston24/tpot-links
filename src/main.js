import { createApp, ref } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'

createApp(App).use(router).mount('#app')

// Load Categories into localhost

let stored_categories = localStorage.getItem('categories')
console.log('stored_categories :>> ', stored_categories)

// let local_categories = require('categories.json')
import { categories as local_categories } from './globals/categories'
console.log('local_categories :>> ', local_categories)

window.categories = local_categories
// const categories = ref([])

let has_stored_categories = !!stored_categories || stored_categories?.length > 0
if (!has_stored_categories) {
  let categories_lookup_url = `https://www.thepathoftruth.com/wp-json/wp/v2/categories`

  try {
    const response = await fetch(categories_lookup_url)
    console.log('response', response?.data)
    window.categories = response.data
  } catch (ex) {
    console.error(ex)

    localStorage.setItem('categories', local_categories)
    // categories.value = local_categories

    window.categories = local_categories
    console.log('stored categories :>> ', local_categories)
  }
}
