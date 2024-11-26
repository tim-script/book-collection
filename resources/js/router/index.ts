import { createRouter, createWebHistory } from 'vue-router'
import BookCreate from '../domains/books/pages/BookCreate.vue'
import BookDelete from '../domains/books/pages/BookDelete.vue'
import BookEdit from '../domains/books/pages/BookEdit.vue'
import BookOverview from '../domains/books/pages/BookOverview.vue'

const routes = [
    {name: 'overview',    path: '/',                 component: BookOverview},
    {name: 'book-create', path: '/books/create',     component: BookCreate},
    {name: 'book-edit',   path: '/books/edit/:id',   component: BookEdit},
    {name: 'book-delete', path: '/books/delete/:id', component: BookDelete},
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
