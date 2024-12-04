import { ComputedRef, computed, ref } from 'vue'
import { deleteRequest, getRequest, patchRequest, postRequest } from '../../services/http'

export type Author = {
    id: number,
    name: string,
}

const authors = ref(<Author[]>[])

export const fetchAuthors = async (): Promise<void> => {
    try {
        const {data} = await getRequest('authors')
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
        const {data} = await postRequest('authors', author)
        authors.value = data
    } catch (error) {
        console.error('createAuthor:', error)
    }
}

export const updateAuthor = async (author: Author): Promise<void> => {
    try {
        const {data} = await patchRequest('authors/' + author.id, author)
        authors.value = data
    } catch (error) {
        console.error('updateAuthor:', error)
    }
}

export const deleteAuthor = async (id: number): Promise<void> => {
    try {
        const {data} = await deleteRequest('authors/' + id)
        authors.value = data
    } catch (error) {
        console.error('deleteAuthor:', error)
    }
}
