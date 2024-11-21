import { ref } from 'vue'

const books = ref([])

export const fetchBooks = async () => {
    const {data} = await axios.get('api/books')
    if (!data)
        return
    books.value = data
}

export const getAllBooks = () => books.value
