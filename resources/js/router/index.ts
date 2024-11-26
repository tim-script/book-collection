import { createRouter, createWebHistory } from 'vue-router'
import AuthorCreate from '../domains/books/pages/AuthorCreate.vue'
import AuthorDelete from '../domains/books/pages/AuthorDelete.vue'
import AuthorEdit from '../domains/books/pages/AuthorEdit.vue'
import AuthorOverview from '../domains/books/pages/AuthorOverview.vue'
import AuthorShow from '../domains/books/pages/AuthorShow.vue'
import BookCreate from '../domains/books/pages/BookCreate.vue'
import BookDelete from '../domains/books/pages/BookDelete.vue'
import BookEdit from '../domains/books/pages/BookEdit.vue'
import BookOverview from '../domains/books/pages/BookOverview.vue'
import BookShow from '../domains/books/pages/BookShow.vue'

const routes = [
    {name: 'overview',        path: '/',                   component: BookOverview},

    {name: 'author-overview', path: '/authors',            component: AuthorOverview},
    {name: 'author-create',   path: '/authors/create',     component: AuthorCreate},
    {name: 'author-show',     path: '/authors/:id',        component: AuthorShow},
    {name: 'author-edit',     path: '/authors/edit/:id',   component: AuthorEdit},
    {name: 'author-delete',   path: '/authors/delete/:id', component: AuthorDelete},

    {name: 'book-create',     path: '/books/create',       component: BookCreate},
    {name: 'book-show',       path: '/books/:id',          component: BookShow},
    {name: 'book-edit',       path: '/books/edit/:id',     component: BookEdit},
    {name: 'book-delete',     path: '/books/delete/:id',   component: BookDelete},
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
