import axios from 'axios'
import { ComputedRef, computed, ref } from 'vue'

export type Author = {
    id: number,
    name: string,
}

const authors = ref(<Author[]>[])

export const fetchAuthors = async (): Promise<void> => {
    try {
        const {data} = await axios.get('/api/authors')
        authors.value = data
    } catch (error) {
        console.error('fetchAuthors:', error)
    }
}

export const getAllAuthors = (): ComputedRef<Author[]> => computed(() => authors.value)

export const getAllAuthorsSorted = (): ComputedRef<Author[]> =>
    computed(() => authors.value.toSorted((a, b) => a.name.localeCompare(b.name)))

export const getAuthorById = (id: number): ComputedRef<Author | undefined> =>
    computed(() => authors.value.find(author => author.id == id))

export const createAuthor = async (author: Author): Promise<void> => {
    try {
        const {data} = await axios.post('/api/authors', author)
        authors.value = data
    } catch (error) {
        console.error('createAuthor:', error)
    }
}

export const updateAuthor = async (author: Author): Promise<void> => {
    try {
        const {data} = await axios.patch('/api/authors/' + author.id, author)
        authors.value = data
    } catch (error) {
        console.error('updateAuthor:', error)
    }
}

export const deleteAuthor = async (id: number): Promise<void> => {
    try {
        const {data} = await axios.delete('/api/authors/' + id)
        authors.value = data
    } catch (error) {
        console.error('deleteAuthor:', error)
    }
}
