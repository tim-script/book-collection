<script setup>
    import { ref } from 'vue'
    import { fetchAuthors, fetchBooks, getAllAuthors, getAllBooks } from '../store'

    const authors = ref([])
    const books = ref([])

    Promise.all([fetchAuthors(), fetchBooks()])
        .then(() => {
            authors.value = getAllAuthors()
            books.value = getAllBooks()
        })
        .catch(console.error)
</script>

<template>
    <ul>
        <li v-for="book in books">
            {{authors.find(author => author.id === book.author_id).name}}:
            <em>{{book.title}}</em>
        </li>
    </ul>
</template>
