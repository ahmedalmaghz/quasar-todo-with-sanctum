import Vue from 'vue'
import VueRouter from 'vue-router'
//import axios from 'axios'
import routes from './routes'
//axios.defaults.withCredentials = true;
//axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
//import vuex from 'vuex'
//mport auth from '../store/auth/auth'
Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function () {
 //store.dispatch('auth/me').then(() => {

  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  return Router
//});
}
