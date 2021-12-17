import Vue from 'vue'
import VueRouter from 'vue-router'
import FrtRoutes from '../FrontRoutes'

Vue.use(VueRouter)

const router = new VueRouter({
  // frtroutes: FrtRoutes
routes: FrtRoutes,
mode: 'history'
})


export default router
