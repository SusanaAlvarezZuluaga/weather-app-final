function CityCardHeader(props) {
  return (
    <div className="cityCardHeader">
      <div className="infoContainer">
        <div className="cityName"> {props.cityName}</div>
        <div className="cityTemp">{`${Math.round(
          props.currentTemperature
        )}°C`}</div>
        <div className="cityWeatherCondition">
          <div> {props.currentWeatherDescription}</div>
        </div>
      </div>
    </div>
  );
}
export default CityCardHeader;
