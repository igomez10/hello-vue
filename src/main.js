import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import FileViewer from './file-viewer.vue'

Vue.use(VueRouter);

const router = new VueRouter(
  {
    routes: [
      { path: '/:career/:courseCode', component: FileViewer  }
    ]
  }
);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
