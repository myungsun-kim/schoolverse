import Unity from "@/components/Unity.vue";
import SignUp from "@/components/SignUp.vue";
import LogIn from "@/components/LogIn.vue";
import Home from "@/components/Home.vue";
import Info from "@/components/Info.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/unity",
    name: "Unity",
    component: Unity,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/login",
    name: "LogIn",
    component: LogIn,
  },
  {
    path: "/info",
    name: "Info",
    component: Info,
  },
];

export default routes;
