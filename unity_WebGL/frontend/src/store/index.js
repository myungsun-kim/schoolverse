import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import router from "@/router";
// import http from "@/util/http-common";

const BASE_URL = "http://localhost:8080";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    token: "",
  }),
  getterts: {},
  mutations: {
    SET_USERINFO(state, value) {
      state.token = localStorage.setItem("token", value.accessToken);
    },
  },
  actions: {
    logIn({ commit }, userInfo) {
      axios({
        method: "post",
        url: BASE_URL + "/auth/login",
        data: {
          id: userInfo.id,
          password: userInfo.password,
        },
      })
        .then((response) => {
          commit("SET_USERINFO", response.data);
          alert("로그인이 완료되었습니다");
          router.replace({ name: "Home" });
          router.go();
        })
        .catch(() => {
          alert("아이디와 비밀번호를 확인해주세요");
        });
    },
  },
});
