import logo from './logo.svg';
import './App.css';
import { MainDiv, WeatherDiv } from './styled-components/WeatherContainer';

function App() {
  return (
    <MainDiv className="App">
      <WeatherDiv>
        Weather
      </WeatherDiv>
    </MainDiv>
  );
}

export default App;
