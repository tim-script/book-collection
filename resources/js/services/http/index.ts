import axios from 'axios'

const baseURL = '/api'

const http = axios.create({
    baseURL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})

export const getRequest = (endpoint: string) => http.get(endpoint)

export const postRequest = (endpoint: string, data: any) => http.post(endpoint, data)

export const patchRequest = (endpoint: string, data: any) => http.patch(endpoint, data)

export const deleteRequest = (endpoint: string) => http.delete(endpoint)
