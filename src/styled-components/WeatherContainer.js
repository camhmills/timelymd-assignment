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

export const HeaderSpaceDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
font-size: 20px;
width: 100%;
@media screen and (max-width: 1000px) {
    display: none;
}
`

export const HeaderForm = styled.form`
display: flex;
justify-content: center;
width: 50%;
`

export const HeaderInput = styled.input`
border: none;
font-size: 22px;
height: 45px;
width: 260px;
text-align: center;
&:focus {
    outline: none;
}
`

export const HeaderButton = styled.button`
border: none;
text-align: center;
height: 47px;
width: 100px;
font-size: 22px;
transition-duration: .5s;
&:hover {
    background: #00D4FF
}
`

export const HeaderHistoryButton = styled.button`
border: none;
text-align: center;
height: 47px;
width: 100px;
font-size: 22px;
transition-duration: .5s;
margin-left: 20px;
&:hover {
    background: #00D4FF
}
`

export const WeatherDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
min-height: 500px;
max-width: 100vw;
`

export const CurrentWeatherDiv = styled.div`
display: flex;
min-height: 300px;
max-width: 1000px;
justify-content: center;
width: 75%;
border-radius: 3px;
margin-top: 10px;
margin-bottom: 5px;
background-color: #FFFFFF;
`
export const CurrentWeatherImg = styled.img`

`

export const CurrentWeatherSubDiv = styled.div`
display: flex;
flex-direction: row;
width: 100%;
`

export const CurrentWeatherInfoDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
width: 33%;
@media screen and (max-width: 450px) {
    width: 100%;
}
`

export const CurrentWeatherMoreInfo = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
width: 64%;
@media screen and (max-width: 450px) {
    display: none;
}
`

export const CurrentWeatherInfoH3 = styled.h3`
display: flex;
align-items: center;
justify-content: center;
border-bottom: 1px solid #2C2C2C;
`

export const CurrentWeatherToday = styled.h2`
margin-top: 10px;
margin-bottom: 0px;
`

export const CurrentWeatherTemp = styled.h1`
margin-top: 10px;
margin-bottom: 0px;
`

export const ForecastWeatherImg = styled.img`
height: 128px;
width: 128px;
@media screen and (max-width: 650px) {
    height: 75px;
    width: 75px;
}
`

export const ForecastContainer = styled.div`
display: grid;
justify-content: center;
height: 100%;
width: 75vw;
grid-gap: 5px;
`
export const ForecastH3 = styled.h3`
@media screen and (max-width: 850px) { 
    display: none;
}
`

export const ForecastDiv = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
height: 125px;
max-width: 1000px;
width: 75vw;
border-radius: 3px;
background-color: #FFFFFF;
@media screen and (max-width: 900px) {
    font-size: 12px;
}
`

export const TempMinMaxDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
width: 25%;
`

export const ForeCastH2 = styled.h2`
display: flex;
align-items: center;
justify-content: center;
width: 100px;
font-size: 20px;
@media screen and (max-width: 580px) {
    display: none;
}
`