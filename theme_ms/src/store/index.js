import Vue from "vue";
import Vuex from "vuex";
import http from "@/util/http-common";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {}
  },
  getters: {
    user(state) {
      return state.user;
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    getUser(context, payload) {
      http.get("/users/me/" + payload).then(({ data }) => {
        context.commit("setUser", data);
      });
    }
  }
});
