<script setup>
    import { computed } from 'vue'
    import { fetchBooks, getAllBooks } from '../store'

    fetchBooks()

    const books = computed(() => getAllBooks())
</script>

<template>
    <ul>
        <li v-for="book in books.data">{{book}}</li>
    </ul>
</template>
