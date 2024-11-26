<script setup>
    import { ref } from 'vue'
    import { fetchAuthors, getAllAuthorsSorted } from '../store'

    const authors = ref([])

    fetchAuthors()
        .then(() => { authors.value = getAllAuthorsSorted() })
        .catch(error => { console.error('fetchAuthors:', error) })
</script>

<template>
    <table>
        <tbody>
            <tr v-for="author in authors">
                <td>{{author.name}}</td>
                <td><RouterLink :to="{name: 'author-edit', params: {id: author.id}}">Bewerken</RouterLink></td>
                <td><RouterLink :to="{name: 'author-delete', params: {id: author.id}}">Verwijderen</RouterLink></td>
            </tr>
        </tbody>
    </table>
</template>
