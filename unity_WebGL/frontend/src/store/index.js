import Vue from "vue";
import Vuex from "vuex";
import http from "@/util/http-common";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getterts: {},
  mutations: {},
  actions: {
      redupId(context, payload){
        http
        .get("/users/signUp/id/${", {
          id: this.id,
          password: this.password,
          nickname: this.nickname,
          //   id: "ssafy222",
          //   password: "Qwer!234",
          //   nickname: "ssafy222",
        })
        .then(({ data }) => {
          console.log(data);
          if (data.statusCode == 200) {
            alert("회원가입이 완료되었습니다");
          } else {
            alert("회원가입 실패");
          }
        });
      }
  },
});
