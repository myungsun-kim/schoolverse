<template>
  <div class="btn-group h-100 text-8xl h-full min-h-screen grid justify-items-center content-center">
    <button class="sign" @click="signin" v-if="!activeSignin"><p class="text-3xl py-5">로그인</p></button>
    <button class="sign" @click="signup" v-if="!activeSignin"><p class="text-3xl py-5">회원가입</p></button>
    <button v-else class="sign signout-btn" @click="signout"><p class="text-3xl py-5">로그아웃</p></button>
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
    // const refresh = localStorage.getItem("refresh_token")

    const signin = () => {
      router.push({ name: "Signin" })
    }

    const signup = () => {
      router.push({ name: "Signup" })
    }

    const signout = () => {
      store.dispatch("auth/signout", refresh)
    }

    return { signin, signup, signout, activeSignin }
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
