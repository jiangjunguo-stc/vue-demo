import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const PageIndex = resolve => require(['@/pages/PageIndex'], resolve)

export default new Router({
  routes: [
    { path: '/', component: PageIndex, name: '首页' },
    { path: '*', component: PageIndex, name: '404' }
  ]
})
