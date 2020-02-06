import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    totalProfit: 0,
    totalOrders: 0,
    brandPopularity: 0,
    totalTasks: 0,
    // bestEmployes: []
  },
  mutations: {
    changeProfit(state, profit) {
      state.totalProfit = profit;
    },
    changeOrders(state, orders) {
      state.totalOrders = orders;
    },
    changeBrandPopularity(state, popularity) {
      state.brandPopularity = popularity;
    },
    changeTotalTasks(state, totalTasks) {
      state.totalTasks = totalTasks;
    }
    // changeBestEmp(state, bestEmp) {
    //   state.bestEmployes = bestEmp;
    // }
  },
  actions: {
    changeProfit(context, profit) {
      context.commit('changeProfit', profit)
    },
    changeOrders(context, orders) {
      context.commit('changeOrders', orders)
    },
    changeBrandPopularity(context, popularity) {
      context.commit('changeBrandPopularity', popularity);
    },
    changeTotalTasks(context, totalTasks) {
      context.commit('changeTotalTasks', totalTasks);
    }
    // changeBestEmp(context, bestEmp) {
    //   context.commit('changeBestEmp', bestEmp);
    // }
  },
  modules: {
  }
})
