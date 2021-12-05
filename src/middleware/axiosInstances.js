import axios from 'axios'

export const weatherInstance = axios.create({
    baseURL : 'https://api.openweathermap.org/data/2.5/',
    timeout : 4000, 
})

export const locationInstance = axios.create({
    baseURL : 'https://geocode.xyz/',
    timeout : 4000
})