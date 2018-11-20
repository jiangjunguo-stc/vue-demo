'use strict'

export default {
  state: {
    records: {
      count: 0
    }
  },
  getters: {

  },
  mutations: {
    initRecords (state, value) {
      state.records = value
    }
  },
  actions: {
    initRecords ({ commit }, value) {
      commit('initRecords', value)
    }
  }
}
