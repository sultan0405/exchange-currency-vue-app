import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { appAxios } from './utils'
import { appAxios_1 } from './utils'

import '@/assets/styles/CurrencyList/currencyList.css'
import '@/assets/styles/Home/home.css'

const app=createApp(App)
app.use(router)
app.config.globalProperties.$appAxios = appAxios;
app.config.globalProperties.$appAxios_1 = appAxios_1;
app.mount('#app')
