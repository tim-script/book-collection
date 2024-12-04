<script setup lang="ts">
    import { getRouteParam, goToRoute } from '../../../services/router'
    import { deleteAuthor } from '../store'

    const deleteAuthorInStore = async (): Promise<void> => {
        await deleteAuthor(Number(getRouteParam('id')))
        goToRoute('author-overview')
    }

    // XXX
    deleteAuthorInStore()
</script>

<template></template>
