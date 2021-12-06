import styled from "styled-components";

export const MainDiv = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
width: 100vw
`

export const SubDiv = styled.div`
height: 89.5vh
width: 100vw;
`

export const HeaderDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-height: 75px;
width: 100vw;
color: #FAFAFA;
background-color: #2F2C2C;
`

export const HeaderInput = styled.input`
border: none;
font-size: 16px;
height: 35px;
width: 260px;
text-align: center;
&:focus {
    outline: none;
}
`

export const HeaderButton = styled.button`
border: none;
text-align: center;

`

export const WeatherDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
min-height: 500px;
width: 100vw;
`

export const CurrentWeatherDiv = styled.div`
display: flex;
min-height: 300px;
width: 100%;
border: 1px solid black;
margin-bottom: 5px;
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