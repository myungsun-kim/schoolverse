<template>
  <div class="d-flex justify-content-center my-">
    <unity
      src="./BT4/Build/BT4.json"
      unityLoader="./BT4/Build/UnityLoader.json"
      class="unity-style mt-5"
    ></unity>
  </div>
</template>

<script>
import Unity from "vue-unity-webgl";
export default {
  // name: "Unity",
  // name: "HelloWorld",
  // props: {
  //   msg: String,
  // },
  components: { Unity },
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
