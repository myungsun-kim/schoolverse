// import Test from "@/components/Test.vue";
import Unity from "@/components/Unity.vue";

const routes = [
  {
    path: "/",
    component: Unity,
    redirect: "/",
    children: [
      {
        path: "",
        component: Unity,
      },
    ],
  },
];

export default routes;
