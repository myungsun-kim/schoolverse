<template>
  <div>
    <h1 class="my-5">로그인</h1>
    <div class="login-box">
      <label for="id" class="col-sm-2 col-form-label fs-4 fw-bold">ID :</label>
      <input 
        type="text"
        class="form-control-lg mt-5 mb-3 input"
        placeholder="아이디를 입력하세요"
        v-model="userInfo.id"
        id="id"
      >
      <br>
      <label for="password" class="col-sm-2 col-form-label fs-4 fw-bold">PW :</label>
      <input
        type="password"
        class="form-control-lg mb-3 input"
        placeholder="비밀번호를 입력하세요"
        v-model="userInfo.password"
        id="password"
      >
      <p></p>
      <button type="button" class="btn btn-success" @click="logIn">로그인</button>
    </div>
  </div>
</template>

<script>

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
      this.$store.dispatch('logIn', this.userInfo)
      
    }
  },
}
</script>

<style>
  .login-box {
    margin : 40px auto; 
    padding : 10px;
    border : 1px solid Light;
    border-radius : 20px;
    background-color: #f1f7f4;
    width: 80%;
    height: 30%;
    opacity: 0.7;
    text-align: center;
  }
  .input {
    border-radius : 15px;
    width: 20%;
    height: 30%;
  }
</style>