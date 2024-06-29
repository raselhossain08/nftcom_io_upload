// src/router/index.js
import { route } from "quasar/wrappers";
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import routes from "./routes";

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === "history"
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    // Modified scrollBehavior for smooth scrolling
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else if (to.hash) {
        return {
          el: to.hash,
          behavior: "smooth",
        };
      } else {
        return { left: 0, top: 0 };
      }
    },
    routes,

    // Leave this as is and change the mode via quasar.conf.js instead!
    // Doing so, quasar.conf.js will take care of the proper config for your build tool
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  return Router;
});
