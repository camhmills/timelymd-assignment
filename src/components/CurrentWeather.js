import React from "react";
import {
  CurrentWeatherDiv,
  CurrentWeatherImg,
  CurrentWeatherInfoDiv,
  CurrentWeatherInfoH4,
  CurrentWeatherMoreInfo,
  CurrentWeatherSubDiv,
  CurrentWeatherTemp,
  CurrentWeatherToday,
} from "../styled-components/WeatherContainer";
import { useSelector } from "react-redux";
import { iconPicker } from "../middleware/functions";

export default function CurrentWeather() {
  const current = useSelector((state) => state.weatherReducer);

  return (
    <CurrentWeatherDiv>
      {current.CurrentWeather.length === 0 ? (
        <h1>Please Search for a City!</h1>
      ) : (
        <CurrentWeatherSubDiv>
          <CurrentWeatherInfoDiv>
            <CurrentWeatherToday>Today</CurrentWeatherToday>
            <CurrentWeatherTemp>
              {current?.CurrentWeather?.current?.temp.toFixed(0)}°F
            </CurrentWeatherTemp>
            <CurrentWeatherImg
              src={iconPicker(
                current?.CurrentWeather?.current?.weather[0]?.description
              )}
            />
            <h1>{current?.CurrentWeather?.current?.weather[0]?.main}</h1>
          </CurrentWeatherInfoDiv>
          <CurrentWeatherMoreInfo>
            <CurrentWeatherInfoH4>
              Feels Like:{" "}
              {current?.CurrentWeather?.current?.feels_like.toFixed(0)}°F
            </CurrentWeatherInfoH4>
            <CurrentWeatherInfoH4>
              Atmo. Pressure: {current?.CurrentWeather?.current?.pressure}{" "}
              hPa
            </CurrentWeatherInfoH4>
            <CurrentWeatherInfoH4>
              Humidity: {current?.CurrentWeather?.current?.humidity}%
            </CurrentWeatherInfoH4>
            <CurrentWeatherInfoH4>
              Dew Point:{" "}
              {current?.CurrentWeather?.current?.dew_point.toFixed(0)}°F
            </CurrentWeatherInfoH4>
            <CurrentWeatherInfoH4>
              UV Index:{" "}
              {current?.CurrentWeather?.current?.uvi.toFixed(2)}
            </CurrentWeatherInfoH4>
            <CurrentWeatherInfoH4>
              Cloud Coverage:{" "}
              {current?.CurrentWeather?.current?.clouds}%
            </CurrentWeatherInfoH4>
            <CurrentWeatherInfoH4>
              Wind Speed:{" "}
              {current?.CurrentWeather?.current?.wind_speed.toFixed(0)} mph
            </CurrentWeatherInfoH4>
            <CurrentWeatherInfoH4>
              Visibility:{" "}
              {current?.CurrentWeather?.current?.visibility} feet
            </CurrentWeatherInfoH4>
          </CurrentWeatherMoreInfo>
        </CurrentWeatherSubDiv>
      )}
    </CurrentWeatherDiv>
  );
}
