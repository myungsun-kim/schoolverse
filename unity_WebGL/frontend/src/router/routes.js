// import Test from "@/components/Test.vue";
import Unity from "@/components/Unity.vue";
import Home from "@/components/Home.vue";
import Info from "@/components/Info.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/unity",
    component: Unity,
  },
  {
    path: "/info",
    component: Info,
  },
];

export default routes;
