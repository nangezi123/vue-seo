import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/style/index.less';


Vue.config.productionTip = false;

import less from 'less'
Vue.use(less)

import { Swipe, SwipeItem, Lazyload } from 'vant';
import 'vant/lib/index.less';

Vue.use(Swipe).use(SwipeItem).use(Lazyload);



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
