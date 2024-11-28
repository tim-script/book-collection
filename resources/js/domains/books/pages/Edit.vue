<script setup>
    import { ref } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import Form from '../components/Form.vue'
    import { fetchBooks, getBookById, updateBook } from '../store'

    const route = useRoute()
    const router = useRouter()

    const books = ref([])
    const book = ref({})

    fetchBooks()
        .then(() => { book.value = {...getBookById(route.params.id).value} })
        .catch(error => { console.error('fetchBooks:', error) })

    const updateBookInStore = () => {
        updateBook(book.value)
            .then(() => { router.push({name: 'book-show', params: {id: book.value.id}}) })
            .catch(error => { console.error('updateBook:', error) })
    }
</script>

<template>
    <Form :book="book" @submit="updateBookInStore" />
</template>
