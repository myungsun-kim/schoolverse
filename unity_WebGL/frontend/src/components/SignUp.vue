<template>
  <div
    class="d-flex align-items-center justify-content-center"
    style="height: 100vh"
  >
    <div class="vertical">
      <div class="input-form">
        <div>
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
      <div class="input-form">
        <div>
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
      <div class="register-btn">
        <button
          @click="register"
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
      </div>
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
      redupCheckId: "",
      redupCheckNickname: "",
      userIdStatus: "",
      emailStatus: "",
      pwStatus: "",
      pwCheck: "",
    };
  },
  methods: {
    idClear() {
      this.userIdStatus = true;
    },
    nicknameClear() {
      this.emailStatus = true;
    },
    pwClear() {
      this.pwStatus = true;
    },
    checkClear() {
      this.pwCheck = true;
    },
    userIdValid() {
      //유효성 검사
      if (/^[A-Za-z0-9_-]{4,21}$/.test(this.userInfo.id)) {
        // if (/^[A-Za-z]{1}[A-Za-z0-9_-]{5,13}$/.test(userInfo.username)) {
        this.userIdStatus = true;
      } else {
        this.userIdStatus = false;
      }
    },
    passwordValid() {
      // 비밀번호 유효성 검사
      if (
        /(?=.*[a-zA-ZS])(?=.*?[#?!@$%^&*-]).{7,17}/.test(this.userInfo.password)
      ) {
        this.pwStatus = true;
      } else {
        this.pwStatus = false;
      }
    },
    passwordSame() {
      // 비밀번호 확인
      if (this.userInfo.password === this.password2) {
        this.pwCheck = true;
      } else {
        this.pwCheck = false;
      }
    },
    redupId() {
      //아이디 중복 체크
      http
        .get("/users/signUp/id/" + this.userInfo.id)
        .then(({ data }) => {
          if (data.statusCode == 200) {
            this.redupCheckId = true;
            alert("사용 가능한 아이디입니다.");
          }
        })
        .catch((error) => {
          console.log(error);
          alert("이미 존재하는 아이디입니다.");
        });
    },
    redupNickname() {
      //닉네임 중복 체크
      http
        .get("/users/signUp/nickname/" + this.userInfo.nickname)
        .then(({ data }) => {
          if (data.statusCode == 200) {
            this.redupCheckNickname = true;
            alert("사용 가능한 닉네임입니다.");
          }
        })
        .catch((error) => {
          console.log(error);
          alert("이미 존재하는 닉네임입니다.");
        });
    },
    register() {
      http
        .post("/users/signUp", {
          id: this.userInfo.id,
          password: this.userInfo.password,
          nickname: this.userInfo.nickname,
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
.router-text {
  text-decoration: none;
  color: #00203f;
  opacity: 0.7;
}
.register-btn {
  margin: 40px auto;
  padding: 10px;
  border: 1px solid #adefd1;
  border-radius: 20px;
  background-color: #adefd1;
  width: 400px;
  opacity: 0.7;
}
.input-form {
  margin: 0 auto;
}
</style>
