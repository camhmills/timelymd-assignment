import './App.css';
import { MainDiv, SubDiv } from './styled-components/WeatherContainer';
import Weather from './components/Weather';
import Header from './components/Header'

function App() {
  return (
    <MainDiv>
      <Header/>
      <SubDiv>
      <Weather/>
      </SubDiv>
    </MainDiv>
  );
}

export default App;
