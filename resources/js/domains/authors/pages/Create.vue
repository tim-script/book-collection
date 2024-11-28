<script setup>
    import { useRouter } from 'vue-router'
    import AuthorForm from '../components/AuthorForm.vue'
    import { createAuthor } from '../store'

    const router = useRouter()

    const author = {name: ''}

    const createAuthorInStore = () => {
        createAuthor(author)
            .then(() => { router.push({name: 'author-overview'}) })
            .catch(error => { console.error('createAuthor:', error) })
    }
</script>

<template>
    <AuthorForm :author="author" @submit="createAuthorInStore" />
</template>
