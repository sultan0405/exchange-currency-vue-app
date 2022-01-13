import axios from 'axios'

export const appAxios = axios.create({
    baseURL : 'https://v6.exchangerate-api.com/v6/a14f2ab3c9d8b11f8f03e409/latest'
})
export const appAxios_1 = axios.create({
    baseURL : 'http://localhost:3000'
})