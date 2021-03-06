import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
// import 'node_modules\bootstrap\dist\css\bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import router from './router'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
