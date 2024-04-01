import { createWebHistory, createRouter } from 'vue-router'

import ServiceList from './components/ServiceList/ServiceList.vue';
import ServiceFullInfo from './components/ServiceFullInfo.vue';
 
const routes = [
    { path: '/', component: ServiceList },
    {
        name: 'service',
        path: '/service/:code',
        component: ServiceFullInfo,
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;