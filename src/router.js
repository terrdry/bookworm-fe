import Vue from 'vue';
import Router from 'vue-router';
import Ping from './components/Ping.vue';
import books from './components/books.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Books',
      component: books,
    },
    {
      path: '/ping',
      name: 'PING',
      component: Ping,
    },
  ],
});
