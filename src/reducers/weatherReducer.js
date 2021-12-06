import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { weatherInstance } from "../middleware/axiosInstances";

const initialState = {
  CurrentWeather: [],
};

export const fetchCurrentWeather = createAsyncThunk(
  "weather/fetchCurrentWeather",
  async (cityname) => {
    let response = await weatherInstance.get(
      `weather?q=${cityname}&appid=c36691fa57bef872f4657628bc9a37c9`
    );
    let forecast = await weatherInstance.get(
      `onecall?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&units=imperial&exclude=minutely,hourly&appid=c36691fa57bef872f4657628bc9a37c9`
    );
    return forecast.data;
  }
);

const weatherSlice = createSlice({
  name: "CurrentWeather",
  initialState,
  reducers: {
    addWeather(state, action) {
      state.CurrentWeather.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentWeather.pending, (state, action) => {
        state.CurrentWeather = [];
      })
      .addCase(fetchCurrentWeather.fulfilled, (state, action) => {
        state.CurrentWeather = action.payload;
      });
  },
});

export const { addWeather } = weatherSlice.actions;
export default weatherSlice.reducer;
