<script setup>
    import { useRouter } from 'vue-router'
    import Form from '../components/Form.vue'
    import { createBook } from '../store'

    const router = useRouter()

    const book = {author_id: 0}

    const createBookInStore = async () => {
        await createBook(book)
        router.push({name: 'overview'})
    }
</script>

<template>
    <Form :book="book" @submit="createBookInStore" />
</template>
