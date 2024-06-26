// src/router/routes.js
const routes = [
  {
    path: "/",
    component: () => import("pages/HomeView.vue"),
  },
];

export default routes;
