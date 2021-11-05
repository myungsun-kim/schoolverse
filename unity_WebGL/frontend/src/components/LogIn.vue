<template>
  <div>
    <h1 class="my-5">로그인</h1>
    <div class="login-box">
      <input 
        type="text"
        class="form-control-lg mt-5 mb-3 input "
        placeholder="아이디를 입력하세요"
        v-model="userInfo.id"  
      >
      <input
        type="password"
        class="form-control-lg mb-3 input"
        placeholder="비밀번호를 입력하세요"
        v-model="userInfo.password"
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
    border : 1px solid #ADEFD1;
    border-radius : 20px;
    background-color: #ADEFD1;
    width: 22vw;
    height: 60vh;
    opacity: 0.7;
    text-align: center;
  }
  .input {
    border-radius : 15px;
  }
</style>