import { computed, ref } from 'vue'

const authors = ref([])

export const fetchAuthors = async () => {
    const {data} = await axios.get('/api/authors')
    if (!data)
        return
    authors.value = data
}

export const getAllAuthors = () => authors.value

export const getAllAuthorsSorted = () =>
    authors.value.toSorted((a, b) => a.name.localeCompare(b.name))

export const getAuthorById = (id) =>
    computed(() => authors.value.find(author => author.id == id))

export const createAuthor = async (author) => {
    await axios.post('/api/authors', author)
}

export const updateAuthor = async (author) => {
    await axios.patch('/api/authors/' + author.id, author)
}

export const deleteAuthor = async (id) => {
    await axios.delete('/api/authors/' + id)
}
