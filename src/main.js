// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引用 es6-promise/auto 用于兼容不支持Promise的浏览器 4.4.3以下
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

require('es6-promise/auto')

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#App')
