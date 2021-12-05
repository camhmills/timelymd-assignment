import styled from "styled-components";

export const MainDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
width: 100vw
`

export const HeaderDiv = styled.div`
display: flex;
height: 75px;
width: 100vw;
border: 1px solid black;
margin-bottom: 25px;
`

export const WeatherDiv = styled.div`
display: flex;
flex-direction: column;
min-height: 500px;
height: 100vh;
width: 75vw;
background-color: blue;
`

export const CurrentWeatherDiv = styled.div`
display: flex;
min-height: 300px;
width: 100%;
border: 1px solid black;
`

export const ForecastContainer = styled.div`
display: grid;
height: 100%;
width: 75vw;
grid-gap: 5px;
`

export const ForecastDiv = styled.div`
display: flex;
height: 125px;
width: 100%;
border: 1px solid black;
`