import Vue from "vue";
import Vuex from "vuex";
import http from "@/util/http-common";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getterts: {},
  mutations: {},
  actions: {
    redupId(context, payload) {
      http
        .get("/users/signUp/id/" + payload)
        .then(({ data }) => {
          console.log(data);
          alert("사용 가능한 아이디입니다.");
        })
        .catch((error) => {
          console.log(error);
          alert("이미 존재하는 아이디입니다.");
        });
    },
  },
});
