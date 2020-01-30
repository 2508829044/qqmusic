import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    children: [
      {
        path: "/Recommended",
        name: "Recommended",
        component: () => import("../views/Home/Recommended.vue")
      },
      {
        path: "/Official",
        name: "Official",
        component: () => import("../views/Home/Official.vue")
      }
    ]
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/Newdish",
    name: "Newdish",
    component: () => import("../views/Newdish.vue")
  },
  {
    path: "/RankingList",
    name: "RankingList",
    component: () => import("../views/RankingList.vue")
  },
  {
    path: "/Classifiedsinginglist",
    name: "Classifiedsinginglist",
    component: () => import("../views/Classifiedsinginglist.vue")
  }
];

const router = new VueRouter({
  routes
});

//全局导航构子函数
router.beforeResolve((to, from, next) => {
  if (to.path == "/") next("/Recommended");
  next();
});

export default router;
