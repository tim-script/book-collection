<script setup lang="ts">
    import { useRoute, useRouter } from 'vue-router'
    import { deleteAuthor } from '../store'

    const route = useRoute()
    const router = useRouter()

    const deleteAuthorInStore = async (): Promise<void> => {
        await deleteAuthor(Number(route.params.id))
        router.push({name: 'author-overview'})
    }

    // XXX
    deleteAuthorInStore()
</script>

<template></template>
