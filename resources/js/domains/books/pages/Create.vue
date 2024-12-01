<script setup lang="ts">
    import { useRouter } from 'vue-router'
    import Form from '../components/Form.vue'
    import { Book, createBook } from '../store'

    const router = useRouter()

    const book = <Book>{author_id: 0}

    const createBookInStore = async (): Promise<void> => {
        await createBook(book)
        router.push({name: 'overview'})
    }
</script>

<template>
    <Form :book="book" @submit="createBookInStore" />
</template>
