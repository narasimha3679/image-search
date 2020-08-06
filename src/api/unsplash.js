import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID CI7JH3LM8BGQzaiNRTu-UlFEJQcWx5-yTYNqHiqcaCU'
    }
})
