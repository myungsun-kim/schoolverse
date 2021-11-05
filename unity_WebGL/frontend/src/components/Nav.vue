<template>
  <div>
    <nav class="navbar navbar-light nav-color">
      <div class="container-fluid">
        <!-- <a class="navbar-brand" href="">스쿨버스</a> -->
        <!-- <img src="../assets/schoolbus.png" alt=""> -->
        <router-link to="/" class="router-text1">
          스쿨버스
        </router-link>
        <form class="d-flex" v-if="token">          
          <button class="btn btn-outline-success mx-3" type="submit">로그아웃</button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .nav-color {
    background-color: #ADEFD1;
    opacity: 0.8;
  }
  .router-text1 {
    text-decoration: none;
    color: #00203F;
    font-size: 30px;
  }
</style>