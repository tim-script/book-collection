<script setup lang="ts">
    import { computed } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import Form from '../components/Form.vue'
    import { Book, fetchBooks, getBookById, updateBook } from '../store'

    const route = useRoute()
    const router = useRouter()

    fetchBooks()

    const book = computed<Book>(() => {
        // XXX See comment in authors/pages/Show.vue
        const bookFromStore = getBookById(Number(route.params.id)).value
        return bookFromStore ? {...bookFromStore} : <Book>{}
    })

    const updateBookInStore = async (): Promise<void> => {
        await updateBook(book.value)
        router.push({name: 'book-show', params: {id: book.value.id}})
    }
</script>

<template>
    <Form :book="book" @submit="updateBookInStore" />
</template>
