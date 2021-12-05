import React from 'react'
import { CurrentWeatherDiv } from '../styled-components/WeatherContainer'
import { useSelector } from 'react-redux'

export default function CurrentWeather() {
    const currentData = useSelector(state => state.weatherReducer)
    return (
        <CurrentWeatherDiv>
            {currentData?.CurrentWeather?.name}
        </CurrentWeatherDiv>
    )
}
