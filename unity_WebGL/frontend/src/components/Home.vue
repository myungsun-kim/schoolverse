<template>
  <div
    class="d-flex align-items-center justify-content-center"
    style="height: 100vh"
  >
    <!-- <div class="vertical" v-if="!token"> -->
    <div class="vertical">
      <div class="my-box">
        <p class="fs-3 mb-0">
          <router-link to="/logIn" class="router-text"> 로그인 </router-link>
        </p>
      </div>
      <div class="my-box">
        <p class="fs-3 mb-0">
          <router-link to="/signUp" class="router-text"> 회원가입 </router-link>
        </p>
      </div>
    </div>
    <!-- <div class="vertical" v-else> -->
    <div class="vertical">
      <div class="my-box">
        <p class="fs-3 mb-0">
          <router-link to="/info" class="router-text">
            스쿨버스란?
          </router-link>
        </p>
      </div>
      <div class="my-box">
        <p class="fs-3 mb-0">
          <router-link to="/unity" class="router-text"> 시작하기 </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
};
</script>

<style>
.my-box {
  margin: 40px;
  padding: 10px;
  border: 1px solid #adefd1;
  border-radius: 20px;
  background-color: #adefd1;
  width: 400px;
  opacity: 0.7;
}
.router-text {
  text-decoration: none;
  color: #00203f;
  opacity: 0.7;
}
</style>
