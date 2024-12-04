import { ComputedRef, computed, ref } from 'vue'
import { type StoreItem, storeModuleFactory } from '../../services/store'

export interface Author extends StoreItem {
    name: string,
}

const store = storeModuleFactory<Author>('authors')

export const fetchAuthors = async (): Promise<void> => {
    try {
        await store.actions.getAll()
    } catch (error) {
        console.error('fetchAuthors:', error)
    }
}

export const getAllAuthors = (): ComputedRef<Author[]> => store.getters.all()

export const getAllAuthorsSorted = (): ComputedRef<Author[]> =>
    store.getters.sorted((author1, author2) => author1.name.localeCompare(author2.name))

export const getAuthorById = (id: number): ComputedRef<Author | undefined> =>
    store.getters.byId(id)

export const createAuthor = async (author: Author): Promise<void> => {
    try {
       await store.actions.create(author)
    } catch (error) {
        console.error('createAuthor:', error)
    }
}

export const updateAuthor = async (author: Author): Promise<void> => {
    try {
        await store.actions.update(author)
    } catch (error) {
        console.error('updateAuthor:', error)
    }
}

export const deleteAuthor = async (id: number): Promise<void> => {
    try {
        await store.actions.delete(id)
    } catch (error) {
        console.error('deleteAuthor:', error)
    }
}
