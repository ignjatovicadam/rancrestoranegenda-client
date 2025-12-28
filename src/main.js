import { createApp } from 'vue'
import router from './router';
import { reveal } from './directives/v-reveal/index.js';
import './assets/styles/_variables.css';
import './assets/styles/_resets.css';
import './assets/styles/_utils.css';
import './assets/styles/_general.css';
import App from './App.vue'

createApp(App).use(router).directive('reveal', reveal).mount('#app');
