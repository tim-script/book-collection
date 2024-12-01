<script setup lang="ts">
    import { useRouter } from 'vue-router'
    import Form from '../components/Form.vue'
    import { createAuthor } from '../store'

    const router = useRouter()

    const author = {}

    const createAuthorInStore = async () => {
        await createAuthor(author)
        router.push({name: 'author-overview'})
    }
</script>

<template>
    <Form :author="author" @submit="createAuthorInStore" />
</template>
