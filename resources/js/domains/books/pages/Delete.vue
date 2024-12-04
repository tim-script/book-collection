<script setup lang="ts">
    import { getRouteParam, goToRoute } from '../../../services/router'
    import { deleteBook } from '../store'

    const deleteBookInStore = async (): Promise<void> => {
        await deleteBook(Number(getRouteParam('id')))
        goToRoute('overview')
    }

    // XXX
    deleteBookInStore()
</script>

<template></template>
