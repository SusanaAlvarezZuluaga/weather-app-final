import WeatherAnimation from './WeatherAnimation';
function CityThumb(props) {
  const { cityIndex, currentInfo, slideToCity, setMenuPageOpen } = props;
  let {
    cityName,
    currentWeatherCondition,
    currentWeatherIcon,
    currentWeatherDescription,
    currentTemperature,
  } = currentInfo;
  function handleThumbSelect(cityIndex) {
    slideToCity(cityIndex);
    setMenuPageOpen(false);
  }
  return (
    <div className="cityThumb" onClick={() => handleThumbSelect(cityIndex)}>
      <div className="thumbInfo">
        <div className="thumbTitle">{`${cityName} `}</div>
        <div className="thumbTemp">
          {' '}
          {`${Math.round(currentTemperature)}°C`}
        </div>
      </div>
      <div className="thumbAnimation">
        <WeatherAnimation
          thumb={true}
          weatherCondition={currentWeatherCondition}
          weatherDescription={currentWeatherDescription}
          weatherIcon={currentWeatherIcon}
        />
      </div>
    </div>
  );
}
export default CityThumb;
