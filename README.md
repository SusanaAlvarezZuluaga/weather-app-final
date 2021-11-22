# WEATHER APP

This project consists of a weather app in which you can search the weather condition in different cities of the world as well as hourly forecasts and daily forecasts. The app is both desktop and mobile friendly!!! However, I personally prefer the mobile version. Here is a [demo](https://susanaalvarezzuluaga.github.io/weather-app-final) of the app.
The key difference between this app and a traditional weather app is that depending on the weather condition and temperature, you will see an animation in the background and an avatar dressing according to your sex and the weather condition of the city you search. You will also receive a tip of what you should wear.

## Demo Guide

In this section I will give you a quick guide of how you can use my weather app. 
Once you open the app, you are recieved with a login page. Please fill out your name, sex, and choose a city. Then click on the enter button. 
<img width="275" alt="login-page" src="https://user-images.githubusercontent.com/61164953/142893939-4dfd4997-58ff-4d56-8521-b9d9c973e6bc.png">

## Installation and setup

1. Clone the master branch of this repository.
2. Run the command `npm install` in your terminal. This will install in your project folder all the packages used in this project.
3. Access [OpenWeather's API](https://openweathermap.org) and create a user to get an API key.
4. Create a .env file, and put your api key inside this file. The .env file should have the following structure:
   - REACT_APP_API_KEY=your_key_number
5. Run the command `npm start` to run and see the app

## Important Notes

In the master branch of this project you can see that I direcly fetched OpenWeather's API to get the weather data. However, in the [call-to-my-api](https://github.com/SusanaAlvarezZuluaga/weather-app-final/tree/call-to-my-api) branch there is a version of the code where instead of fetching the weather data directly from OpenWeather's API, I fetched it from my own RESTful API which I created using Express.js. The repository of API can be found in [here](https://github.com/SusanaAlvarezZuluaga/weather-app-api)
