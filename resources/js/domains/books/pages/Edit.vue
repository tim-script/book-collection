<script setup>
    import { computed } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import Form from '../components/Form.vue'
    import { fetchBooks, getBookById, updateBook } from '../store'

    const route = useRoute()
    const router = useRouter()

    fetchBooks()

    const book = computed(() => {
        // XXX See comment in authors/pages/Show.vue
        const bookFromStore = getBookById(route.params.id).value
        return bookFromStore ? {...bookFromStore} : {}
    })

    const updateBookInStore = async () => {
        await updateBook(book.value)
        router.push({name: 'book-show', params: {id: book.value.id}})
    }
</script>

<template>
    <Form :book="book" @submit="updateBookInStore" />
</template>
