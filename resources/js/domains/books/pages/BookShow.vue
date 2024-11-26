<script setup>
    import { ref } from 'vue'
    import { useRoute } from 'vue-router'
    import { fetchAuthors, fetchBooks, getAuthorById, getBookById } from '../store'

    const route = useRoute()

    const books = ref([])
    const book = ref({})
    const author = ref({})

    Promise.all([fetchAuthors(), fetchBooks()])
        .then(() => {
            book.value = getBookById(route.params.id).value
            author.value = getAuthorById(book.value.author_id).value
        })
        .catch(console.error)
</script>

<template>
    <nav>
        <ul>
            <li><RouterLink :to="{name: 'book-edit', params: {id: book.id}}">Boek bewerken</RouterLink></li>
            <li><RouterLink :to="{name: 'book-delete', params: {id: book.id}}">Boek verwijderen</RouterLink></li>
        </ul>
    </nav>

    <dl>
        <dt>Auteur</dt>
        <dd><RouterLink :to="{name: 'author-show', params: {id: author.id}}">{{author.name}}</RouterLink></dd>

        <dt>Titel</dt>
        <dd>{{book.title}}</dd>

        <template v-if="book.review != null">
            <dt>Recensie</dt>
            <dd class="review">{{book.review}}</dd>
        </template>
    </dl>
</template>

<style scoped>
    .review {
        display: inline-block;
        white-space: pre-wrap;
    }
</style>
