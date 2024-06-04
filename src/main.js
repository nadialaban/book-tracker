import '@/styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/index.js'
import EventBus from "@/event-bus.js";

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.config.globalProperties.EventBus = EventBus

app.mount('#app')
