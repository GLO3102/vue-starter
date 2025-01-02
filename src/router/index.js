import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Restaurant from "../components/Restaurant.vue";
import User from "../components/User.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/restaurant",
    name: "Restaurant",
    component: Restaurant,
  },
  {
    path: "/user",
    name: "User",
    component: User,
  },
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
