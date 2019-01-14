import Vue from "vue";
import VueRouter from "vue-router";

import Welcome from "./components/Welcome";
import AllUsers from "./components/AllUsers";

Vue.use(VueRouter);

const routes = new VueRouter({
  routes: [
    { path: "/", component: Welcome },
    { path: "/allusers", component: AllUsers }
  ]
});

export default routes;
