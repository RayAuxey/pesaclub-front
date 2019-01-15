import Vue from "vue";
import VueRouter from "vue-router";

import Welcome from "./components/Welcome";
import AllUsers from "./components/AllUsers";
import NotBuilt from "./components/NotBuilt";
import BuyPesaform from "./components/BuyPesaform";

Vue.use(VueRouter);

const routes = new VueRouter({
  routes: [
    { path: "/", component: Welcome },
    { path: "/allusers", component: AllUsers },
    { path: "/404", component: NotBuilt },
    { path: "/buy/:id", component: BuyPesaform },
    { path: "/buy", component: BuyPesaform }
  ]
});

export default routes;
