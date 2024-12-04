import { ComputedRef, Ref, computed, ref } from 'vue'
import { deleteRequest, getRequest, patchRequest, postRequest } from '../../services/http'

export type Book = {
    id: number,
    author_id: number,
    title: string,
    review: string | null,
}

const books = ref(<Book[]>[])

export const fetchBooks = async (): Promise<void> => {
    try {
        const {data} = await getRequest('books')
        books.value = data
    } catch (error) {
        console.error('fetchBooks:', error)
    }
}

export const getAllBooks = (): ComputedRef<Book[]> => computed(() => books.value)

export const getBooksByAuthorId = (authorId: number): ComputedRef<Book[]> =>
    computed(() => books.value.filter(book => book.author_id == authorId))

export const getBookById = (id: number): ComputedRef<Book | undefined> =>
    computed(() => books.value.find(book => book.id == id))

export const createBook = async (book: Book): Promise<void> => {
    try {
        const {data} = await postRequest('books', book)
        books.value = data
    } catch (error) {
        console.error('updateBook:', error)
    }
}

export const updateBook = async (book: Book): Promise<void> => {
    try {
        const {data} = await patchRequest('books/' + book.id, book)
        books.value = data
    } catch (error) {
        console.error('updateBook:', error)
    }
}

export const deleteBook = async (id: number): Promise<void> => {
    try {
        const {data} = await deleteRequest('books/' + id)
        books.value = data
    } catch (error) {
        console.error('deleteBook:', error)
    }
}
