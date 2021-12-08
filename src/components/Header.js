import React, { useState } from "react";
import { fetchCurrentWeather } from "../reducers/weatherReducer";
import {
  HeaderButton,
  HeaderDiv,
  HeaderForm,
  HeaderHistoryButton,
  HeaderInput,
  HeaderSpaceDiv,
} from "../styled-components/WeatherContainer";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const [cityname, setCityName] = useState("");
  const cityHistory = useSelector((state) => state.addCityReducer);
  const lastSearch = cityHistory.slice(0, 3);
  const dispatch = useDispatch();

  const formSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchCurrentWeather(cityname));
    dispatch({ type: "ADD_CITY", payload: cityname });
    e.target.reset();
  };

  const historyLink = (e) => {
    e.preventDefault();
    dispatch(fetchCurrentWeather(cityname));
  };

  return (
    <HeaderDiv>
      <HeaderSpaceDiv />
      <HeaderForm onSubmit={formSubmit}>
        <HeaderInput
          type="text"
          placeholder="Enter city name"
          name="location"
          onChange={(e) => setCityName(e.target.value)}
        />
        <HeaderButton>Search</HeaderButton>
      </HeaderForm>
      <HeaderSpaceDiv>
        {lastSearch.map((city) => (
          <HeaderHistoryButton onClick={historyLink}>
            {city}
          </HeaderHistoryButton>
        ))}
      </HeaderSpaceDiv>
    </HeaderDiv>
  );
}
