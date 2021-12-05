import './App.css';
import { MainDiv } from './styled-components/WeatherContainer';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchCurrentWeather } from './reducers/weatherReducer'
import { fetchForecast } from './reducers/forecastReducer'
import Weather from './components/Weather';
import Header from './components/Header'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCurrentWeather())
    dispatch(fetchForecast())
    }
  , []
  )

  return (
    <MainDiv className="App">
      <Header/>
      <Weather/>
    </MainDiv>
  );
}

export default App;
