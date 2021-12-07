import React from "react";
import {
  ForecastContainer,
  ForecastDiv,
  ForeCastH2,
  ForecastWeatherImg,
  TempMinMaxDiv,
} from "../styled-components/WeatherContainer";
import { useSelector } from "react-redux";
import { iconPicker, getFormattedDate } from "../middleware/functions";

function Forecast() {
  const forecast = useSelector((state) => state.weatherReducer);

  return (
    <ForecastContainer>
      {forecast?.CurrentWeather?.daily?.slice(1)?.map((day, index) => (
        <ForecastDiv key={index}>
          <ForeCastH2>{getFormattedDate(day?.dt)}</ForeCastH2>
          <TempMinMaxDiv>
            <h1>{day?.temp?.max.toFixed(0)}°F/</h1>
            <h2>{day?.temp?.min.toFixed(0)}°F</h2>
          </TempMinMaxDiv>
          <h3>Feels like: {day?.feels_like?.day.toFixed(0)}°F</h3>
          <ForecastWeatherImg src={iconPicker(day?.weather[0]?.description)} />
          <ForeCastH2>{day?.weather[0]?.main}</ForeCastH2>
        </ForecastDiv>
      ))}
    </ForecastContainer>
  );
}

export default Forecast;
