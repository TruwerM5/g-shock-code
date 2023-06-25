import { createApp } from 'vue';
import './style.sass';
import { createPinia } from 'pinia';
import router from './assets/router';
import App from './App.vue';
const pinia = createPinia();
createApp(App).use(pinia).use(router).mount('#app');