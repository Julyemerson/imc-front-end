import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import VueLoading from 'vue-loading-overlay';

import '@/assets/styles/tailwind.scss';
import 'vue-loading-overlay/dist/vue-loading.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueLoading);
app.mount('#app');
