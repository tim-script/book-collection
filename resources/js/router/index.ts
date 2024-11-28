import { createRouter, createWebHistory } from 'vue-router'

import AuthorCreate   from '../domains/authors/pages/Create.vue'
import AuthorDelete   from '../domains/authors/pages/Delete.vue'
import AuthorEdit     from '../domains/authors/pages/Edit.vue'
import AuthorOverview from '../domains/authors/pages/Overview.vue'
import AuthorShow     from '../domains/authors/pages/Show.vue'

import BookCreate   from '../domains/books/pages/Create.vue'
import BookDelete   from '../domains/books/pages/Delete.vue'
import BookEdit     from '../domains/books/pages/Edit.vue'
import BookOverview from '../domains/books/pages/Overview.vue'
import BookShow     from '../domains/books/pages/Show.vue'

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
