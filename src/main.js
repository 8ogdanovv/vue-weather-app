import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

import i18n from './i18n'
import { clickOutside } from './clickOutside'

const app = createApp(App)

app.directive('click-outside', clickOutside)
app.use(i18n).mount('#app')