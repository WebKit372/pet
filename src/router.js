import { createWebHistory, createRouter } from 'vue-router'

import ServiceList from './components/ServiceList/ServiceList.vue';
import ServiceFullInfo from './components/ServiceFullInfo.vue';
 
const routes = [
    { path: '/1', component: ServiceList },
    { path: '/test', component: ServiceFullInfo}
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;