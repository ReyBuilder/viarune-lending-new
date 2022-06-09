import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

let app = createApp(App);
app.use(createPinia());
app.mount('#app');
