import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';

Vue.use(VueResource);

Vue.http.options.root = 'https://udemy-vue-resource-12271.firebaseio.com/';


// HOW TO GLOBALLY INTERCEPT ALL REQUESTS & RESPONSES
// USEFUL TO GLOBALLY CHECK HEADERS, PATHS, ETC.

// Vue.http.interceptors.push((req, next) => {
//   console.log(req);

//   if (req.method == 'POST') {
//     req.method = 'PUT';
//   }

//   next(res => {
//     res.json = () => {
//       return {
//         messages: res.body
//       }
//     };
//   });
// });

new Vue({
  el: '#app',
  render: h => h(App)
});
