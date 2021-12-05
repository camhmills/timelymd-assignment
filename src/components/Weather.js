import React from 'react'
import { WeatherDiv } from '../styled-components/WeatherContainer';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast'

export default function Weather() {

    return (
        <WeatherDiv>
            <CurrentWeather/>
            <Forecast/>
        </WeatherDiv>
    )
}
