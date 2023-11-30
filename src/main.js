import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

import i18n from './i18n'
import { clickOutside } from './clickOutside'
import router from './router'

createApp(App)
  .use(i18n)
  .directive('click-outside', clickOutside)
  .use(router)
  .mount('#app')
