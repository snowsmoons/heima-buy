import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';
import './assets/statics/site/css/style.css';

Vue.config.productionTip = false

import index from './components/index.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes:[
      { path: '/', component: index },
      { path: '/index', component: index }
    ]
})

new Vue({
  el:'#app',
  router,
  render: h => h(App)
})
