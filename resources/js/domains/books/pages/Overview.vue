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
        <li v-for="book in books">
            {{authors.find(author => author.id === book.author_id).name}}:
            <em>{{book.title}}</em>
        </li>
    </ul>
</template>
