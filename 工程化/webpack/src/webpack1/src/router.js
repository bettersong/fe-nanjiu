import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: () => import('./pages/index.vue') },
        { path: '/about', component: () => import('./pages/about.vue') },
    ]
})