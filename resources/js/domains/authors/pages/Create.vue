<script setup lang="ts">
    import { goToRoute } from '../../../services/router'
    import Form from '../components/Form.vue'
    import { Author, createAuthor } from '../store'

    const author = <Author>{}

    const createAuthorInStore = async (): Promise<void> => {
        // XXX Check that createAuthors() updates the author state
        const { fetchAuthors, getAllAuthors } = await import('../store')
        await fetchAuthors()
        const authors = getAllAuthors()
        console.debug('createAuthorInStore: before:', authors.value)

        await createAuthor(author)

        // XXX Check that createAuthors() updates the author state
        console.debug('createAuthorInStore: after:', authors.value)

        goToRoute('author-overview')
    }
</script>

<template>
    <Form :author="author" @submit="createAuthorInStore" />
</template>
