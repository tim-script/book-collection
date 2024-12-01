<script setup lang="ts">
    import { computed } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import Form from '../components/Form.vue'
    import { Author, fetchAuthors, getAuthorById, updateAuthor } from '../store'

    const route = useRoute()
    const router = useRouter()

    fetchAuthors()

    const author = computed<Author>(() => {
        // XXX See comment in Show.vue
        const authorFromStore = getAuthorById(Number(route.params.id)).value
        return authorFromStore ? {...authorFromStore} : <Author>{}
    })

    const updateAuthorInStore = async (): Promise<void> => {
        await updateAuthor(author.value)
        router.push({name: 'author-overview'})
    }
</script>

<template>
    <Form :author="author" @submit="updateAuthorInStore" />
</template>
