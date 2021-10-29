import { createRouter, createWebHistory } from "vue-router"

import HomeLayout from "@/layouts/HomeLayout.vue"
import AccountsLayout from "@/layouts/AccountsLayout.vue"
import Home from "../views/Home.vue"
import Search from "../views/Search.vue"
import MyPage from "../views/MyPage.vue"
import Register from "../views/Register.vue"
import Signup from "../views/Signup.vue"
import Signin from "../views/Signin.vue"
import main from "../views/main.vue"
import PasswordReset from "../views/PasswordReset.vue"
// import Member from "../views/Member.vue"
import Detail from "../views/Detail.vue"
import Unity from "../views/Unity.vue"
import Info from "../views/Info.vue"


const requireAuth = () => (from, to, next) => {
  const isAuthenticated = localStorage.getItem("accessToken")
  if (isAuthenticated) return next()
  next("/accounts/signin")
}

const requireAuth2 = () => (from, to, next) => {
  const isAuthenticated = localStorage.getItem("accessToken")
  if (isAuthenticated) {
    next({ name: "main" })
  } else {
    next()
  }
}

// children
// https://router.vuejs.org/kr/guide/essentials/nested-routes.html
const routes = [
  {
    path: "/",
    component: HomeLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "main",
        name: "main",
        component: main,
      },
      {
        path: "search",
        name: "Search",
        component: Search,
        beforeEnter: requireAuth(),
      },
      {
        path: "mypage",
        name: "MyPage",
        component: MyPage,
        beforeEnter: requireAuth(),
      },
      {
        path: "detail",
        name: "Detail",
        component: Detail,
        // props: true,
      },
      {
        path: "unity",
        name: "Unity",
        component: Unity,
      },
      {
        path: "/info",
        name: "Info",
        component: Info,
      },
    ],
  },
  {
    path: "/accounts",
    component: AccountsLayout,
    beforeEnter: requireAuth2(),
    children: [
      {
        path: "signup",
        name: "Signup",
        component: Signup,
      },
      {
        path: "signin",
        name: "Signin",
        component: Signin,
      },
      {
        path: "register",
        name: "Register",
        component: Register,
      },
      {
        path: "passwordReset",
        name: "PasswordReset",
        component: PasswordReset,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
