<script setup>
    import { computed } from 'vue'
    import { fetchAuthors, getAllAuthors, getAuthorById } from '../../authors/store'
    import { fetchBooks, getAllBooks } from '../store'

    const getAuthorNameById = (id) => computed(() => {
        // XXX See comment in authors/pages/Show.vue
        const author = getAuthorById(id).value
        return author ? author.name : ''
    })

    fetchAuthors()
    fetchBooks()

    const authors = getAllAuthors()

    const books = computed(() =>
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
                <td><RouterLink :to="{name: 'author-show', params: {id: book.author_id}}">{{getAuthorNameById(book.author_id)}}</RouterLink></td>
                <td><RouterLink :to="{name: 'book-show', params: {id: book.id}}">{{book.title}}</RouterLink></td>
                <td><RouterLink :to="{name: 'book-edit', params: {id: book.id}}">Bewerken</RouterLink></td>
                <td><RouterLink :to="{name: 'book-delete', params: {id: book.id}}">Verwijderen</RouterLink></td>
            </tr>
        </tbody>
    </table>
</template>
