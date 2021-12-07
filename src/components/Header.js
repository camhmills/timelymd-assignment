import React, { useState } from "react";
import { fetchCurrentWeather } from "../reducers/weatherReducer";
import { HeaderButton, HeaderDiv, HeaderForm, HeaderInput } from "../styled-components/WeatherContainer";
import { useDispatch } from "react-redux";

export default function Header() {
  const [cityname, setCityName] = useState("");
  const dispatch = useDispatch();

  const formSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchCurrentWeather(cityname));
  };

  return (
    <HeaderDiv>
      <HeaderForm onSubmit={formSubmit}>
        <HeaderInput
          type="text"
          placeholder="Enter city name"
          name="location"
          onChange={(e) => setCityName(e.target.value)}
        />
        <HeaderButton>Search</HeaderButton>
      </HeaderForm>
    </HeaderDiv>
  );
}
