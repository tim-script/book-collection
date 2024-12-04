import { ComputedRef, Ref, computed, ref } from 'vue'
import { type StoreItem, storeModuleFactory } from '../../services/store'

export interface Book extends StoreItem {
    author_id: number,
    title: string,
    review: string | null,
}

const store = storeModuleFactory<Book>('books')

export const fetchBooks = async (): Promise<void> => {
    try {
        await store.actions.getAll()
    } catch (error) {
        console.error('fetchBooks:', error)
    }
}

export const getAllBooks = (): ComputedRef<Book[]> => store.getters.all()

export const getBooksByAuthorId = (authorId: number): ComputedRef<Book[]> =>
    store.getters.filter(book => book.author_id == authorId)

export const getBookById = (id: number): ComputedRef<Book | undefined> =>
    store.getters.byId(id)

export const createBook = async (book: Book): Promise<void> => {
    try {
        await store.actions.create(book)
    } catch (error) {
        console.error('createBook:', error)
    }
}

export const updateBook = async (book: Book): Promise<void> => {
    try {
        await store.actions.update(book)
    } catch (error) {
        console.error('updateBook:', error)
    }
}

export const deleteBook = async (id: number): Promise<void> => {
    try {
        await store.actions.delete(id)
    } catch (error) {
        console.error('deleteBook:', error)
    }
}
