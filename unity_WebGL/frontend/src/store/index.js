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
    user: {
      id: "",
      nickname: "",
    },
  }),
  getters: {
    user(state) {
      console.log("getter");
      console.log(state.user.id);
      console.log(state.user.nickname);
      return state.user;
    },
  },
  mutations: {
    setToken(state, value) {
      state.token = localStorage.setItem("token", value.accessToken);
    },
    setUser(state, value) {
      // state.user.id = localStorage.setItem("id", value.id);
      // state.user.nickname = localStorage.setItem("id", value.nickname);
      localStorage.setItem("id", value.id);
      localStorage.setItem("nickname", value.nickname);
      console.log("set");
      console.log(state.user.id);
      console.log(state.user.nickname);
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
          commit("setToken", response.data);
          commit("setUser", response.data);
          alert("로그인이 완료되었습니다");
          router.replace({ name: "Home" });
          router.go();
        })
        .catch(() => {
          alert("아이디와 비밀번호를 확인해주세요");
        });
    },
    myPage({ commit }) {
      axios({
        method: "get",
        url: BASE_URL + "/users/me",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((response) => {
          commit("setUser", response.data);
          console.log("myPage");
          console.log(response.data);
        })
        .catch(() => {
          console.log(localStorage.getItem("token"));
          alert("해당 회원의 정보가 없습니다");
        });
    },
  },
});
