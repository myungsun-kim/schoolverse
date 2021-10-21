import axios from "axios"
import { BASEURL } from "@/lib/url"

export const detail = {
  namespaced: true,
  state: () => ({
    bookDetail: null,
    bookReview: null,
    isRead: false,
    isLike: false,
  }),
  mutations: {
    SET_BOOKDETAIL(state, value) {
      state.bookDetail = value
    },
    SET_BOOKREVIEW(state, value) {
      state.bookReview = value
    },

    SET_ISREAD(state) {
      state.isRead = !state.isRead
    },
    SET_ISLIKE(state) {
      state.isLike = !state.isLike
    },
    SET_ICON(state) {
      state.isRead = false
      state.isLike = false
    },
  },
  getters: {
    GET_BOOKDETAIL(state) {
      return state.bookDetail
    },
    GET_ISREAD(state) {
      return state.isRead
    },
    GET_ISLIKE(state) {
      return state.isLike
    },
  },
  actions: {
    getBookDetail({ commit, state }, payload) {
      console.log(payload.book_id)
      //새로운 detail 설정할 때 마다 isRead,isLike false로 setting
      commit("SET_ICON")

      axios
        .get(`${BASEURL}/api/book`, {
          headers: {
            Authorization: `Bearer ${payload.access_token}`,
          },
          params: {
            book_id: payload.book_id,
          },
        })
        .then((response) => {
          commit("SET_BOOKDETAIL", response.data)

          for (let item in response.data.like_users) {
            if (response.data.like_users[item] == payload.userPk) {
              commit("SET_ISLIKE")
            }
          }

          for (let item in response.data.read_users) {
            if (response.data.read_users[item] == payload.userPk) {
              commit("SET_ISREAD")
            }
          }
        })
        .catch((error) => {
          console.error(error)
        })

      axios
        .get(`${BASEURL}/api/book/review/list`, {
          headers: {
            Authorization: `Bearer ${payload.access_token}`,
          },
          params: {
            book_id: payload.book_id,
          },
        })
        .then((response) => {
          commit("SET_BOOKREVIEW", response.data)
        })
        .catch((error) => {
          console.error(error)
        })
    },

    readBook({ commit }, payload) {
      axios({
        method: "post",
        url: `${BASEURL}/api/book/read/`,
        data: {
          book_id: payload.book_id,
          read_at: payload.fullDay,
        },
        headers: { Authorization: `Bearer ${payload.access_token}` },
      })
        .then((response) => {
          commit("SET_ISREAD")
        })
        .catch((error) => {
          console.error(error)
        })
    },
    unReadBook({ commit }, payload) {
      axios({
        method: "delete",
        url: `${BASEURL}/api/book/read`,
        data: {
          book_id: payload.book_id,
        },
        headers: { Authorization: `Bearer ${payload.access_token}` },
      })
        .then((response) => {
          commit("SET_ISREAD")
        })
        .catch((error) => {
          console.error(error)
        })
    },
    likeBook({ commit }, payload) {
      axios({
        method: "post",
        url: `${BASEURL}/api/book/like/`,
        data: {
          book_id: payload.book_id,
        },
        headers: { Authorization: `Bearer ${payload.access_token}` },
      })
        .then((response) => {
          commit("SET_ISLIKE")
        })
        .catch((error) => {
          console.error(error)
        })
    },

    unLikeBook({ commit }, payload) {
      axios({
        method: "delete",
        url: `${BASEURL}/api/book/like`,
        data: {
          book_id: payload.book_id,
        },
        headers: { Authorization: `Bearer ${payload.access_token}` },
      })
        .then((response) => {
          commit("SET_ISLIKE")
        })
        .catch((error) => {
          console.error(error)
        })
    },

    writeReview({ commit }, reviewData) {
      axios({
        method: "post",
        url: `${BASEURL}/api/book/review/`,
        data: {
          book_id: reviewData.book_id,
          content: reviewData.content,
          score: reviewData.score,
        },
        headers: { Authorization: `Bearer ${reviewData.access_token}` },
      })
        .then((response) => {
          console.log(response.status)
        })
        .catch((error) => {
          console.error(error)
        })
    },
  },
}
