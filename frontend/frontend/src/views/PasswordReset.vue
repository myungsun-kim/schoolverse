<template>
  <p>비밀번호변경</p>
  <p>가입시 적은 이메일에 어쩌구</p>
  <input type="email" v-model="asd" />
  <button @click="test">이거 눌러</button>
</template>

<script>
import { ref } from "@vue/reactivity"
import { useStore } from "vuex"

export default {
  name: "PasswordReset",
  components: {},
  setup() {
    const asd = ref("")
    const store = useStore()

    const test = () => {
      store.dispatch("auth/passwordReset", asd)
    }

    return { asd, test }
  },
}
</script>

<style lang="scss" scoped></style>
