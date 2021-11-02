import Vue from "vue";
import VueRouter from "vue-router";
// import routes from "./routes";
import Test from "@/components/Test.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Test,
    },
  ],
});
// const routes = [
//   {
//     path: "/test",
//     name: "Test",
//     component: Test,
//   },
// ];
// configure router
// const router = new VueRouter({
//   routes, // short for routes: routes
//   linkActiveClass: "active",
//   mode: "history",
//   base: "/",
// });

// export default routes;
