import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

const initialState = {
    weather: []
}

const weatherInstance = axios.create({
    baseURL : 'https://api.openweathermap.org/data/2.5/',
    timeout : 4000, 
})

export const fetchWeather = createAsyncThunk('weather/fetchWeather', 
    async () => {
        let response = await weatherInstance.get('forecast?id=524901&appid=c36691fa57bef872f4657628bc9a37c9')
        return response.data
    })

const weatherSlice = createSlice({
    name: 'weather', 
    initialState, 
    reducers: {
        addWeather(state, action){
            state.weather.push(action.payload)
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchWeather.pending, (state, action) => {
            state.weather = [];
        }).addCase(fetchWeather.fulfilled, (state, action) => {
            state.weather = action.payload
        })
    }
})

export const { addWeather } = weatherSlice.actions
export default weatherSlice.reducer


// const weatherReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "ADD_WEATHER":
//             return [...state, action.payload];
//         default:
//             return state;
//     }
// }

// export default weatherReducer;