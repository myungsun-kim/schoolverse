<template>
  <div class="btn-group h-100 text-8xl h-full min-h-screen grid justify-items-center content-center">
    <button class="sign" @click="startUnity" v-if="activeSignin"><p class="text-3xl py-5">시작하기</p></button>
  </div>

</template>

<script>
import { useRouter } from "vue-router"
import { useStore } from "vuex"
// import { onBeforeMount, computed } from "@vue/runtime-core"

export default {
  name: "Home",
  components: {},

  setup() {
    const store = useStore()
    const router = useRouter()
    const activeSignin = localStorage.getItem("accessToken")
    const refresh = localStorage.getItem("refresh_token")

    const startUnity = () => {
      router.push({ name: "Unity" })
    }


    return {startUnity, activeSignin }
  },
}
</script>

<style lang="scss" scoped>
// .signup-span {
//   @apply underline hover:text-blue-700 cursor-pointer;
// }
.btn-group {
  .sign {
    @apply text-center text-white rounded-3xl w-1/3 bg-green-300 my-5;
  }
}

</style>
