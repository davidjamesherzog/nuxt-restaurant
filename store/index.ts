import Vue from 'vue';
import Vuex from 'vuex';
import { extractVuexModule, createProxy } from 'vuex-class-component';
import Restaurant from './restaurant';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(Restaurant)
  }
});

const createStore = () => {
  return store;
};

const vxm = {
  restaurant: createProxy(store, Restaurant)
};

export default createStore;
