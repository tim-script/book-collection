<script setup lang="ts">
    import { computed } from 'vue'
    import { getRouteParam, goToRoute } from '../../../services/router'
    import Form from '../components/Form.vue'
    import { Author, fetchAuthors, getAuthorById, updateAuthor } from '../store'

    fetchAuthors()

    // XXX We can't call getRouteParam() in the computed() function below. See
    // https://router.vuejs.org/guide/advanced/composition-api#Accessing-the-Router-and-current-Route-inside-setup
    const authorId = Number(getRouteParam('id'))

    const author = computed<Author>(() => {
        // XXX See comment in Show.vue
        const authorFromStore = getAuthorById(authorId).value
        return authorFromStore ? {...authorFromStore} : <Author>{}
    })

    const updateAuthorInStore = async (): Promise<void> => {
        await updateAuthor(author.value)
        goToRoute('author-overview')
    }
</script>

<template>
    <Form :author="author" @submit="updateAuthorInStore" />
</template>
