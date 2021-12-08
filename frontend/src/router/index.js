import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
// import Test from "@/components/Test.vue";
Vue.use(VueRouter);

const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: "active",
  mode: "history",
  // base: process.env.BASE_URL,
});

export default router;
