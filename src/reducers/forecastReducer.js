import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { weatherInstance } from "../middleware/axiosInstances";

const initialState = {
    weatherForecast: []
}

export const fetchForecast = createAsyncThunk('weather/fetchForecast', 
    async () => {
        let response = await weatherInstance.get('onecall?lat=33.44&lon=-94.04&exclude=current,minutely,hourly&appid=c36691fa57bef872f4657628bc9a37c9')
        return response.data
    }
)

const forecastSlice = createSlice({
    name: 'weatherForecast', 
    initialState, 
    reducers: {
        addForecast(state, action){
            state.weatherForecast.push(action.payload)
        }
    }, 
    extraReducers: builder => {
        builder.addCase(fetchForecast.fulfilled, (state, action) => {
            state.weatherForecast = action.payload
        })
    }
})

export const { addForecast } = forecastSlice.actions
export default forecastSlice.reducer