import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home"
import Create from "@/views/Create"
import DeleteCD from "@/views/DeleteCD"
import ShowAll from "@/views/ShowAll"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/deleteCD',
    name: 'DeleteCD',
    component: DeleteCD
  },
  {
    path: '/all_info',
    name: 'AllInf',
    component: ShowAll
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
