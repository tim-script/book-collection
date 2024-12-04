import { addRoutes, createRoute } from '../services/router'

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

// app.ts needs access to router
export { router } from '../services/router'

addRoutes([
    createRoute('overview',        '/',                   BookOverview),

    createRoute('author-overview', '/authors',            AuthorOverview),
    createRoute('author-create',   '/authors/create',     AuthorCreate),
    createRoute('author-show',     '/authors/:id',        AuthorShow),
    createRoute('author-edit',     '/authors/edit/:id',   AuthorEdit),
    createRoute('author-delete',   '/authors/delete/:id', AuthorDelete),

    createRoute('book-create',     '/books/create',       BookCreate),
    createRoute('book-show',       '/books/:id',          BookShow),
    createRoute('book-edit',       '/books/edit/:id',     BookEdit),
    createRoute('book-delete',     '/books/delete/:id',   BookDelete),
])
