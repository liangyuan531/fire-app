// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.use(VueFire)
firebase.initializeApp({
  apiKey: 'AIzaSyBnxzmatcKH2X3ytP0IM8kt8lSbFFGDBeI',
  authDomain: 'vuedemo-16bf5.firebaseapp.com',
  databaseURL: 'https://vuedemo-16bf5.firebaseio.com',
  projectId: 'vuedemo-16bf5',
  storageBucket: 'vuedemo-16bf5.appspot.com',
  messagingSenderId: '1066292120232'
})

export const db = firebase.firestore()
