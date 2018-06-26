import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    msg: '我喜欢你'
  },
  // getters 是一个计算属性
  getters: {
    reverseMsg(state) {
      return state.msg.split('').reverse().join('')
    }
  },
  mutations: {
    increate(state, payload) {
      state.count += payload.num
      console.log(payload)
    }
  }
})

// 将 store 导出
export default store
