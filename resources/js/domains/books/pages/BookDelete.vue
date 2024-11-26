<script setup>
    import { useRoute, useRouter } from 'vue-router'
    import { deleteBook } from '../store'

    const route = useRoute()
    const router = useRouter()

    deleteBook(route.params.id)
        .then(() => { router.push({name: 'overview'}) })
        .catch(error => { console.error('deleteBook:', error) })
</script>

<template></template>
