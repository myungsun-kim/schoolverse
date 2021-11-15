<template>
<div>
  <div class="d-flex justify-content-center my-">
    <unity
      src="./BT4/Build/Build.json"
      unityLoader="./BT4/Build/UnityLoader.json"
      class="unity-style mt-3"
      ref="unityInstance"
    ></unity>
  </div>
    <p>{{ id }} {{ nickname }}</p>
    <button class="btn btn-success" @click="getUnityHook">계정 연동</button>
</div>
</template>

<script>
import Unity from "vue-unity-webgl";
// import http from "@/util/http-common";

export default {
  // name: "Unity",
  data() {
    return {
      id: localStorage.getItem("id"),
      nickname: localStorage.getItem("nickname"),
    };
  },
  created() {
    // this.user = this.$store.getters.user;
    // console.log("유니티 유저정보" + this.user);
    // console.log(this.user);
    console.log("getter");
    console.log(this.$store.state.user.id);
    console.log(this.$store.getters.user);
  },
  components: { Unity },
  methods: {
    getUnityHook() {
      this.$refs.unityInstance.message('JavascriptHook', 'SetNickname', this.nickname);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.unity-style {
  width: 80%;
  height: 80%;
}
</style>
