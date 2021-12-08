<template>
  <div class="container" style="width: 100%">
    <h1 class="my-5">마이페이지</h1>
    <div class="register-box">
      <div class="input-form row">
        <form>
          <input type="text" class="input" v-model="userInfo.id" disabled />
          <input
            type="text"
            class="input"
            v-model="userInfo.id"
            @focus="idClear"
            placeholder="닉네임를 입력해주세요"
            autocomplete="off"
          />
          <input
            type="text"
            class="input"
            v-model="userInfo.id"
            @focus="idClear"
            placeholder="닉네임를 입력해주세요"
            autocomplete="off"
          />
        </form>
      </div>
      <div class="register-btn">
        <button @click="register" class="btn ok">정보수정</button>
      </div>
    </div>
  </div>
</template>
<script>
import http from "@/util/http-common";
// import axios from "axios";

export default {
  data() {
    return {
      userInfo: {
        id: "",
        nickname: "",
        password: "",
      },
      password2: "",
      token: localStorage.getItem("token"),
    };
  },
  methods: {
    idClear() {
      this.userIdStatus = true;
    },
    nicknameClear() {
      this.nicknameStatus = true;
    },
    pwClear() {
      this.pwStatus = true;
    },
    checkClear() {
      this.pwCheck = true;
    },
    register() {
      http
        .post("/users/signUp", {
          id: this.userInfo.id,
          password: this.userInfo.password,
          nickname: this.userInfo.nickname,
        })
        .then(({ data }) => {
          console.log(data);
          if (data.statusCode == 200) {
            alert("회원가입이 완료되었습니다");
            this.$router.push("/logIn");
          } else {
            alert("회원가입에 실패하였습니다");
          }
        });
    },
  },
};
</script>
<style scoped>
.register-btn {
  margin: 40px auto;
  padding: 10px;
  border: 1px solid #adefd1;
  border-radius: 20px;
  background-color: #adefd1;
  width: 400px;
  opacity: 0.7;
}
.input {
  /* width: 80%;
  height: 40%; */
  border-radius: 1px;
  width: 80%;
  height: 40%;
  margin-bottom: 20px;
}
.input-form {
  margin: 0 auto;
  height: 80px;
  width: 72%;
}
.input-form2 {
  margin: 0 auto;
  height: 80px;
  width: 84%;
}
.name {
  width: 15%;
  background-color: blue;
}
.register-box {
  margin: 40px auto;
  padding: 40px;
  border: 1px solid Light;
  border-radius: 20px;
  background-color: #f1f7f4;
  width: 80%;
  height: 70%;
  opacity: 0.7;
  text-align: center;
}
.chk-btn {
  float: right;
  border: 1px solid #adefd1;
  border-radius: 10px;
  background-color: #adefd1;
  opacity: 0.7;
}
</style>
