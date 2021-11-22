# Weather app (call-to-my-api branch )

In the master branch of this project you can see that I direcly fetched OpenWeather's API to get the weather data. However, in this branch there is a version of the code where instead of fetching the weather data directly from OpenWeather's API, I fetched it from my own RESTful API which I created using Express.js. The repository of my API can be found in [here](https://github.com/SusanaAlvarezZuluaga/weather-app-api). If you want to have this version of the project setup, you will need to set up both repositories in your computer. In the section below there is a detailed explanation of how you can do the whole setup process.

## Installation and setup

1. Go to the [back-end repository](https://github.com/SusanaAlvarezZuluaga/weather-app-api) and follow the installation steps in the README.md file
2. Clone the `call-to-my-api` branch of this repository.
3. Run the command `npm install` in your terminal. This will install in your project folder all the packages used in this project.
4. Access [OpenWeather's API](https://openweathermap.org) and create and account to get an API key.
5. Create a .env file in the root directory, and add the following information inside it: <br/>
   `REACT_APP_WEATHER_API_URL=http://localhost:4000/api`
6. Run the command `npm start` to see the app running
