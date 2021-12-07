import React from "react";
import {
  ForecastContainer,
  ForecastDiv,
  ForeCastH4,
  ForecastWeatherImg,
  TempDiv,
} from "../styled-components/WeatherContainer";
import { useSelector } from "react-redux";
import { iconPicker, getFormattedDate } from "../middleware/functions";

function Forecast() {
  const forecast = useSelector((state) => state.weatherReducer);

  return (
    <ForecastContainer>
      {forecast?.CurrentWeather?.daily?.slice(1)?.map((day, index) => (
        <ForecastDiv key={index}>
          <ForeCastH4>{getFormattedDate(day?.dt)}</ForeCastH4>
          <TempDiv>
            <h1>{day?.temp?.max.toFixed(0)}°/</h1>
            <h2>{day?.temp?.min.toFixed(0)}°</h2>
          </TempDiv>
          <ForecastWeatherImg src={iconPicker(day?.weather[0]?.description)} />
          <h4>{day?.weather[0]?.main}</h4>
        </ForecastDiv>
      ))}
    </ForecastContainer>
  );
}

export default Forecast;
