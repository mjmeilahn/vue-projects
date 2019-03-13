import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from './routes';
import App from './App.vue';

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history' // default is 'hash'
  // set server to always return index.html for 'history' mode
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
