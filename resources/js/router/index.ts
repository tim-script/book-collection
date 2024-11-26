import { createRouter, createWebHistory } from 'vue-router'
import Create from '../domains/books/pages/Create.vue'
import Delete from '../domains/books/pages/Delete.vue'
import Edit from '../domains/books/pages/Edit.vue'
import Overview from '../domains/books/pages/Overview.vue'

const routes = [
    {name: 'overview', path: '/', component: Overview},
    {name: 'create', path: '/create', component: Create},
    {name: 'edit', path: '/edit/:id', component: Edit},
    {name: 'delete', path: '/delete/:id', component: Delete},
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
