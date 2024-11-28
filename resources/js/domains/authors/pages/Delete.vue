<script setup>
    import { useRoute, useRouter } from 'vue-router'
    import { deleteAuthor } from '../store'

    const route = useRoute()
    const router = useRouter()

    const deleteAuthorInStore = async () => {
        await deleteAuthor(route.params.id)
        router.push({name: 'author-overview'})
    }

    // XXX
    deleteAuthorInStore()
</script>

<template></template>
