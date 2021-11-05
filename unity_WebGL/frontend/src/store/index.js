import axios from "axios"
import Vue from "vue";
import Vuex from "vuex";
import router from "@/router"
// import http from "@/util/http-common";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () =>({
  }),
  getterts: {},
  mutations: {
    SET_USERINFO(state, value) {
      localStorage.setItem("token", value.accessToken)
    },
  },
  actions: {
    logIn( { commit },userInfo){
      axios({
        method: "post",
        url: "http://localhost:8080/auth/login",
        data: {
          id: userInfo.id,
          password: userInfo.password,
        },
      })
      .then((response) => {
        commit("SET_USERINFO", response.data)
        router.replace({ name: "Home" })
        router.go()
        alert('로그인 성공')
      })
      .catch(() => {
        alert('아이디와 비밀번호를 확인해주세요')
      })
    }
  },
});
