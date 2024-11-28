<script setup>
    import { useRoute, useRouter } from 'vue-router'
    import { deleteAuthor } from '../store'

    const route = useRoute()
    const router = useRouter()

    deleteAuthor(route.params.id)
        .then(() => { router.push({name: 'author-overview'}) })
        .catch(error => { console.error('deleteAuthor:', error) })
</script>

<template></template>
