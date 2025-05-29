import './assets/main.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router'
import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import Dialog from 'primevue/dialog';

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);
app.component('Dialog', Dialog);
app.mount('#app')
