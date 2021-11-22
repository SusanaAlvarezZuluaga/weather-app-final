import CityCardHeader from './CityCardHeader';
import CityCardClothesTips from './CityCardClothesTips';
import CityCardHourlyForecasts from './CityCardHourlyForecasts';
import CityCardDailyForecasts from './CityCardDailyForecasts';

import WeatherAnimation from './WeatherAnimation';

import '../styles/HomePage.css';
import '../styles/CityCard.css';

function CityCard(props) {
  const { currentWeatherCondition, currentWeatherIcon, weatherDescription } =
    props.currentInfo;
  return (
    <div className="cityCard">
      <div className="firstPage">
        <CityCardHeader {...props.currentInfo} />
        <CityCardClothesTips
          clientName={props.clientName}
          clientGender={props.clientGender}
          weatherCondition={props.currentInfo.currentWeatherCondition}
          temperature={props.currentInfo.currentTemperature}
        />
      </div>
      <div className="secondPage">
        <CityCardHourlyForecasts
          utcOffset={props.utcOffset}
          hourlyForecast={props.hourlyForecast}
        />
        <CityCardDailyForecasts
          utcOffset={props.utcOffset}
          dailyForecast={props.dailyForecast}
        />
      </div>

      <WeatherAnimation
        weatherCondition={currentWeatherCondition}
        weatherDescription={weatherDescription}
        weatherIcon={currentWeatherIcon}
      />
    </div>
  );
}
export default CityCard;
