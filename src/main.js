import { createApp } from 'vue'
import router from './router';
import './assets/styles/_variables.css';
import './assets/styles/_resets.css';
import './assets/styles/_utils.css';
import App from './App.vue'

createApp(App).use(router).mount('#app')
