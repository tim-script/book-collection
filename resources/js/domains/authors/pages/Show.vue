<script setup lang="ts">
    import { computed } from 'vue'
    import { createRouteLocation, getRouteParam } from '../../../services/router'
    import { Book, fetchBooks, getBooksByAuthorId } from '../../books/store'
    import { Author, fetchAuthors, getAuthorById } from '../store'

    fetchAuthors()
    fetchBooks()

    // XXX We can't call getRouteParam() in the computed() function below. See
    // https://router.vuejs.org/guide/advanced/composition-api#Accessing-the-Router-and-current-Route-inside-setup
    const authorId = Number(getRouteParam('id'))

    const author = computed<Author>(() =>
        // XXX getAuthorById() returns undefined if fetchAuthors() has not yet
        // finished. In that case, return an empty object so that using
        // "{{author.name}}" in the template does not cause an error:
        //
        // Uncaught (in promise) TypeError: $setup.author is undefined
        getAuthorById(authorId).value || <Author>{})

    const books = computed<Book[]>(() =>
        getBooksByAuthorId(author.value.id)
            .value
            .sort((book1, book2) => book1.title.localeCompare(book2.title)))
</script>

<template>
    <h2>{{author.name}}</h2>

    <nav>
        <ul>
            <li><RouterLink :to="createRouteLocation('author-edit', author.id)">Bewerken</RouterLink></li>
            <li><RouterLink :to="createRouteLocation('author-delete', author.id)">Verwijderen</RouterLink></li>
        </ul>
    </nav>

    <table>
        <tbody>
            <tr v-for="book in books">
                <td><RouterLink :to="createRouteLocation('book-show', book.id)">{{book.title}}</RouterLink></td>
                <td><RouterLink :to="createRouteLocation('book-edit', book.id)">Bewerken</RouterLink></td>
                <td><RouterLink :to="createRouteLocation('book-delete', book.id)">Verwijderen</RouterLink></td>
            </tr>
        </tbody>
    </table>
</template>
