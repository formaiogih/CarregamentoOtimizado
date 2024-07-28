// import { createApp } from 'vue';
// import { createRouter, createWebHistory } from 'vue-router';
// import routes from '../routes';

import { createApp } from 'vue';
import App from './App.vue';
import router from '../routes';
// import VueLazyload from 'vue-lazyload';

const app = createApp(App);

app.use(router);

// app.use(VueLazyload, {
//   preLoad: 1.3,
//   error: 'dist/error.png',
//   loading: 'dist/loading.gif',
//   attempt: 1
// })

app.mount('#app');

// const router = createRouter({
//   history: createWebHistory(),
//   routes
// });

// const app = createApp(App);

// app.use(router);

// app.mount('#app');