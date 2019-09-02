/* eslint-disable no-undef */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    camera:{
      start:true,
      stop:true,
      snap:true
    },
    currentUser: user,
    isLoggedIn: false,
    loading: false,
    auth_error: null,
    isadmin: false,
    loadingmodels:false
  },
  getters: {
    isloadingmodels(state){
      return state.loadingmodels
    },
    isLoggedIn(state) {
      return state.isLoggedIn
    },
    currentUsername(state) {
      return state.currentUser.username
    },
    authError(state) {
      return state.auth_error
    },
    startvideo(state){
      return state.camera.start
    },
    stopvideo(state){
      return state.camera.stop
    },
    snap(){
      return state.camera.snap
    }
  },
  mutations: {
    login(state) {
      state.loading = true
      state.auth_error = null
    },
    loginSuccess(state, payload) {
      state.auth_error = null
      state.isLoggedIn = true
      state.loading = false
      state.isadmin = payload.admin
      state.currentUser = { username: payload.username, token: payload.token }
      localStorage.setItem('user', JSON.stringify(state.currentUser))
    },
    logout(state) {
      localStorage.removeItem('user')
      state.isLoggedIn = false
      state.currentUser = null
    }
  },
  actions: {
    startvideo(context) {
      context.commit('recognize')
    },
    stopvideo(context){
      context.commit('stop')
    }
    
  }
})
