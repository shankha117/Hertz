import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vuesax.js'

import VueAxios from './plugins/axios'

import { navguards } from './helper/nav_guards.js'

Vue.config.productionTip = false
Vue.use(VueAxios)

navguards(store, router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
