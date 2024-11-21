<script setup>
    import { computed } from 'vue'
    import { fetchAuthors, fetchBooks, getAllAuthors, getAllBooks } from '../store'

    fetchAuthors()
    fetchBooks()

    const authors = computed(() => getAllAuthors())
    const books = computed(() => getAllBooks())
</script>

<template>
    <ul>
        <li v-for="author in authors">{{author}}</li>
    </ul>
    <ul>
        <li v-for="book in books">{{book}}</li>
    </ul>
</template>
