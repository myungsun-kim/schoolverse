import axios from "axios"
import Vue from "vue";
import Vuex from "vuex";
import router from "@/router"
// import http from "@/util/http-common";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () =>({
    token: ""
  }),
  getterts: {},
  mutations: {
    SET_USERINFO(state, value) {
      state.token = localStorage.setItem("token", value.accessToken)
    },
  },
  actions: {
    logIn( { commit },userInfo){
      axios({
        method: "post",
        url: "http://localhost:8080/auth/login",
        data: {
          id: userInfo.userId,
          password: userInfo.password,
        },
      })
      .then((response) => {
        commit("SET_USERINFO", response.data)
        router.replace({ name: "Home" })
      })
      .catch(() => {
        alert('아이디와 비밀번호를 확인해주세요')
      })
    }
  },
});
