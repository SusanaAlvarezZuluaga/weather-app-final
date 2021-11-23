function CityCardHeader(props) {
  const { cityName, currentTemperature, currentWeatherDescription } = props;
  return (
    <div className="cityCardHeader">
      <div className="infoContainer">
        <div className="cityName"> {cityName}</div>
        <div className="cityTemp">{`${Math.round(currentTemperature)}°C`}</div>
        <div className="cityWeatherCondition">
          <div> {currentWeatherDescription}</div>
        </div>
      </div>
    </div>
  );
}
export default CityCardHeader;
