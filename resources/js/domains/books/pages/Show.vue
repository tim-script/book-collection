<script setup lang="ts">
    import { computed } from 'vue'
    import { createRouteLocation, getRouteParam } from '../../../services/router'
    import { Author, fetchAuthors, getAuthorById } from '../../authors/store'
    import { Book, fetchBooks, getBookById } from '../store'

    fetchAuthors()
    fetchBooks()

    // XXX We can't call getRouteParam() in the computed() function below. See
    // https://router.vuejs.org/guide/advanced/composition-api#Accessing-the-Router-and-current-Route-inside-setup
    const bookId = Number(getRouteParam('id'))

    // XXX See comment in authors/pages/Show.vue
    const book = computed<Book>(() => getBookById(bookId).value || <Book>{})
    const author = computed<Author>(() => getAuthorById(book.value.author_id).value || <Author>{})
</script>

<template>
    <nav>
        <ul>
            <li><RouterLink :to="createRouteLocation('book-edit', book.id)">Boek bewerken</RouterLink></li>
            <li><RouterLink :to="createRouteLocation('book-delete', book.id)">Boek verwijderen</RouterLink></li>
        </ul>
    </nav>

    <dl>
        <dt>Auteur</dt>
        <dd><RouterLink :to="createRouteLocation('author-show', author.id)">{{author.name}}</RouterLink></dd>

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
