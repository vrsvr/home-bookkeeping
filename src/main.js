import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filters'
import messagePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

firebase.initializeApp({
  apiKey: "AIzaSyA0-_4ejpGlMvYR3Vm3lXik2FOCrlV3fQA",
  authDomain: "home-bookkeeping-32bb6.firebaseapp.com",
  projectId: "home-bookkeeping-32bb6",
  storageBucket: "home-bookkeeping-32bb6.appspot.com",
  messagingSenderId: "130476135720",
  appId: "1:130476135720:web:bac856af4fd8a5d81fec1d",
  measurementId: "G-HE8JV8XNSN"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})