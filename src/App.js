import React, { useEffect, useState } from 'react';
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
    const apiUrl = `${process.env.REACT_APP_WEATHER_API_URL}/currentWeather/${cityId}`;
    const response = await axios.get(apiUrl);
    const cityCurrent = response.data;
    return cityCurrent;
  }

  async function getForecasts(lon, lat) {
    let apiUrl = `${process.env.REACT_APP_WEATHER_API_URL}/weatherForecast?lat=${lat}&lon=${lon}`;
    const response = await axios.get(apiUrl);
    const forecast = response.data;
    return forecast;
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
