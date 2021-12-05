import React from 'react'
import { ForecastContainer, ForecastDiv } from '../styled-components/WeatherContainer'
import { useSelector } from 'react-redux'

function Forecast() {
    const forecast = useSelector(state => state.forecastReducer)

    const getFormattedDate = (time) => {
        const intTime = parseInt(time)
        const adjTime = intTime * 1000
        const formatDate = new Date(adjTime).toLocaleDateString("en-US", {weekday: "long"})
        return formatDate
    }

    return (
        <ForecastContainer>
            {forecast?.weatherForecast?.daily
                ?.slice(1)
                    ?.map((day, index) => 
                        <ForecastDiv key={index}>
                            {getFormattedDate(day?.dt)}
                        </ForecastDiv>
                        )
                    }
        </ForecastContainer>
    )
}

export default Forecast
