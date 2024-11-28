<script setup>
    import { ref } from 'vue'
    import { useRoute } from 'vue-router'
    import { fetchBooks, getAllBooks } from '../../books/store'
    import { fetchAuthors, getAuthorById } from '../store'

    const route = useRoute()

    const author = ref([])
    const books = ref([])

    Promise.all([fetchAuthors(), fetchBooks()])
        .then(() => {
            author.value = getAuthorById(route.params.id).value
            books.value = getAllBooks()
                .filter(book => book.author_id == route.params.id)
                .sort((book1, book2) => book1.title.localeCompare(book2.title))
        })
        .catch(console.error)
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
