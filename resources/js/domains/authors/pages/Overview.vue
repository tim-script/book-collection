<script setup lang="ts">
    import { createRouteLocation } from '../../../services/router'
    import { fetchAuthors, getAllAuthorsSorted } from '../store'

    fetchAuthors()

    const authors = getAllAuthorsSorted()
</script>

<template>
    <table>
        <tbody>
            <tr v-for="author in authors">
                <td><RouterLink :to="createRouteLocation('author-show', author.id)">{{author.name}}</RouterLink></td>
                <td><RouterLink :to="createRouteLocation('author-edit', author.id)">Bewerken</RouterLink></td>
                <td><RouterLink :to="createRouteLocation('author-delete', author.id)">Verwijderen</RouterLink></td>
            </tr>
        </tbody>
    </table>
</template>
