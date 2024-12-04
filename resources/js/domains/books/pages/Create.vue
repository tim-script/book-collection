<script setup lang="ts">
    import { goToRoute } from '../../../services/router'
    import Form from '../components/Form.vue'
    import { Book, createBook } from '../store'

    const book = <Book>{author_id: 0}

    const createBookInStore = async (): Promise<void> => {
        await createBook(book)
        goToRoute('overview')
    }
</script>

<template>
    <Form :book="book" @submit="createBookInStore" />
</template>
