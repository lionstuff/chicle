'use strict';

const routes = [
  {
    path: '/login',
    name: 'login',
    // component: Login,
    component: () => import(/* webpackChunkName: 'login' */ '@/views/Login.vue'),
  },
  {
    path: '/shop',
    name: 'shop',
    // component: Shop,
    component: () => import(/* webpackChunkName: 'shop' */ '@/views/Shop.vue'),
  },
  {
    path: '/items/:id',
    name: 'items',
    // props: rout => ({ item: rout.query.item }),
    // component: Items,
    component: () => import(/* webpackChunkName: 'items' */ '@/views/Items.vue'),
  },
  {
    path: '/items',
    name: 'items',
    // props: rout => ({ item: rout.query.item }),
    // component: Items,
    component: () => import(/* webpackChunkName: 'items' */ '@/views/Items.vue'),
  },
  // {
  //   path: '/dashboard',
  //   name: 'dashboard',
  //   // component: Dashboard,
  //   component: () => import(/* webpackChunkName: 'dashboard' */ '@/views/Dashboard.vue')
  // },
  // {
  //   path: '/map',
  //   name: 'map',
  //   props: rout => ({ lat: rout.query.lat, lng: rout.query.lng }),
  //   // component: Maps,
  //   component: () => import(/* webpackChunkName: 'maps' */ '@/views/Map.vue')
  // },
  {
    path: '/user/:uid',
    name: 'user',
    // component: User,
    component: () => import(/* webpackChunkName: 'user' */ '@/views/User.vue')
  },
  {
    path: '/user',
    name: 'user',
    // component: User,
    component: () => import(/* webpackChunkName: 'user' */ '@/views/User.vue')
  },
  // {
  //   path: '/test',
  //   name: 'test',
  //   // component: Test,
  //   component: () => import(/* webpackChunkName: 'test' */ '@/views/Test.vue')
  // },
  // {
  //   path: '/logs',
  //   name: 'logs',
  //   // component: Logs,
  //   component: () => import(/* webpackChunkName: 'logs' */ '@/views/Logs.vue')
  // },
  // {
  //   path: '/settings',
  //   name: 'settings',
  //   // component: Settings,
  //   component: () => import(/* webpackChunkName: 'settings' */ '@/views/Settings.vue')
  // }
  {
    path: '/',
    name: 'default',
    // component: Default,
    component: () => import(/* webpackChunkName: 'default' */ '@/views/Default.vue'),
  },
];

export default routes;
