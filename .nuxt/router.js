import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7ba21712 = () => interopDefault(import('..\\pages\\home\\login.vue' /* webpackChunkName: "pages/home/login" */))
const _21d30d9c = () => interopDefault(import('..\\pages\\home\\user.vue' /* webpackChunkName: "pages/home/user" */))
const _23269c8c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/home/login",
    component: _7ba21712,
    name: "home-login"
  }, {
    path: "/home/user",
    component: _21d30d9c,
    name: "home-user"
  }, {
    path: "/",
    component: _23269c8c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
