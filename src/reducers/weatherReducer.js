import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { weatherInstance } from '../middleware/axiosInstances'

const initialState = {
    CurrentWeather: []
}

export const fetchCurrentWeather = createAsyncThunk('weather/fetchCurrentWeather', 
    async () => {
        let response = await weatherInstance.get('weather?q=London&appid=c36691fa57bef872f4657628bc9a37c9')
        return response.data
})

const weatherSlice = createSlice({
    name: 'CurrentWeather',
    initialState,  
    reducers: {
        addWeather(state, action){
            state.CurrentWeather.push(action.payload)
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchCurrentWeather.pending, (state, action) => {
            state.CurrentWeather = [];
        }).addCase(fetchCurrentWeather.fulfilled, (state, action) => {
            state.CurrentWeather = action.payload
        })
    }
})

export const { addWeather } = weatherSlice.actions
export default weatherSlice.reducer