import axios from 'axios'

export const weatherInstance = axios.create({
    baseURL : 'https://api.openweathermap.org/data/2.5/',
    timeout : 4000, 
})

const getWeather = async () => {
    let response = await weatherInstance.get('forecast?id=524901&appid=c36691fa57bef872f4657628bc9a37c9')
    return response.data
}

export default getWeather