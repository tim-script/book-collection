import { computed, ref } from 'vue'

const books = ref([])

export const fetchBooks = async () => {
    const {data} = await axios.get('/api/books')
    if (!data)
        return
    books.value = data
}

export const getAllBooks = () => books.value

export const getBookById = (id) =>
    computed(() => books.value.find(book => book.id == id))

export const createBook = async (book) => {
    await axios.post('/api/books', book)
}

export const updateBook = async (book) => {
    await axios.patch('/api/books/' + book.id, book)
}

export const deleteBook = async (id) => {
    await axios.delete('/api/books/' + id)
}
