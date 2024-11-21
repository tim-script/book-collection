import { ref } from 'vue'

const authors = ref([])

export const fetchAuthors = async () => {
    const {data} = await axios.get('api/authors')
    if (!data)
        return
    authors.value = data
}

export const getAllAuthors = () => authors.value

const books = ref([])

export const fetchBooks = async () => {
    const {data} = await axios.get('api/books')
    if (!data)
        return
    books.value = data
}

export const getAllBooks = () => books.value
