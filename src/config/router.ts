import Vue from 'vue';
import Router from 'vue-router';
import VueMeta from 'vue-meta';

// tslint:disable-next-line
const { default: generatedRoutes } = require('../../.rdvue/routes.js');

Vue.use(Router);
Vue.use(VueMeta);

export enum Page {
  Hello = 'hello-world',
  NotFound = 'not-found',
  Goose = 'goose',
  Home = 'home',
  Tester = 'tester',
  Explore = 'explore',
  Bookmarks = 'bookmarks',
  Lists = 'lists',
  Messages = 'messages',
  Notifications = 'notifications',
  Profile = 'profile'

}

export default new Router({
  mode: 'history',
  base: process.env.VUE_APP_BASE_URL,
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
    {
      path: '/explore',
      name: Page.Explore,
      meta: {
        layout: 'dashboard',
      },
      component: () =>
        import(
          /* webpackChunkName: "Explore" */
          '@/pages/explore'
        ),
    },
    {
      path: '/bookmarks',
      name: Page.Bookmarks,
      meta: {
        layout: 'dashboard',
      },
      component: () =>
        import(
          /* webpackChunkName: "Bookmarks" */
          '@/pages/bookmarks'
        ),
    },
    {
      path: '/lists',
      name: Page.Lists,
      meta: {
        layout: 'dashboard',
      },
      component: () =>
        import(
          /* webpackChunkName: "Lists" */
          '@/pages/lists'
        ),
    },
    {
      path: '/notifications',
      name: Page.Notifications,
      meta: {
        layout: 'dashboard',
      },
      component: () =>
        import(
          /* webpackChunkName: "Notifications" */
          '@/pages/notifications'
        ),
    },
    {
      path: '/profile',
      name: Page.Profile,
      meta: {
        layout: 'dashboard',
      },
      component: () =>
        import(
          /* webpackChunkName: "Profile" */
          '@/pages/profile'
        ),
    },
    {
      path: '/messages',
      name: Page.Messages,
      meta: {
        layout: 'dashboard',
      },
      component: () =>
        import(
          /* webpackChunkName: "Messages" */
          '@/pages/messages'
        ),
    },
  ],
});
