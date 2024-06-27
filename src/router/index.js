import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Home - Shooting Template",
    },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
    meta: {
      title: "About - Shooting Template",
    },
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: () => import("../views/PortfolioView.vue"),
    meta: {
      title: "Portfolio - Shooting Template",
    },
  },
  {
    path: "/works",
    name: "works",
    component: () => import("../views/WorksView.vue"),
    meta: {
      title: "Works - Shooting Template",
    },
  },
  {
    path: "/services",
    name: "services",
    component: () => import("../views/ServicesView.vue"),
    meta: {
      title: "Services - Shooting Template",
    },
  },
  {
    path: "/faq",
    name: "faq",
    component: () => import("../views/FaqView.vue"),
    meta: {
      title: "FAQ - Shooting Template",
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ContactView.vue"),
    meta: {
      title: "Contact - Shooting Template",
    },
  },
];
// when click on page link it gets you to the top of the page
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  } else {
    return { left: 0, top: 0 };
  }
};

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior,
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = "Default Title";
  }
  next();
});

export default router;
