import Vue from 'vue'
import Router from 'vue-router'
import saludo from '@/components/paises/saludo.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'saludo',
      component: saludo
    }
  ]
})
