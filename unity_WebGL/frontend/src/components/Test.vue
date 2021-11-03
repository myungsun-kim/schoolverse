<template>
  <unity
    src="static/Build/game.json"
    width="1000"
    height="600"
    unityLoader="static/Build/UnityLoader.js"
  ></unity>
</template>

<script>
import Unity from "vue-unity-webgl";

export default {
  components: { Unity },
};
</script>
