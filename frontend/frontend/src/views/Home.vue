<template>
  <div class="btn-group h-100 text-8xl h-full min-h-screen grid justify-items-center content-center">
    <button class="sign" @click="signin" v-if="!activeSignin">로그인</button>
    <button class="sign" @click="signup" v-if="!activeSignin">회원가입</button>
    <button v-else class="sign signout-btn" @click="signout">로그아웃</button>
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
    @apply text-center text-white rounded-3xl w-1/3 bg-purple-600 my-10;
  }
}

</style>
