import React from "react";
import { CurrentWeatherDiv } from "../styled-components/WeatherContainer";
import { useSelector } from "react-redux";
import { iconPicker } from "../middleware/functions";

export default function CurrentWeather() {
  const current = useSelector((state) => state.weatherReducer);

  console.log(current.CurrentWeather === [] ? "hello" : "false");

  return (
    <CurrentWeatherDiv>
      
      {current.CurrentWeather.length === 0 ? (
        <h1>Please Search for a City!</h1>
      ) : (
        <div>
          <h2>Today</h2>
          <h1>{current?.CurrentWeather?.current?.temp}</h1>
          <img
            src={iconPicker(
              current?.CurrentWeather?.current?.weather[0]?.description
            )}
          />
        </div>
      )}
    </CurrentWeatherDiv>
  );
}
