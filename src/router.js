import Vue from 'vue'
import VueRouter from 'vue-router'
import About from './components/About.vue';
import Success from './components/Success.vue';
import Login from './components/Login.vue';
import Base from './components/Base/Base.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/success', component: Success },
  { path: '/about', component: About },
  { path: '/login', component: Login },
  { path: '/', component: Base }
]
const router = new VueRouter({
  routes
});

export default router;