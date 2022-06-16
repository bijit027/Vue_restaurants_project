import HomePage from "./components/HomePage.vue";
import SignUp from "./components/SignUp.vue";
import LoginPage from "./components/LoginPage.vue";
import AddRestaurants from "./components/AddRestaurants.vue";
import UpdateRestuarants from "./components/UpdateRestaurants.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "HomePage",
    component: HomePage,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up",
  },
  {
    name: "LoginPage",
    component: LoginPage,
    path: "/login-page",
  },
  {
    name: "AddRestaurants",
    component: AddRestaurants,
    path: "/add",
  },
  {
    name: "UpdateRestuarants",
    component: UpdateRestuarants,
    path: "/update/:id",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
