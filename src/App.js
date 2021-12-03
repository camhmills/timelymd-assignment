import './App.css';
import { MainDiv, WeatherDiv } from './styled-components/WeatherContainer';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { addWeather, fetchWeather } from './reducers/weatherReducer'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchWeather())
    }
  , [])

  return (
    <MainDiv className="App">
      <WeatherDiv>
        Weather
      </WeatherDiv>
    </MainDiv>
  );
}

export default App;
