import axios from "axios"
import router from "@/router"
import { BASEURL } from "@/lib/url"

export const auth = {
  namespaced: true,
  state: () => ({
    userInfo: null,
    redupIdCheck: null,
    books: [],
  }),
  mutations: {
    SET_USERINFO(state, value) {
      // state.userInfo = value.user
      // localStorage.setItem("pk", value.user.pk)
      // localStorage.setItem("userInfo", JSON.stringify(value.user))
      localStorage.setItem("accessToken", value.accessToken)
      // localStorage.setItem("refresh_token", value.refresh_token)
    },
    // 관심분야 책 리스트 불러오기
    SET_BOOKS(state, value) {
      state.books = value
    },
  },
  getters: {},
  actions: {
    // 회원가입(수정)
    signUp({ commit }, userInfo) {
      axios({
        method: "post",
        // url: '/users/signup/',
        url: "http://localhost:8080/users/signUp",
        // url: `${BASEURL}/api/users/signup/`,
        data: {
          id: userInfo.userId,
          nickname: userInfo.nickname,
          password: userInfo.password,
        },
      })
        .then((response) => {
          console.log(response.status)
          // commit("SET_USERINFO", response.data)
          alert("회원가입이 완료됐습니다")
          router.replace({ name: "Signin" })
        })
        .catch((error) => {
          console.error(error)
        })
    },
    // 로그인
    signIn({ commit }, signinForm) {
      axios({
        method: "post",
        // url: `${BASEURL}/api/accounts/login/`,
        url: `http://localhost:8080/auth/login/`,
        data: {
          id: signinForm.id,
          password: signinForm.password,
        },
      })
        .then((response) => {
          console.log(response.status)
          commit("SET_USERINFO", response.data)
          router.replace({ name: "main" })
        })
        .catch((error) => {
          console.error(error)
          alert("아이디와 비밀번호를 확인해주세요")
        })
    },
    // 아이디 중복확인
    redupId({ commit }, redupIdForm) {
      axios({
        method: "get",
        // url: `${BASEURL}/api/accounts/login/`,
        url: `users/signUp/id/${redupIdForm.id}`,
        // data: {
        //   userId: redupIdForm.id,
        // },
      })
        .then((response) => {
          commit("SET_USERINFO", response.data)
          alert("사용 가능한 아이디 입니다.")
          // router.replace({ name: "Home" })
        })
        .catch((error) => {
          console.error(error)
          alert("이미 존재하는 아이디 입니다.")
        })
    },
    // 로그아웃
    signout({ commit }, refresh) {
      axios({
        method: "post",
        url: `${BASEURL}/api/accounts/logout/`,
        data: {
          refresh: refresh,
        },
      })
        .then((response) => {
          localStorage.clear()
          router.go()
        })
        .catch((error) => {
          console.error(error)
        })
    },
    // 비밀번호 찾기
    // -------------------------------- ING -------------------------------- //
    passwordReset({ commit }, mail) {
      console.log(mail.value)
      axios({
        method: "post",
        url: `${BASEURL}/api/accounts/password_reset/`,
        data: {
          email: mail.value,
        },
      })
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.error(error)
        })
    },
    // -------------------------------- ING -------------------------------- //
    // 책 가져오기
    getBooks({ commit }, access_token) {
      axios({
        method: "get",
        url: `${BASEURL}/api/book/list`,
        params: {
          // review_cnt 순으로
          base: "review_cnt",
          // 리뷰가 50개 넘는 것만,
          min_review_cnt: 50,
          // 한 페이지에 60개씩
          cnt_per_page: 60,
          // PAGE는 랜덤하게(유저마다 다르게 보이도록)
          page_num: Math.floor(Math.random() * (11 - 1) + 1),
        },
        headers: { Authorization: `Bearer ${access_token}` },
      })
        .then((response) => {
          commit("SET_BOOKS", response.data)
        })
        .catch((error) => {
          console.error(error)
        })
    },
    // 책 찜하기(가입 시)
    makeLike({ commit }, payload) {
      axios({
        method: "post",
        url: `${BASEURL}/api/book/like/`,
        data: {
          book_ids: payload.likeList,
          user_id: payload.user_id,
        },
        headers: { Authorization: `Bearer ${payload.access_token}` },
      })
        .then((response) => {
          router.push({ name: "Home" })
        })
        .catch((error) => {
          console.error(error)
        })
    },
  },
}
