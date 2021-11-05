import Unity from "@/components/Unity.vue";
import SignUp from "@/components/SignUp.vue";
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
    path: "/signup",
    component: SignUp,
  },
  {
    path: "/info",
    component: Info,
  },
];

export default routes;
