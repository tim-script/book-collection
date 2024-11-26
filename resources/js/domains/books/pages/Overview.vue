<script setup>
    import { ref } from 'vue'
    import { fetchAuthors, fetchBooks, getAllAuthors, getAllBooks } from '../store'

    const authors = ref([])
    const books = ref([])

    const getAuthorNameById = id => authors.value.find(author => author.id === id).name

    Promise.all([fetchAuthors(), fetchBooks()])
        .then(() => {
            authors.value = getAllAuthors()
            books.value = getAllBooks().toSorted((book1, book2) => {
                if (book1.author_id != book2.author_id) {
                    const author1 = getAuthorNameById(book1.author_id)
                    const author2 = getAuthorNameById(book2.author_id)
                    return author1.localeCompare(author2)
                }
                return book1.title.localeCompare(book2.title)
            })
        })
        .catch(console.error)
</script>

<template>
    <table>
        <tbody>
            <tr v-for="book in books">
                <td>{{getAuthorNameById(book.author_id)}}</td>
                <td>{{book.title}}</td>
                <td><RouterLink :to="{name: 'edit', params: {id: book.id}}">Bewerken</RouterLink></td>
                <td><RouterLink :to="{name: 'delete', params: {id: book.id}}">Verwijderen</RouterLink></td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
    table {
        border-collapse: collapse;
    }
    td {
        border: 1px solid #ccc;
        padding: .25rem;
    }
</style>
