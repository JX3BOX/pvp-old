import Vue from "vue";
import VueRouter from "vue-router";

const Index = () => import("../views/Index.vue");
const Sandbox = () => import("../views/Sandbox.vue");

Vue.use(VueRouter);

const routes = [
    { name: "index", path: "/", component: Sandbox },
    { name: "sandbox", path: "/sandbox", component: Sandbox },
];

const router = new VueRouter({
    mode: "history",
    // base: '/team',
    routes,
});

export default router;
