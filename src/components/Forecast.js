import React from "react";
import {
  ForecastContainer,
  ForecastDiv,
} from "../styled-components/WeatherContainer";
import { useSelector } from "react-redux";
import {iconPicker, getFormattedDate} from '../middleware/functions'

function Forecast() {
  const forecast = useSelector((state) => state.weatherReducer);

  return (
    <ForecastContainer>
      {forecast?.CurrentWeather?.daily?.slice(1)?.map((day, index) => (
        <ForecastDiv key={index}>
          {getFormattedDate(day?.dt)}
          {day?.weather[0]?.main}
          <img src={iconPicker(day?.weather[0]?.description)}></img>
        </ForecastDiv>
      ))}
    </ForecastContainer>
  );
}

export default Forecast;
