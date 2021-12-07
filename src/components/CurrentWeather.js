import React from "react";
import {
  CurrentWeatherDiv,
  CurrentWeatherGraph,
  CurrentWeatherImg,
  CurrentWeatherInfoDiv,
  CurrentWeatherInfoH3,
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
            <CurrentWeatherInfoH3>
              Feels Like:{" "}
              {current?.CurrentWeather?.current?.feels_like.toFixed(0)}°F
            </CurrentWeatherInfoH3>
            <CurrentWeatherInfoH3>
              Atmo. Pressure:{" "}
              {current?.CurrentWeather?.current?.pressure} hPa
            </CurrentWeatherInfoH3>
            <CurrentWeatherInfoH3>
              Humidity:{" "}
              {current?.CurrentWeather?.current?.humidity}%
            </CurrentWeatherInfoH3>
            <CurrentWeatherInfoH3>
              Dew Point:{" "}
              {current?.CurrentWeather?.current?.dew_point.toFixed(0)}°F
            </CurrentWeatherInfoH3>
            <CurrentWeatherInfoH3>
              UV Index:{" "}
              {current?.CurrentWeather?.current?.uvi.toFixed(2)}
            </CurrentWeatherInfoH3>
            <CurrentWeatherInfoH3>
              Cloud Coverage:{" "}
              {current?.CurrentWeather?.current?.clouds}%
            </CurrentWeatherInfoH3>
            <CurrentWeatherInfoH3>
              Wind Speed:{" "}
              {current?.CurrentWeather?.current?.wind_speed.toFixed(0)} mph
            </CurrentWeatherInfoH3>
            <CurrentWeatherInfoH3>
              Visibility:{" "}
              {current?.CurrentWeather?.current?.visibility} feet
            </CurrentWeatherInfoH3>
          </CurrentWeatherMoreInfo>
        </CurrentWeatherSubDiv>
      )}
    </CurrentWeatherDiv>
  );
}
