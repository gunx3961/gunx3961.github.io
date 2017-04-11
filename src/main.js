import Vue from 'vue';
import VueRouter from 'vue-router';
import 'es6-promise/auto';

import App from './App';
import router from './router';

Vue.use(VueRouter);

const app = new Vue({
  el: '#app',
  router,
  render: h => h(App),
});

