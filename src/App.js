import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import axios from 'axios';

import LoginPage from './pages/LoginPage.js';
import HomePage from './pages/HomePage.js';

import './styles/generalStyles.css';

function App() {
  const [gender, setGender] = useState('');
  const [name, setName] = useState('');
  const [cityList, setCityList] = useState([]);

  function handleUserGender(event) {
    setGender(event.target.value);
  }

  function handleUserName(event) {
    setName(event.target.value);
  }

  async function handleAddCity(cityId, lon, lat) {
    const currentInfo = await getCurrentWeather(cityId);
    const { utcOffset, hourlyForecast, dailyForecast } = await getForecasts(
      lon,
      lat
    );
    setCityList([
      { currentInfo, utcOffset, hourlyForecast, dailyForecast },
      ...cityList,
    ]);
  }
  async function getCurrentWeather(cityId) {
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=metric&appid=${apiKey}`;
    const response = await axios.get(apiUrl);
    const city = response.data;
    const cityCurrent = {
      id: cityId,
      cityName: city.name,
      currentTemperature: city.main.temp,
      currentWeatherCondition: city.weather[0].main,
      currentWeatherDescription: city.weather[0].description,
      currentWeatherIcon: city.weather[0].icon,
    };
    return cityCurrent;
  }
  async function getForecasts(lon, lat) {
    const apiKey = process.env.REACT_APP_API_KEY;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,current&units=metric&appid=${apiKey}`;
    const response = await axios.get(apiUrl);
    const utcOffset = response.data.timezone_offset;
    const hourly = response.data.hourly;
    const daily = response.data.daily;
    let hourlyReduced = hourly.map((hour, index) => ({
      id: index,
      temp: hour.temp,
      weatherCondition: hour.weather[0].main,
      weatherIcon: hour.weather[0].icon,
    }));
    hourlyReduced = hourlyReduced.slice(0, 24);
    const dailyReduced = daily.map((day, index) => ({
      id: index,
      minTemp: day.temp.min,
      maxTemp: day.temp.max,
      weatherCondition: day.weather[0].main,
      weatherIcon: day.weather[0].icon,
    }));
    const forecastInfo = {
      utcOffset: utcOffset,
      hourlyForecast: hourlyReduced,
      dailyForecast: dailyReduced,
    };
    return forecastInfo;
  }

  return (
    <Switch>
      <Route path="/" exact={true}>
        <LoginPage
          handleLoginPageName={handleUserName}
          name={name}
          handleGenderChange={handleUserGender}
          gender={gender}
          handleAddFirstCity={handleAddCity}
        />
      </Route>
      <Route path="/home" exact={true}>
        <HomePage
          name={name}
          gender={gender}
          cityList={cityList}
          setCityList={setCityList}
          handleAddCity={handleAddCity}
        />
      </Route>
    </Switch>
  );
}

export default App;
