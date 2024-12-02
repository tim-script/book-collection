import axios from 'axios'
import { ComputedRef, Ref, computed, ref } from 'vue'

export type Book = {
    id: number,
    author_id: number,
    title: string,
    review: string | null,
}

const books = ref(<Book[]>[])

export const fetchBooks = async (): Promise<void> => {
    try {
        const {data} = await axios.get('/api/books')
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
        const {data} = await axios.post('/api/books', book)
        books.value = data
    } catch (error) {
        console.error('updateBook:', error)
    }
}

export const updateBook = async (book: Book): Promise<void> => {
    try {
        const {data} = await axios.patch('/api/books/' + book.id, book)
        books.value = data
    } catch (error) {
        console.error('updateBook:', error)
    }
}

export const deleteBook = async (id: number): Promise<void> => {
    try {
        const {data} = await axios.delete('/api/books/' + id)
        books.value = data
    } catch (error) {
        console.error('deleteBook:', error)
    }
}
