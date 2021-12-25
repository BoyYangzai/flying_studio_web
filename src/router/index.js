import Vue from 'vue'
import VueRouter from 'vue-router'
import shouye from '../views/shouye.vue'
import productinfo from '../views/productinfo.vue'
import aboutus from '../views/aboutus.vue'
import blog from '../views/blog.vue'
import starmembers from '../views/starmembers.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: productinfo

  },
  {
    path: '/shouye',
    name: 'shouye',
    component: shouye
  },
  {
    path: '/productinfo',
    name: 'porductinfo',
    component: productinfo
  },
  {
    path: '/aboutus',
    name: 'aboutus',
    component: aboutus
  },
  {
    path: '/blog',
    name: 'blog',
    component: blog
  }, {
    path: '/starmembers',
    name: 'starmembers',
    component: starmembers
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
