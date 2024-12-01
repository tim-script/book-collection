<script setup lang="ts">
    import { ref } from 'vue'
    import { Author, fetchAuthors, getAllAuthorsSorted } from '../../authors/store'
    import { Book } from '../store'

    const props = defineProps<{book: Book}>()
    const emit = defineEmits<{submit: []}>()

    const authors = ref(<Author[]>[])

    const fetchAuthorsAndSetDefaultAuthorId = async (): Promise<void> => {
        await fetchAuthors()
        authors.value = getAllAuthorsSorted().value
        if (props.book.author_id == 0 && authors.value.length > 0)
            props.book.author_id = authors.value[0].id
    }

    // XXX
    fetchAuthorsAndSetDefaultAuthorId()
</script>

<template>
    <div class="form">
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
            <label for="review">Recensie:</label>
            <textarea id="review" name="review" cols="50" rows="10" v-model="book.review"></textarea>
        </div>
        <div>
            <button @click="$emit('submit')">Toevoegen</button>
        </div>
    </div>
</template>
