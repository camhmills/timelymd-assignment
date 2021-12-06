import React, { useState } from "react";
import { CurrentWeatherDiv } from "../styled-components/WeatherContainer";
import { useSelector } from "react-redux";
import { iconPicker, icons } from "../middleware/functions";

export default function CurrentWeather() {
  const current = useSelector((state) => state.weatherReducer);

  console.log(current.CurrentWeather === [] ? "hello" : "false");

  return (
    <CurrentWeatherDiv>
      {current?.CurrentWeather?.current?.temp}
      {current.CurrentWeather.length === 0 ? (
        <h1>Please Search for a City!</h1>
      ) : (
        <img
          src={iconPicker(
            current?.CurrentWeather?.current?.weather[0]?.description
          )}
        ></img>
      )}
    </CurrentWeatherDiv>
  );
}
