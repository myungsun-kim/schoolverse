<template>
  <div id="app">
    <Nav 
      :token="token"
      @logout="logout"
    />
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import 'animate.css';
// import Home from "@/components/Home.vue"
export default {
  components: { Nav },
  data() {
    return {
      token: localStorage.getItem("token")
    }
  },
  methods: {
    logout(){
      localStorage.removeItem("token")
      localStorage.removeItem("id")
      localStorage.removeItem("nickname")
    }
  }
  
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background-image: url("./assets/classroom.png"); */
  background-color: #A5E5D9;
  background-size: 100%;
  width: 100vw;
  height: 100vh;
  /* margin-top: 60px; */
}

@font-face {
    font-family: "Nanum-web-font";
    src: url('./fonts/Nanum-web-font/HSnew.ttf') format('truetype');
}
@font-face {
    font-family: "Cafe24Dongdong";
    src: url('./fonts/Nanum-web-font/Cafe24Dongdong.ttf') format('truetype');
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}

.fade1-enter-active, .fade1-leave-active {
transition: opacity 2.0s;
}
.fade1-enter, .fade1-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.description{
  font-family: "Nanum-web-font";
  font-size: 80px;
}
.dongdong{
  font-family: "Cafe24Dongdong";
  font-size: 25px;
}

</style>
