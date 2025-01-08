import { createMemoryHistory, createRouter } from 'vue-router'
import MainView from '@/views/MainView.vue'


const routes = [
    {
        path : '/',
        name:'main',
        component:MainView
    },
    {
        path : '/post-form',
        name:'form',
        component:()=> import('@/views/FormView.vue')
    }

]


const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router