<script setup>
    import { computed } from 'vue'
    import { useRoute } from 'vue-router'
    import { fetchBooks, getBooksByAuthorId } from '../../books/store'
    import { fetchAuthors, getAuthorById } from '../store'

    const route = useRoute()

    fetchAuthors()
    fetchBooks()

    const author = computed(() =>
        // XXX getAuthorById() returns undefined if fetchAuthors() has not yet
        // finished. In that case, return an empty object so that using
        // "{{author.name}}" in the template does not cause an error:
        //
        // Uncaught (in promise) TypeError: $setup.author is undefined
        getAuthorById(route.params.id).value || {})

    const books = computed(() =>
        getBooksByAuthorId(author.value.id)
            .value
            .sort((book1, book2) => book1.title.localeCompare(book2.title)))
</script>

<template>
    <h2>{{author.name}}</h2>

    <nav>
        <ul>
            <li><RouterLink :to="{name: 'author-edit', params: {id: route.params.id}}">Bewerken</RouterLink></li>
            <li><RouterLink :to="{name: 'author-delete', params: {id: route.params.id}}">Verwijderen</RouterLink></li>
        </ul>
    </nav>

    <table>
        <tbody>
            <tr v-for="book in books">
                <td><RouterLink :to="{name: 'book-show', params: {id: book.id}}">{{book.title}}</RouterLink></td>
                <td><RouterLink :to="{name: 'book-edit', params: {id: book.id}}">Bewerken</RouterLink></td>
                <td><RouterLink :to="{name: 'book-delete', params: {id: book.id}}">Verwijderen</RouterLink></td>
            </tr>
        </tbody>
    </table>
</template>
