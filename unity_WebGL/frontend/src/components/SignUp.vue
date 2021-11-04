<template>
  <div id="signup">
    <input id="id" v-model="id" type="text" placeholder="ID" name="id" />
    <input
      id="nickname"
      v-model="nickname"
      type="text"
      placeholder="Nickname"
      name="nickname"
    />
    <input
      id="password"
      v-model="password"
      type="password"
      placeholder="Password"
      name="password"
    />
    <button @click="register">클릭</button>
  </div>
</template>
<script>
import http from "@/util/http-common";

export default {
  data() {
    return {
      id: "",
      nickname: "",
      password: "",
    };
  },
  methods: {
    register() {
      http
        .post("/users/signUp", {
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
    },
  },
};
</script>
<style scoped>
#signup {
  background-color: red;
  width: 100%;
  height: 100%;
  /* background-image: url("../assets/classroom.png"); */
}
</style>
