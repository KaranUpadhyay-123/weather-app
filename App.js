import React, { useEffect, useState } from 'react';
import './App.css';
import SearchBox from './components/SearchBox';
import WeatherBox from './components/WeatherBox';
import WeatherDetails from './components/WeatherDetails';
// import ForecastContainer from './components/ForecastContainer';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('London');

  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);

  const fetchWeatherData = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=0aed9fd89b9de133cb1ad6c990dd99c9`)
      .then(response => response.json())
      .then(data => setWeatherData(data))
      .catch(err => alert("Something Went Wrong: Try Checking Your Internet Connection"));
  };

  return (
    <div className="container">
      <SearchBox onSearch={setCity} />
      {weatherData && (
        <>
          <WeatherBox weatherData={weatherData.list[0]} />
          <WeatherDetails weatherData={weatherData.list[0]} />
          {/* <ForecastContainer forecastData={weatherData.list} /> */}
        </>
      )}
    </div>
  );
}

export default App;
