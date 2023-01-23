import Vue from 'vue';
import Router from 'vue-router';

// tslint:disable-next-line
const { default: generatedRoutes } = require('../../.rdvue/routes.js');

Vue.use(Router);

export enum Page {
  Hello = 'hello-world',
  NotFound = 'not-found',
  Goose = 'goose',
  Home = 'home',
  Tester = 'tester',
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/buefy-sample',
      name: 'buefy-sample',
      component: require('@/pages/buefy-sample/buefy-sample.vue').default
    },
    ...generatedRoutes,
    /*{
      path: '/',
      name: Page.Hello,
      meta: {
        layout: 'default',
      },
      component: () =>
        import(
           webpackChunkName: "hello-world" 
          '@/pages/hello-world'),
    }, */
    {
      path: '*',
      name: Page.NotFound,
      meta: {
        layout: 'default',
      },
      component: () =>
        import(
          /* webpackChunkName: "not-found" */
          '@/pages/not-found'),
    },
    {
      path: '/tester',
      name: Page.Tester,
      meta: {
        layout: 'goose_layout_2',
      },
      component: () =>
        import(
          /* webpackChunkName: "tester" */
          '@/pages/tester'),
    },
    {
      path: '/home',
      name: Page.Home,
      meta: {
        layout: 'dashboard',
      },
      component: () =>
        import(
          /* webpackChunkName: "Home" */
          '@/pages/home'),
    },
    {
      path: '/',
      name: Page.Goose,
      meta: {
        layout: 'goose_layout',
      },
      component: () =>
        import(
          /* webpackChunkName: "Goose" */
          '@/pages/goose'
        ),
    },
  ],
});
