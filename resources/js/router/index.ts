import { createRouter, createWebHistory } from 'vue-router'
import Create from '../domains/books/pages/Create.vue'
import Overview from '../domains/books/pages/Overview.vue'

const routes = [
    {name: 'overview', path: '/', component: Overview},
    {name: 'create', path: '/create', component: Create},
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
