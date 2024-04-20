import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/content.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/employees.vue",
      name: "employees",
      component: () => import("../views/employees.vue"),
    },
    {
      path: "/table",
      name: "table",
      component: () => import("../views/table.vue"),
    },
    {
      path: "/content",
      name: "content",
      component: () => import("../views/content.vue"),
    },
    {
      path: "/",
      name: "home",
      component: () => import("../views/home.vue"),
    },
  ],
});

export default router;
