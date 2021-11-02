<template>
  <unity
    src="./tmp/Build/tmp.json"
    width="1000"
    height="600"
    unityLoader="./tmp/Build/UnityLoader.json"
  ></unity>
</template>

<script>
import Unity from "vue-unity-webgl";

export default {
  name: "Welcome",
  components: { Unity }
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
</style>
