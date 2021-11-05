<template>
  <div class="wrapper">
    <div class="content">
      <div class="btn-group">
        <div class="input-form grid grid-cols-12 gap-4">
          <input
            v-if="redupCheckId == true"
            type="text"
            class="input col-span-10"
            v-model="userInfo.id"
            disabled
          />
          <input
            v-else
            type="text"
            class="input col-span-10"
            v-model="userInfo.id"
            @focus="idClear"
            @input="userIdValid"
            placeholder="아이디를 입력해주세요"
            autocomplete="off"
          />
          <label for="email" class="label">아이디</label>
          <button class="btn ok" @click="redupId" v-if="redupCheckId == false">
            중복확인
          </button>
          <button class="btn pointer-events-none" v-else>중복확인</button>
        </div>
        <p class="text-red-500 pt-1" v-if="userIdStatus === false">
          5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.
        </p>
      </div>
      <div class="btn-group">
        <div class="input-form grid grid-cols-12 gap-4">
          <input
            v-if="redupCheckNickname == true"
            type="text"
            class="input col-span-10"
            v-model="userInfo.nickname"
            disabled
          />
          <input
            v-else
            type="nickname"
            class="input col-span-10"
            v-model="userInfo.nickname"
            placeholder="닉네임을 입력해주세요"
            autocomplete="off"
            @focus="nicknameClear"
          />
          <label for="email" class="label">닉네임</label>
          <button
            class="btn ok"
            @click="redupNickname"
            v-if="redupCheckNickname == false"
          >
            중복확인
          </button>
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
            v-model="password2"
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
        <button
          @click="signUp"
          class="btn ok"
          v-if="
            userInfo.password == password2 &&
            pwCheck === true &&
            pwStatus === true &&
            redupCheckNickname == true &&
            redupCheckId == true
          "
        >
          회원가입
        </button>
        <button class="btn pointer-events-none" v-else>회원가입</button>
        <!-- <button
          class="btn nope"
          v-else-if="
            userIdStatus === false ||
            pwCheck === false ||
            pwStatus === false ||
            emailStatus === false
          "
        >
          회원가입
        </button> -->
      </div>
      <!-- <input id="id" v-model="id" type="text" placeholder="ID" name="id" />
    <input
      id="nickname"
      v-model="nickname"
      type="text"
      placeholder="Nickname"
      name="nickname"
    />
    <input
      id="password"
      v-model="password"
      type="password"
      placeholder="Password"
      name="password"
    />
    <button @click="register">클릭</button> -->
    </div>
  </div>
</template>
<script>
import http from "@/util/http-common";

export default {
  data() {
    return {
      userInfo: {
        id: "",
        nickname: "",
        password: "",
      },
      password2: "",
      passwordValid: "",
      userIdStatus: "",
      emailStatus: "",
      pwStatus: "",
      passwordSame: "",
      pwCheck: "",
    };
  },
  methods: {
    idClear() {
      this.usernameStatus = true;
    },
    nicknameClear() {
      // this.nickname="";
    },
    pwClear() {},
    checkClear() {},
    userIdValid() {
      //유효성 검사
      if (/^[A-Za-z0-9_-]{4,21}$/.test(this.id)) {
        // if (/^[A-Za-z]{1}[A-Za-z0-9_-]{5,13}$/.test(userInfo.username)) {
        this.userIdStatus = true;
      } else {
        this.userIdStatus = false;
      }
    },
    redupCheckId() {
        this.$store.dispatch("redupId");
    },
    redupCheckNickname() {},
    register() {
      http
        .post("/users/signUp", {
          id: this.id,
          password: this.password,
          nickname: this.nickname,
          //   id: "ssafy222",
          //   password: "Qwer!234",
          //   nickname: "ssafy222",
        })
        .then(({ data }) => {
          console.log(data);
          if (data.statusCode == 200) {
            alert("회원가입이 완료되었습니다");
          } else {
            alert("회원가입 실패");
          }
        });
    },
  },
};
</script>
<style scoped>
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
      /* .button-nickname {
         @apply
       } */
      .ok {
        @apply bg-blue-500;
      }
    }
  }
}
</style>
