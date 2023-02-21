import { createWebHistory, createRouter } from "vue-router";
import Home from "./pages/Home.vue";
import Page2 from "./pages/Page2.vue";
import Page3 from "./pages/Page3.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
      name: "Home",
    },
    {
      path: "/page2",
      component: Page2,
      name: "Page2",
    },
    {
      path: "/page3",
      component: Page3,
      name: "Page3",
    },
  ],
});

export { router };
