import './assets/main.css'
import './assets/colours.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueCookies from 'vue3-cookies'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(VueCookies);
app.use(createPinia())
app.use(router)

app.mount('#app')
