<template>
  <div class="container" style="width: 100%">
    <h1 class="my-5 description">회원가입</h1>
    <div class="register-box">
      <div class="input-form row">
        <form>
          <input
            v-if="redupCheckId == true"
            type="text"
            class="input form-control-lg mb-1"
            v-model="userInfo.id"
            disabled
          />
          <input
            v-else
            type="text"
            class="input form-control-lg mb-1 dongdong"
            v-model="userInfo.id"
            @focus="idClear"
            @input="userIdValid"
            placeholder="아이디를 입력해주세요"
            autocomplete="off"
          />
          <!-- <label for="email" class="label">아이디</label> -->
          <div class="chk-btn">
            <button
              class="btn ok"
              @click="redupId"
              v-if="redupCheckId == false"
              type="button"
            >
              중복확인
            </button>
            <button class="btn pointer-events-none" type="button" v-else>
              중복확인
            </button>
          </div>
          <p class="text-red-500 pt-1 dongdong" v-if="userIdStatus === false">
            5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.
          </p>
        </form>
      </div>
      <div class="input-form row">
        <div class="col-md-12">
          <input
            v-if="redupCheckNickname == true"
            type="text form-control-lg mb-1"
            class="input form-control-lg mb-1"
            v-model="userInfo.nickname"
            disabled
          />
          <input
            v-else
            type="nickname"
            class="input form-control-lg mb-1 dongdong"
            v-model="userInfo.nickname"
            placeholder="닉네임을 입력해주세요"
            autocomplete="off"
            @focus="nicknameClear"
          />
          <!-- <label for="email" class="label">닉네임</label> -->
          <div class="chk-btn">
            <button
              class="btn ok"
              @click="redupNickname"
              v-if="redupCheckNickname == false"
            >
              중복확인
            </button>
            <button class="btn pointer-events-none" v-else>중복확인</button>
          </div>
        </div>
        <p class="text-red-500 pt-1 dongdong" v-if="nicknameStatus === false">
          닉네임을 다시 확인해주세요.
        </p>
      </div>
      <div class="input-form2 row">
        <form>
          <input
            type="password"
            id="password"
            class="input form-control-lg mb-1 dongdong"
            placeholder="비밀번호를 입력해주세요"
            autocomplete="off"
            v-model="userInfo.password"
            @focus="pwClear"
            @input="passwordValid"
          />
          <!-- <label for="password" class="label">비밀번호</label> -->
          <p class="text-red-500 dongdong" v-if="pwStatus === false">
            8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.
          </p>
        </form>
      </div>
      <div class="input-form2 row">
        <form>
          <input
            type="password"
            id="password2"
            class="input form-control-lg mb-1 dongdong"
            placeholder="비밀번호를 확인해주세요"
            autocomplete="off"
            v-model="password2"
            @focus="checkClear"
            @input="passwordSame"
          />
          <!-- <label for="password2" class="label">비밀번호 확인</label> -->
          <p class="text-red-500 pt-1 dongdong" v-if="pwCheck === false">
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
import Swal from 'sweetalert2';

// import axios from "axios";

export default {
  data() {
    return {
      userInfo: {
        id: "",
        nickname: "",
        password: "",
      },
      password2: "",
      redupCheckId: false,
      redupCheckNickname: false,
      userIdStatus: "",
      nicknameStatus: "",
      pwStatus: "",
      pwCheck: "",
    };
  },
  methods: {
    idClear() {
      this.userIdStatus = true;
    },
    nicknameClear() {
      this.nicknameStatus = true;
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
      if (this.userIdStatus == true) {
        http
          .get("/users/signUp/id/" + this.userInfo.id)
          .then(({ data }) => {
            if (data.statusCode == 200) {
              this.redupCheckId = true;
                Swal.fire({
              title: '중복확인 성공',
              text: '사용 가능한 아이디입니다.',
              icon: 'success',
              confirmButtonText: '확인!'
              })
          }})
          .catch((error) => {
            console.log(error);
            Swal.fire({
            title: '중복확인 실패',
            text: '이미 존재하는 아이디입니다.',
            icon: 'error',
            confirmButtonText: '확인!'
          })
          });
      } else {
        Swal.fire({
            title: '',
            text: '아이디는 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.',
            icon: 'error',
            confirmButtonText: '확인!'
          })
      }
    },
    redupNickname() {
      //닉네임 중복 체크
      http
        .get("/users/signUp/nickname/" + this.userInfo.nickname)
        .then(() => { 
            // alert("로그인이 완료되었습니다.");
            this.redupCheckNickname = true;
            Swal.fire({
            title: '중복확인 성공',
            text: '사용 가능한 닉네임입니다.',
            icon: 'success',
            confirmButtonText: '확인!',
          })
        }).catch(() => {
            Swal.fire({
            title: '중복확인 실패',
            text: '이미 존재하는 닉네임입니다.',
            icon: 'error',
            confirmButtonText: '확인!'
          })
        })
        // .then(({ data }) => {
        //   if (data.statusCode == 200) {
        //     this.redupCheckNickname = true;
        //     alert("사용 가능한 닉네임입니다.");
        //   }
        // })
        // .catch((error) => {
        //   console.log(error);
        //   alert("이미 존재하는 닉네임입니다.");
        // });
    },
    register() {
      http
        .post("/users/signUp", {
          id: this.userInfo.id,
          password: this.userInfo.password,
          nickname: this.userInfo.nickname,
        })
        .then(() => { 
            // alert("로그인이 완료되었습니다.");
            Swal.fire({
            title: '회원가입 성공',
            text: '성공적으로 회원가입 되었습니다.',
            icon: 'success',
            confirmButtonText: '로그인 하기!',
          })
            this.$router.push("/logIn");
        }).catch(() => {
            Swal.fire({
            title: '회원가입 실패',
            text: '다시 시도해주세요.',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        })
    },
  },
};
</script>
<style scoped>
.register-btn {
  margin: 40px auto;
  padding: 10px;
  border: 1px solid #adefd1;
  border-radius: 20px;
  background-color: #adefd1;
  width: 400px;
  opacity: 0.7;
}
.input {
  /* width: 80%;
  height: 40%; */
  border-radius: 1px;
  width: 80%;
  height: 40%;
}
.input-form {
  margin: 0 auto;
  height: 80px;
  width: 72%;
}
.input-form2 {
  margin: 0 auto;
  height: 80px;
  width: 84%;
}
.name {
  width: 15%;
  background-color: blue;
}
.register-box {
  margin: 40px auto;
  padding: 40px;
  border: 1px solid Light;
  border-radius: 20px;
  background-color: #f1f7f4;
  width: 80%;
  height: 30%;
  opacity: 0.7;
  text-align: center;
}
.chk-btn {
  float: right;
  border: 1px solid #adefd1;
  border-radius: 10px;
  background-color: #adefd1;
  opacity: 0.7;
}
</style>
