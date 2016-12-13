import Vue from 'vue'
import App from './App.vue'
import Filev from './fileViewer.vue'
import Router from 'vue-router'

Vue.use(Router)
const router=new Router(
  {
    routes: [
      { path: '/:career/:courseCode', component: Filev  }]
  }
);

new Vue({
  router
}).$mount('#app');
console.log("running");
