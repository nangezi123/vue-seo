

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

/**解决跳转当前路由的报错问题*/
// const originalPush = VueRouter.prototype.push;
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch((err) => err);
// };

// const Hello = () => import("../components/Hello.vue");
// const Editor = () => import("../components/publish/Editor.vue");
const Home = () => import("../views/Home/index.vue");
// const Attention = () => import("../components/home/Attention.vue");
// const Recommend = () => import("../components/home/Recommend.vue");
// const Picture = () => import("../components/home/Picture.vue");
// const Profile = () => import("../components/home/Profile.vue");
// const Login = () => import("../components/user/Login.vue");
// const Register = () => import("../components/user/Register.vue");

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    // {
    //   path: "/home",
    //   name: "home",
    //   component: Home,
    //   children: [
    //     {
    //       path: "attention",
    //       name: "attention",
    //       component: Attention,
    //     },
    //     {
    //       path: "recommend",
    //       name: "recommend",
    //       component: Recommend,
    //     },
    //     {
    //       path: "picture",
    //       name: "picture",
    //       component: Picture,
    //     },
    //     {
    //       path: "profile",
    //       name: "profile",
    //       component: Profile,
    //     },
    //   ],
    // },
    // {
    //   path: "/hello",
    //   name: "hello",
    //   component: Hello,
    // },
    // {
    //   path: "/editor",
    //   name: "editor",
    //   component: Editor,
    // },
    // {
    //   path: "/login",
    //   name: "login",
    //   component: Login,
    // },
    // {
    //   path: "/register",
    //   name: "register",
    //   component: Register,
    // },
  ],
});
