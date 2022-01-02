import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import { Button } from 'element-ui';
import 'vant/lib/button/style';
import { Lazyload } from 'vant';

Vue.use(Lazyload);
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);


Vue.use(Vuex)
Vue.config.productionTip = false
Vue.component(Button.name, Button);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

window.localStorage.setItem('shuaxin', '1')
