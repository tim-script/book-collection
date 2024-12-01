<script setup lang="ts">
    import { useRoute, useRouter } from 'vue-router'
    import { deleteBook } from '../store'

    const route = useRoute()
    const router = useRouter()

    const deleteBookInStore = async (): Promise<void> => {
        await deleteBook(Number(route.params.id))
        router.push({name: 'overview'})
    }

    // XXX
    deleteBookInStore()
</script>

<template></template>
