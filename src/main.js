import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Filev from './fileViewer.vue'
Vue.use(Router)

const router=new Router(
  {
    routes: [{ path: '/:career/:courseCode', component: Filev  }]
  }
);

new Vue({
  el: '#app',
  render: h => h(App)
});
console.log("running");
