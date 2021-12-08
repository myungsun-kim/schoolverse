<template>
  <div>
    <h1 class="my-5 description">로그인</h1>
    <div class="login-box">
      <label for="id" class="col-sm-2 col-form-label fs-4 fw-bold">ID :</label>
      <input
        type="text"
        class="form-control-lg mt-5 mb-3 input"
        placeholder="아이디를 입력하세요"
        v-model="userInfo.id"
        id="id"
      />
      <br />
      <label for="password" class="col-sm-2 col-form-label fs-4 fw-bold"
        >PW :</label
      >
      <input
        type="password"
        class="form-control-lg mb-3 input"
        placeholder="비밀번호를 입력하세요"
        v-model="userInfo.password"
        id="password"
      />
      <p></p>
      <button type="button" class="btn btn-success mb-3 dongdong" @click="logIn">
        로그인
      </button>
      <br>
      <router-link to="/SignUp" class="dongdong">아직 회원이 아니신가요?</router-link>
    </div>
  </div>
</template>

<script>
import http from "@/util/http-common";
import Swal from 'sweetalert2';

export default {
  name: "LogIn",
  data() {
    return {
      userInfo: {
        id: "",
        password: "",
      },
    };
  },
  methods: {
    logIn() {
      http
        .post("/auth/login", {
          id: this.userInfo.id,
          password: this.userInfo.password,
        })
        .then(({ data }) => { 
            // alert("로그인이 완료되었습니다.");
            Swal.fire({
            title: '로그인 성공',
            text: '성공적으로 로그인 되었습니다.',
            icon: 'success',
            confirmButtonText: '스쿨버스 시작하기!'
          })
            localStorage.setItem("id", data.id);
            localStorage.setItem("nickname", data.nickname);
            localStorage.setItem("token", data.accessToken);
            this.$router.push("/unity");
            // this.$router.go();
        }).catch(() => {
          Swal.fire({
            title: '로그인 실패',
            text: '아이디와 비밀번호를 확인해주세요.',
            icon: 'error',
            confirmButtonText: '확인'
          })
        })
    },
  },
};
</script>

<style>
.login-box {
  margin: 40px auto;
  padding: 10px;
  border: 1px solid Light;
  border-radius: 20px;
  background-color: #f1f7f4;
  width: 60%;
  height: 30%;
  opacity: 0.7;
  text-align: center;
}
.input {
  border-radius: 15px;
  width: 20%;
  height: 30%;
}
</style>
