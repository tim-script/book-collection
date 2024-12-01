<script setup lang="ts">
    import { Author } from '../store'

    const props = defineProps<{author: Author}>()
    const emit = defineEmits<{submit: []}>()
</script>

<template>
    <div class="form">
        <div>
            <label for="name">Auteur:</label>
            <input id="name" name="name" type="text" v-model="author.name" required />
        </div>
        <div>
            <button @click="$emit('submit')">Toevoegen</button>
        </div>
    </div>
</template>
