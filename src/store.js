/* eslint-disable no-undef */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { getLocalUser } from './helper/Auth'
const user = getLocalUser()

export default new Vuex.Store({
  state: {
    sidebar: {
      active: false,
      notExpand: false,
      reduce: true,
      activeItem: 0,
      search: '',
      app_title: 'Hertz.io'
    },
    currentUser: user,
    // currentUserToken: null,
    // currentUserNmae: null,
    isLoggedIn: false,
    loading: false,
    auth_error: null,
    customers: [],
    showsidebar: {
      value: true
    }
  },
  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn
    },
    currentUserdetails(state) {
      return state.currentUser
    },
    authError(state) {
      return state.auth_error
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
      // state.currentUserNmae = payload.username
      // state.currentUserToken = payload.token 
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
    login(context) {
      context.commit('login')
    }
  }
})
