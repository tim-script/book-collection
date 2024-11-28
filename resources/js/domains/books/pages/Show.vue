<script setup>
    import { computed } from 'vue'
    import { useRoute } from 'vue-router'
    import { fetchAuthors, getAuthorById } from '../../authors/store'
    import { fetchBooks, getBookById } from '../store'

    const route = useRoute()

    fetchAuthors()
    fetchBooks()

    // XXX See comment in authors/pages/Show.vue
    const book = computed(() => getBookById(route.params.id).value || {})
    const author = computed(() => getAuthorById(book.value.author_id).value || {})
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
