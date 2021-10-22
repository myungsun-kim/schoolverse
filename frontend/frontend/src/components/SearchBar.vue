<template>
  <div class="search-bar bg-gray-200">
    <div class="top-content">
      <router-link :to="{ name: 'Home' }">
        <div class="flex">
          <p class="my-auto text-xl">스쿨버스</p>
        </div></router-link
      >
      <div class="btn-group">
        <!-- v-if else는 같은 div안에 있어야 친구가 될 수 있다.. -->
        <button class="sign signout-btn" @click="signout" v-if="activeSignin">
          로그아웃
        </button>
        <button class="sign signout-btn mx-3" @click="userInfo" v-if="activeSignin">
          회원정보
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import { ref } from "vue"
import { useRouter } from "vue-router"
import { useStore } from "vuex"
import { onUnmounted, ref } from "vue"

export default {
  name: "SearchBar",
  components: {},
  setup() {
    const store = useStore()
    const router = useRouter()
    const activeSignin = localStorage.getItem("accessToken")
    // const refresh = localStorage.getItem("refresh_token")

    const signin = () => {
      router.push({ name: "Signin" })
    }

    const signout = () => {
      // store.dispatch("auth/signout", refresh)
      localStorage.removeItem("accessToken")
      // localStorage.removeItem("refresh_token")
      router.replace({ name: "Home" })
    }

    const userInfo = () => {
      router.push({ name: "MyPage" })
    }


    return { signin, signout, userInfo, activeSignin }
  },
}
</script>

<style lang="scss" scoped>
.search-bar {
  .top-content {
    @apply flex justify-between p-4;

    .btn-group {
      .sign {
        @apply w-20 bg-gray-600 text-white rounded-3xl h-8 shadow-md;
      }
    }
  }

  .bottom-content {
    @apply flex justify-center;

    .search-input {
      @apply w-80 rounded-lg h-12 p-4 shadow;
    }
  }
}
</style>