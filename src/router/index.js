import { createRouter, createWebHistory } from "vue-router";
import Task from "../views/Task.vue";
import Login from "../views/Login.vue";

const routes = [
  {
    path: "/",
    name: "task",
    component: Task,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
