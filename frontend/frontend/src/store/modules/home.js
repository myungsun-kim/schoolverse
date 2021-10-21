import axios from "axios"
import { BASEURL } from "@/lib/url"

export const home = {
  namespaced: true,
  state: () => ({
    recList: [],
  }),
  mutations: {
    SET_REC(state, value) {
      state.recList = value
    },
  },
  getters: {},
  actions: {
    getRec({ commit }, token) {
      axios({
        method: "get",
        url: `${BASEURL}/api/book/recommend/tag/`,
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => {
          console.log(response.status)
          commit("SET_REC", response.data)
        })
        .catch((error) => {
          console.error(error)
        })
    },
  },
}
