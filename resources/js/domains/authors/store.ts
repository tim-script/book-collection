import { computed, ref } from 'vue'

const authors = ref([])

export const fetchAuthors = async () => {
    try {
        const {data} = await axios.get('/api/authors')
        authors.value = data
    } catch (error) {
        console.error('fetchAuthors:', error)
    }
}

export const getAllAuthors = () => computed(() => authors.value)

export const getAllAuthorsSorted = () =>
    computed(() => authors.value.toSorted((a, b) => a.name.localeCompare(b.name)))

export const getAuthorById = (id) =>
    computed(() => authors.value.find(author => author.id == id))

export const createAuthor = async (author) => {
    try {
        await axios.post('/api/authors', author)
    } catch (error) {
        console.error('createAuthor:', error)
    }
}

export const updateAuthor = async (author) => {
    try {
        await axios.patch('/api/authors/' + author.id, author)
    } catch (error) {
        console.error('updateAuthor:', error)
    }
}

export const deleteAuthor = async (id) => {
    try {
        await axios.delete('/api/authors/' + id)
    } catch (error) {
        console.error('deleteAuthor:', error)
    }
}
