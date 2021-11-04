import Unity from "@/components/Unity.vue";
import SignUp from "@/components/SignUp.vue";

const routes = [
  {
    path: "/",
    component: SignUp,
    redirect: "/",
    children: [
      {
        path: "",
        name: "signup",
        component: SignUp,
      },
      {
        path: "unity",
        name: "unity",
        component: Unity,
      },
    ],
  },
];

export default routes;
