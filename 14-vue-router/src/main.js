import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from './routes';
import App from './App.vue';

Vue.use(VueRouter);
const router = new VueRouter({
  routes,

  // DEFAULT "mode" IS 'hash'
  // IF YOU SET "mode" TO "history", SET SERVER TO ALWAYS RETURN "index.html" OTHERWISE A FRESH PAGE LOAD WILL OCCUR WITH EVERY URL REQUEST
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    // 1. SCROLL TO POSITION WHEN USER CLICKS "back" BUTTON
    if (savedPosition) {
      return {savedPosition};
    }

    // 2. SCROLL TO ELEMENT IF THERE IS A HASH IN THE URL
    if (to.hash) {
      return {selector: to.hash};
    }

    // 3. OTHERWISE SCROLL TO TOP
    return {
      x: 0,
      y: 0
    }
  }
});


// GLOBAL ROUTING GUARDS BEFORE VISITING A ROUTE
router.beforeEach((to, from, next) => {
  console.log('global beforeEach');
  next(); // MANDATORY
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
