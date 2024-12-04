<script setup lang="ts">
    import { computed } from 'vue'
    import { getRouteParam, goToRoute } from '../../../services/router'
    import Form from '../components/Form.vue'
    import { Book, fetchBooks, getBookById, updateBook } from '../store'

    fetchBooks()

    // XXX We can't call getRouteParam() in the computed() function below. See
    // https://router.vuejs.org/guide/advanced/composition-api#Accessing-the-Router-and-current-Route-inside-setup
    const bookId = Number(getRouteParam('id'))

    const book = computed<Book>(() => {
        // XXX See comment in authors/pages/Show.vue
        const bookFromStore = getBookById(bookId).value
        return bookFromStore ? {...bookFromStore} : <Book>{}
    })

    const updateBookInStore = async (): Promise<void> => {
        await updateBook(book.value)
        goToRoute('book-show', book.value.id)
    }
</script>

<template>
    <Form :book="book" @submit="updateBookInStore" />
</template>
