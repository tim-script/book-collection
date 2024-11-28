import { computed, ref } from 'vue'

const books = ref([])

export const fetchBooks = async () => {
    try {
        const {data} = await axios.get('/api/books')
        books.value = data
    } catch (error) {
        console.error('fetchBooks:', error)
    }
}

export const getAllBooks = () => computed(() => books.value)

export const getBooksByAuthorId = (authorId) =>
    computed(() => books.value.filter(book => book.author_id == authorId))

export const getBookById = (id) =>
    computed(() => books.value.find(book => book.id == id))

export const createBook = async (book) => {
    try {
        await axios.post('/api/books', book)
    } catch (error) {
        console.error('updateBook:', error)
    }
}

export const updateBook = async (book) => {
    try {
        await axios.patch('/api/books/' + book.id, book)
    } catch (error) {
        console.error('updateBook:', error)
    }
}

export const deleteBook = async (id) => {
    try {
        await axios.delete('/api/books/' + id)
    } catch (error) {
        console.error('deleteBook:', error)
    }
}
