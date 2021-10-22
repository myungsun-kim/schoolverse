<template>
  <div class="wrapper">
    <div class="header">
      <h1>회원가입</h1>
    </div>
    <div class="content">
      <div class="btn-group">
        <div class="input-form grid grid-cols-12 gap-4">
          <input
            type="text"
            class="input col-span-10"
            v-model="userInfo.userId"
            @focus="clear"
            @input="usernameValid"
            placeholder="아이디를 입력해주세요"
            autocomplete="off"
          />
          <label for="email" class="label">아이디</label>
          <button class="btn ok" @click="redupId" v-if="redupCheckId==false">중복확인</button>
          <button class="btn pointer-events-none" v-else>중복확인</button>
        </div>
        <!-- <p class="text-red-500 pt-1" v-if="usernameStatus === false">
          5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.
        </p> -->
      </div>
      <div class="btn-group">
        <div class="input-form grid grid-cols-12 gap-4">
          <input
            type="nickname"
            class="input col-span-10"
            v-model="userInfo.nickname"
            placeholder="닉네임을 입력해주세요"
            autocomplete="off"
            @focus="emailClear"
          />
          <label for="email" class="label">닉네임</label>
          <button class="btn ok" @click="redupNickname" v-if="redupCheckNickname==false">중복확인</button>
          <button class="btn pointer-events-none" v-else>중복확인</button>
        </div>
        <p class="text-red-500 pt-1" v-if="emailStatus === false">
          닉네임을 다시 확인해주세요.
        </p>
      </div>
      <div class="input-form">
        <form>
          <input
            type="password"
            id="password"
            class="input"
            placeholder="password"
            autocomplete="off"
            v-model="userInfo.password"
            @focus="pwClear"
            @input="passwordValid"
          />
          <label for="password" class="label">비밀번호</label>
          <p class="text-red-500 pt-1" v-if="pwStatus === false">
            8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.
          </p>
        </form>
      </div>
      <div class="input-form">
        <form>
          <input
            type="password"
            id="password2"
            class="input"
            placeholder="password2"
            autocomplete="off"
            v-model="userInfo.password2"
            @focus="checkClear"
            @input="passwordSame"
          />
          <label for="password2" class="label">비밀번호 확인</label>
          <p class="text-red-500 pt-1" v-if="pwCheck === false">
            비밀번호가 일치하지 않습니다.
          </p>
        </form>
      </div>
      
      <!-- <p class="text-red-500 pt-1" v-if="nameStatus === false">
        이름을 정확히 입력해주세요.
      </p> -->
      <!-- <p class="text-red-500 pt-1" v-if="pwCheck === false">
          비밀번호가 일치하지 않습니다.
        </p> -->
      <div class="btn-group">
        <button @click="signUp" class="btn ok" 
          v-if="
            userInfo.password2 == userInfo.password &&
            pwCheck === true &&
            pwStatus === true &&
            redupCheckNickname == true &&
            redupCheckId == true
          ">회원가입</button>
        <button
            class="btn pointer-events-none"
            v-else
          >
          회원가입
        </button>
        <!-- <button
          class="btn nope"
          v-else-if="
            usernameStatus === false ||
            pwCheck === false ||
            pwStatus === false ||
            emailStatus === false
          "
        >
          회원가입
        </button> -->
        
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex"
import { reactive, ref } from "@vue/reactivity"
import router from "@/router"
import { computed } from "vue"


export default {
  name: "Signup",
  components: {},
  setup() {
    const store = useStore()

    const pwStatus = ref("")
    const emailStatus = ref("")
    const pwCheck = ref("")
    const usernameStatus = ref("")
    const nameStatus = ref("")
    
    // const redupCheckId = store.state.auth.redupIdCheck
    const redupCheckId = computed(() => {
      return store.state.auth.redupIdCheck
    })
    
    const redupCheckNickname = computed(() => {
      return store.state.auth.redupNicknameCheck
    })

    const clear = () => {
      usernameStatus.value = true
    }

    const pwClear = () => {
      pwStatus.value = true
    }

    const checkClear = () => {
      pwCheck.value = true
    }

    const emailClear = () => {
      emailStatus.value = true
    }

    

    const usernameValid = () => {
      if (/^[A-Za-z0-9_-]{4,21}$/.test(userInfo.username)) {
        // if (/^[A-Za-z]{1}[A-Za-z0-9_-]{5,13}$/.test(userInfo.username)) {
        usernameStatus.value = true
      } else {
        usernameStatus.value = false
      }
    }

    const passwordValid = () => {
      if (/(?=.*[a-zA-ZS])(?=.*?[#?!@$%^&*-]).{7,17}/.test(userInfo.password)) {
        pwStatus.value = true
      } else {
        pwStatus.value = false
      }
    }
    const passwordSame = () => {
      if (userInfo.password === userInfo.password2) {
        pwCheck.value = true
      } else {
        pwCheck.value = false
      }
    }

    const userInfo = reactive({
      userId: "",
      nickname: "",
      password: "",
    })
    const signUp = () => {
      store.dispatch("auth/signUp", userInfo)
    }

    // 아이디 중복확인
    const redupId = () => {
      store.dispatch("auth/redupId", userInfo)
    }

    // 닉네임 중복확인
    const redupNickname = () => {
      store.dispatch("auth/redupNickname", userInfo)
    }

    return {
      userInfo,
      signUp,
      usernameValid,
      usernameStatus,
      clear,
      passwordValid,
      pwStatus,
      pwClear,
      checkClear,
      passwordSame,
      pwCheck,
      emailStatus,
      emailClear,
      nameStatus,
      redupId,
      redupCheckId,
      redupNickname,
      redupCheckNickname,
    }
  },
}
</script>

<style lang="scss" scoped>
p {
  @apply text-sm text-left pl-2;
}

.wrapper {
  @apply w-1/3 mx-auto pb-32;

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
    .btn-group {
      @apply my-8;

      .btn {
        @apply w-20 h-10 bg-gray-400 rounded-md text-white shadow-md;
      }
      .nope {
        @apply bg-red-600 cursor-not-allowed;
      }
      .button-id {
        @apply w-20 h-56 bg-green-200 rounded-md;
      }
      // .button-nickname {
      //   @apply 
      // }
      .ok {
        @apply bg-blue-500;
      }
    }
  }
}
</style>
