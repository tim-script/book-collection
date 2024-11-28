<script setup>
    import { computed } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import Form from '../components/Form.vue'
    import { fetchAuthors, getAuthorById, updateAuthor } from '../store'

    const route = useRoute()
    const router = useRouter()

    fetchAuthors()

    const author = computed(() => {
        // XXX See comment in Show.vue
        const authorFromStore = getAuthorById(route.params.id).value
        return authorFromStore ? {...authorFromStore} : {}
    })

    const updateAuthorInStore = async () => {
        await updateAuthor(author.value)
        router.push({name: 'author-overview'})
    }
</script>

<template>
    <Form :author="author" @submit="updateAuthorInStore" />
</template>
