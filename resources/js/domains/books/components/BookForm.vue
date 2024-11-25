<script setup>
    import { ref } from 'vue'
    import { fetchAuthors, getAllAuthors } from '../store'

    const props = defineProps(['book'])
    const emit = defineEmits(['submit'])

    const authors = ref([])

    fetchAuthors()
        .then(() => {
            authors.value = getAllAuthors().toSorted((a, b) => a.name.localeCompare(b.name))

            if (props.book.author_id == 0 && authors.value.length > 0)
                props.book.author_id = authors.value[0].id
        })
        .catch(error => { console.error('fetchAuthors:', error) })
</script>

<template>
    <div>
        <label for="author">Auteur:</label>
        <select id="author" name="author" v-model="book.author_id">
            <option v-for="author in authors" :value="author.id">{{author.name}}</option>
        </select>
    </div>
    <div>
        <label for="title">Titel:</label>
        <input id="title=" name="title" type="text" v-model="book.title" required />
    </div>
    <div>
        <button @click="$emit('submit')">Toevoegen</button>
    </div>
</template>

<style scoped>
    div + div {
        margin-top: 1rem;
    }
    label {
        display: block;
        margin-bottom: .25rem;
    }
</style>
