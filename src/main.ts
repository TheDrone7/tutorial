import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import Content from "./components/Content.vue";
import Intro from "./components/Intro.vue";

const routes = [
  { path: '/', component: Intro },
  { path: '/page/:id', component: Content }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);

app.mount('#app');
