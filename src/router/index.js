import Vue from 'vue';
import Router from 'vue-router';

import AppHome from '../components/AppHome';
import ArticleRenderer from '../components/ArticleRenderer';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: AppHome,
      beforeEnter: (to, from, next) => {
        const dest = to.query.p;
        next(dest);
      },
    },
    {
      path: '/article/:key',
      name: 'article',
      component: ArticleRenderer,
    },
  ],
});
