import Vue from 'vue'
import VueRouter from 'vue-router'
import About from './components/About.vue';
import Success from './components/Success.vue';
import Login from './components/Login/Login.vue';
import Login1 from './components/Login/Login1.vue';
import Login2 from './components/Login/Login2.vue';
import Login3 from './components/Login/Login3.vue';
import Base from './components/Base/Base.vue';
import Demo3 from './components/Demo3.vue';
import Error from './components/404/404.vue';
import VuexDemo from './components/VuexDemo.vue';


Vue.use(VueRouter);

const routes = [
  { 
    path: '/success', 
    name: 'success',
    component: Success 
  },
  { 
    path: '/vuex', 
    name: 'vuexdemo',
    component: VuexDemo 
  },
  { 
    path: '/about', 
    name: 'about',
    component: About 
  },
  { 
    path: '/login', 
    name: 'login',
    component: Login,
    children: [
      { 
        path: '/login1', 
        name: 'login1', 
        components: {
          default: Login1,
          login2: Login2,
          login3: Login3
        } 
      },      
      { 
        path: '/login2/:id/:title', 
        name: 'login2',
        components: {
          default: Login2,
          login2: Login1,
          login3: Login3
        } 
      },      
      { 
        path: '/login3', 
        name: 'login3', 
        components: {
          default: Login3,
          login2: Login1,
          login3: Login2
        } 
      },      
    ]
  },
  { 
    path: '/', 
    name: '首页',
    component: Base
  },
  {
    path: '*',
    component: Error
  }
]
const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;