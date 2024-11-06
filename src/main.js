import { createApp } from 'vue';
import '@styles/index.scss';
import App from './App.vue';
import router from '@router/index.route';

createApp(App).use(router).mount('#app');
