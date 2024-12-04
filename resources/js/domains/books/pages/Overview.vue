<script setup lang="ts">
    import { ComputedRef, computed } from 'vue'
    import { createRouteLocation } from '../../../services/router'
    import { fetchAuthors, getAllAuthors, getAuthorById } from '../../authors/store'
    import { Book, fetchBooks, getAllBooks } from '../store'

    const getAuthorNameById = (id: number): ComputedRef<string> => computed(() => {
        // XXX See comment in authors/pages/Show.vue
        const author = getAuthorById(id).value
        return author ? author.name : ''
    })

    fetchAuthors()
    fetchBooks()

    const authors = getAllAuthors()

    const books = computed<Book[]>(() =>
        getAllBooks().value.toSorted((book1, book2) => {
            if (book1.author_id != book2.author_id) {
                const author1 = getAuthorNameById(book1.author_id).value
                const author2 = getAuthorNameById(book2.author_id).value
                return author1.localeCompare(author2)
            }
            return book1.title.localeCompare(book2.title)
        }))
</script>

<template>
    <table>
        <tbody>
            <tr v-for="book in books">
                <td><RouterLink :to="createRouteLocation('author-show', book.author_id)">{{getAuthorNameById(book.author_id)}}</RouterLink></td>
                <td><RouterLink :to="createRouteLocation('book-show', book.id)">{{book.title}}</RouterLink></td>
                <td><RouterLink :to="createRouteLocation('book-edit', book.id)">Bewerken</RouterLink></td>
                <td><RouterLink :to="createRouteLocation('book-delete', book.id)">Verwijderen</RouterLink></td>
            </tr>
        </tbody>
    </table>
</template>
