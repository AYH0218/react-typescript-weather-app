import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Result from './components/Result';
import Title from './components/Title';

function App() {
  const [city, setCity] = useState<string>('');
  const getWeather = (e: any) => {
    e.preventDefault();
    fetch('https://api.weatherapi.com/v1/current.json?key=e33106a7d4384c8a9ba94755220810&q=London&aqi=no')
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="App">
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Result />
    </div>
  );
}

export default App;
