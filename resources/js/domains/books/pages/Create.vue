<script setup>
    import { useRouter } from 'vue-router'
    import BookForm from '../components/BookForm.vue'
    import { createBook } from '../store'

    const router = useRouter()

    const book = {author_id: 0, title: ''}

    const createBookInStore = () => {
        createBook(book)
            .then(() => { router.push({name: 'overview'}) })
            .catch(error => { console.error('createBook:', error) })
    }
</script>

<template>
    <BookForm :book="book" @submit="createBookInStore" />
</template>
