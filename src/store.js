/* eslint-disable no-undef */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import { getLocalUser } from './helper/Auth'
import * as faceapi from 'face-api.js'
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
    showsidebar:true,
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
    loadingmodels:true
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
    snap(state){
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
    },
    modelsloaded(state){
      state.loadingmodels = false      
    },
    modelloading(state) {
      state.loadingmodels = true
    },
    sleep(state,ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  },
  actions: {
    login(context) {
      context.commit('login')
    },
    loadmodel(context) {
        return Promise.all([
          faceapi.loadFaceRecognitionModel('/models'),
          faceapi.loadFaceLandmarkModel('/models'),
          faceapi.loadTinyFaceDetectorModel('/models'),
          faceapi.loadFaceExpressionModel('/models')]).then(context.commit('modelsloaded'))
    } 
  }  
    })
