<template>
  <unity
    src="../../unity/Build/unity.symbols.json"
    width="1000"
    height="600"
    unityLoader="../../unity/Build/unity.loader.js"
  ></unity>
</template>
<script>
import Unity from "vue-unity-webgl";
export default {
  name: "Tmp",
  components: { Unity },
};
</script>
