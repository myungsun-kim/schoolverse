<template>
  <div class="flex flex-col gap-4 pb-12">
    <div class="">
      <div class="h-52 w-full flex bg-gray-200" v-if="!access_token">
        <p class="m-auto">
          <router-link class="signup-span" :to="{ name: 'Signup' }"
            >회원가입</router-link
          >
          후 더 많은 서비스를 이용해보세요!
        </p>
      </div>
      <div class="pb-4">
        <p class="text-left p-4">추천도서</p>
        <div v-if="!access_token" class="h-60 flex">
          <p class="m-auto">로그인 후 사용할 수 있는 기능입니다.</p>
        </div>
        <div v-else class="">
          <Carousel :bookList="recList" class="" />
        </div>
      </div>
    </div>
    <div class="pb-4">
      <p class="text-left p-4">어떤 도서</p>
      <Carousel :bookList="randomList" />
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
.signup-span {
  @apply underline hover:text-blue-700 cursor-pointer;
}
</style>
