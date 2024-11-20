import { createRouter, createWebHistory } from 'vue-router'
import Overview from '../domains/books/pages/Overview.vue'

const routes = [
    {name: 'overview', path: '/', component: Overview},
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
