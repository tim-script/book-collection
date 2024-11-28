<script setup>
    import { useRoute, useRouter } from 'vue-router'
    import { deleteBook } from '../store'

    const route = useRoute()
    const router = useRouter()

    const deleteBookInStore = async () => {
        await deleteBook(route.params.id)
        router.push({name: 'overview'})
    }

    // XXX
    deleteBookInStore()
</script>

<template></template>
