<template>
  <div id="app">
    <Nav />
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
// import Home from "@/components/Home.vue"
export default {
  components: { Nav },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("./assets/classroom.png");
  background-size: 100%;
  width: 100vw;
  height: 100vh;
  /* margin-top: 60px; */
}
</style>
