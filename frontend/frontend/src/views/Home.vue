<template>
<div class="grid row-start-5">
  <div class="gap-4 pb-12 self-center grid grid-cols-3">
    <button class="mx-11 py-2 px-3 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700 col-start-2">
      <router-link class="signup-span" :to="{ name: 'Signin' }">
        로그인
      </router-link>
    </button>
  </div>
  <div class="flex flex-col gap-4 pb-12 flexflex-wrap grid grid-cols-3">
    <button class="mx-11 py-2 px-3 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700 col-start-2">
      <router-link class="signup-span" :to="{ name: 'Signup' }">
        회원가입
      </router-link>
    </button>
  </div>
</div>
</template>

<script>
import { useStore } from "vuex"
import Carousel from "@/components/Carousel.vue"
import { onBeforeMount, computed } from "@vue/runtime-core"

export default {
  name: "Home",
  components: {
    Carousel,
  },

  setup() {
    const store = useStore()
    const access_token = localStorage.getItem("access_token")
    const recList = computed(() => {
      return store.state.home.recList
    })

    const randomList = computed(() => {
      return store.state.auth.books.book_list
    })

    onBeforeMount(() => {
      // if (access_token) {
      //   store.dispatch("home/getRec", access_token)
      // }
      store.dispatch("auth/getBooks", access_token)
    })

    return { access_token, recList, randomList }
  },
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "InfinitySans-RegularA1";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/InfinitySans-RegularA1.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

//class가 4개 이상이면 tailwind로 apply해주기
* {
  font-family: "InfinitySans-RegularA1";
}

.wrapper {
  @apply w-3/5 mx-auto pb-32;

  .header {
    @apply py-10;

    h1 {
      @apply text-3xl;
    }
  }

  .content {
    .input-form {
      @apply my-4 relative rounded-xl;

      .input {
        @apply border border-gray-200 focus:outline-none rounded-2xl focus:border-gray-500 focus:shadow-sm w-full p-3 h-14 shadow-md;
      }

      input::placeholder {
        color: transparent;
      }
      input:focus,
      input:not(:placeholder-shown) {
        @apply pt-8;
      }
      input:focus ~ label,
      input:not(:placeholder-shown) ~ label {
        @apply opacity-75 scale-75 -translate-y-3 translate-x-1;
      }

      .label {
        @apply absolute top-0 left-0 px-3 py-4 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out;
      }
    }
  }

  .signin-button {
    @apply w-20 h-10 bg-gray-400 rounded-md text-white my-12 pointer-events-none shadow-md;
    // background-color: saddlebrown;
  }
  .signin-button.active {
    @apply bg-blue-500  pointer-events-auto;
  }

  .signup-button {
    @apply text-base;

    .signup-span {
      @apply underline hover:text-blue-700 cursor-pointer;
    }
  }
}
</style>
