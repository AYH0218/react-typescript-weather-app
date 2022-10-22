import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Title from './components/Title';
import Loading from './components/Loading';
import Results from './components/Results';

type ResultsStateType = {
  country: string;
  cityName: string;
  temperature: string;
  conditionText: string;
  icon: string;
};

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [city, setCity] = useState<string>('');
  const [nameError, setNameError] = useState<string>('');
  const [results, setResults] = useState<ResultsStateType>({
    country: '',
    cityName: '',
    temperature: '',
    conditionText: '',
    icon: '',
  });
  console.log(results.conditionText);

  const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=d3635cf18fccaeee152347a04d11873a`)
      .then((res) => res.json())
      .then((data) => {
        setResults({
          country: data.sys.country,
          cityName: data.name,
          temperature: data.main.temp,
          conditionText: data.weather[0].main,
          icon: data.weather[0].icon,
        });
        setCity('');
        setLoading(false);
      })
      .catch((err) => alert('エラーが発生しました。'));
  };

  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form
          getWeather={getWeather}
          city={city}
          setCity={setCity}
          setLoading={setLoading}
          nameError={nameError}
          setNameError={setNameError}
        />
        {loading ? <Loading /> : <Results results={results} />}
      </div>
    </div>
  );
}

export default App;
