<template>
  <div>
    <nav class="navbar navbar-light nav-color">
      <div class="container-fluid">
        <!-- <a class="navbar-brand" href="">스쿨버스</a> -->
        <!-- <img src="../assets/schoolbus.png" alt=""> -->
        <router-link to="/" class="router-text1"><img src="../assets/schoolbus.png" class="img-box" alt=""> 스쿨버스 </router-link>
        <form class="d-flex" v-if="this.token">          
          <button class="btn btn-outline-success mx-3" type="submit" @click="logout">로그아웃</button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
import router from "@/router"
export default {
  name: "Nav",
  date() {
    return{
    }
  },
  methods: {
    logout() {
      this.$emit('logout')
      router.replace({ name: "Home" })
    }
  },
  props:{
    token: String,
  }
};
</script>

<style>
.nav-color {
  background-color: #adefd1;
  opacity: 0.8;
}
.router-text1 {
  text-decoration: none;
  color: #00203f;
  font-size: 30px;
}

.img-box {
  width: 55px;
  height: 55px;
}
</style>
