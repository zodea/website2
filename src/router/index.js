import Layout from "@/layout/index.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/home"),
        meta: {
          navbar: true, // 是否需要置顶的导航
        },
      },
      {
        path: "/solutions",
        name: "solutions",
        component: () => import("@/views/solutions"),
        meta: {
          navbar: true, // 是否需要置顶的导航
        },
      },
      {
        path: "/industryPavilionCase",
        name: "industryPavilionCase",
        component: () => import("@/views/industryPavilionCase"),
        meta: {
          navbar: true, // 是否需要置顶的导航
        },
      },
      {
        path: "/creativeInteraction",
        name: "creativeInteraction",
        component: () => import("@/views/creativeInteraction"),
        meta: {
          navbar: true, // 是否需要置顶的导航
        },
      },
      {
        path: "/news",
        name: "news",
        component: () => import("@/views/news"),
        meta: {
          navbar: true, // 是否需要置顶的导航
        },
      },
      {
        path: "/aboutUs",
        name: "aboutUs",
        component: () => import("@/views/aboutUs"),
        meta: {
          navbar: true, // 是否需要置顶的导航
        },
      },
      {
        path: "/contactUs",
        name: "contactUs",
        component: () => import("@/views/contactUs"),
        meta: {
          navbar: true, // 是否需要置顶的导航
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
