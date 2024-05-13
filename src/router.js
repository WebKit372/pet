import { createWebHistory, createRouter } from 'vue-router'
import History from './components/HistoryElement.vue'
import ServiceList from './components/ServiceList/ServiceListComponent.vue';
import ServiceFullInfo from './components/ServiceFullInfoComponent.vue';
 
const routes = [
    { path: '/', component: ServiceList },
    {
        name: 'service',
        path: '/service/:code',
        component: ServiceFullInfo,
    },
    { 
        path: '/history',
        component: History
    }   
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;