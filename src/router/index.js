import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Registrar from '../views/Registrar.vue'
import Tarefas from '../views/Tarefas.vue'
import Completas from '../views/Completas.vue'
import Pendentes from '../views/Pendentes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/registrar',
    name: 'Registrar',
    component: Registrar
  },
  {
    path: '/tarefas',
    name: 'Tarefas',
    component: Tarefas,
    children : [
      {
        path: "/tarefas",
        name: "Tarefas",
        component: Pendentes
      },
      {
        path: "/completas",
        name: "Completas",
        component: Completas
      }
    ]

    
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
