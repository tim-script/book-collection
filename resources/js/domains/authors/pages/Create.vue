<script setup lang="ts">
    import { useRouter } from 'vue-router'
    import Form from '../components/Form.vue'
    import { Author, createAuthor } from '../store'

    const router = useRouter()

    const author = <Author>{}

    const createAuthorInStore = async (): Promise<void> => {
        await createAuthor(author)
        router.push({name: 'author-overview'})
    }
</script>

<template>
    <Form :author="author" @submit="createAuthorInStore" />
</template>
