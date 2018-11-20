/*
  说明: 将各个模块合并成一个状态实例
  导入: 各个模块
  导出: 应用的状态管理实例
*/

import Vue from 'vue'
import Vuex from 'vuex'

import recordsStore from './modules/records' // 出入记录

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    recordsStore: recordsStore
  }
})
