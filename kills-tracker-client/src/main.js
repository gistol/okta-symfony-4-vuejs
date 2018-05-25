import Vue from 'vue'

Vue.config.productionTip = false;

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Dashboard from './components/Dashboard.vue';

const routes = [
  { path: '/', component: Dashboard },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(Dashboard)
}).$mount('#app')