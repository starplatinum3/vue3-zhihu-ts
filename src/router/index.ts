import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/zhihu',
    name: 'zhihu',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/zhihu/index.vue')
  },
  {
    path: '/MeZhihuNamed',
    name: 'MeZhihuNamed',
    component: () => import('../views/MeZhihuNamed.vue')
  },
    {
        path: '/stu-table',
        name: 'stu-table',
        component: () => import('../views/stu-table.vue')
    },
    {
        path: '/edu-exp-table',
        name: 'edu-exp-table',
        component: () => import('../views/edu-exp-table.vue')
    },
  // {
  //   path: '/github',
  //   name: 'github',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/GitHub.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
