import { computed, ref } from 'vue'

// XXX API URLs have to be absolute

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
    await axios.post('api/books', book)
}

export const updateBook = async (book) => {
    await axios.patch('/api/books/' + book.id, book)
}

export const deleteBook = async (id) => {
    await axios.delete('/api/books/' + id)
}
