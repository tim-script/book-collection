import { Axios, default as axios } from 'axios';

declare global {
    interface Window {
        axios: Axios
    }
}

window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
