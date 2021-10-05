import Vue from "vue";
import Vuex from "vuex";
import translationmanager from './modules/translationmanager'
import leaders from './modules/leaders'
import auth from './modules/auth'


Vue.use(Vuex);

//const debug = process.env.NODE_ENV !== "production"

export default new Vuex.Store({
  modules: {
    translationmanager,
    leaders,
    auth
  },
  strict: false
});