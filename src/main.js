import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from './firebase-config'
import 'firebase/firestore'
import { getFirestore } from 'firebase/firestore'

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
