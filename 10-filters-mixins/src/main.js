import Vue from 'vue';
import App from './App.vue';

Vue.filter('lowercase', value => {
  return value.toLowerCase();
});


// GLOBAL MIXIN - DO NOT USE IN PROD
// IT WILL BE CREATED & RE-CREATED SEVERAL TIMES AS A RESULT
// AND AFFECT PERFORMANCE
Vue.mixin({
  created() {
    console.log('global mixin created');
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
});
