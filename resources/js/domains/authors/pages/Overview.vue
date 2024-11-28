<script setup>
    import { fetchAuthors, getAllAuthorsSorted } from '../store'

    fetchAuthors()

    const authors = getAllAuthorsSorted()
</script>

<template>
    <table>
        <tbody>
            <tr v-for="author in authors">
                <td><RouterLink :to="{name: 'author-show', params: {id: author.id}}">{{author.name}}</RouterLink></td>
                <td><RouterLink :to="{name: 'author-edit', params: {id: author.id}}">Bewerken</RouterLink></td>
                <td><RouterLink :to="{name: 'author-delete', params: {id: author.id}}">Verwijderen</RouterLink></td>
            </tr>
        </tbody>
    </table>
</template>
