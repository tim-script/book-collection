<script setup>
    import { ref } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import Form from '../components/Form.vue'
    import { fetchAuthors, getAuthorById, updateAuthor } from '../store'

    const route = useRoute()
    const router = useRouter()

    const authors = ref([])
    const author = ref({})

    fetchAuthors()
        .then(() => { author.value = {...getAuthorById(route.params.id).value} })
        .catch(error => { console.error('fetchAuthors:', error) })

    const updateAuthorInStore = () => {
        updateAuthor(author.value)
            .then(() => { router.push({name: 'author-overview'}) })
            .catch(error => { console.error('updateAuthor:', error) })
    }
</script>

<template>
    <Form :author="author" @submit="updateAuthorInStore" />
</template>
