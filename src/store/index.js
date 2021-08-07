import Vue from "vue";
import Vuex from "vuex";
import translationmanager from './modules/translationmanager'


Vue.use(Vuex);

//const debug = process.env.NODE_ENV !== "production"

export default new Vuex.Store({
  modules: {
    translationmanager
  },
  strict: false
});