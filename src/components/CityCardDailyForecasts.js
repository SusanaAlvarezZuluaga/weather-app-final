function CityCardDailyForecasts(props) {
  const { utcOffset, dailyForecast } = props;

  function returnDay(index) {
    if (index === 0) {
      return 'Today';
    }
    const date = new Date();
    const localTime = date.getTime();
    const localOffset = date.getTimezoneOffset() * 60000;
    const utc = localTime + localOffset;
    const cityDestinationOffset = utcOffset * 1000;
    const cityTimeMs = utc + cityDestinationOffset;
    const dateInDestinationCity = new Date(cityTimeMs);
    const weekDayDestination = dateInDestinationCity.getDay();
    let weekDayDestinationForecast = weekDayDestination + index;

    if (weekDayDestinationForecast > 6) {
      weekDayDestinationForecast = weekDayDestinationForecast - 7;
    }

    switch (weekDayDestinationForecast) {
      case 0:
        return 'Sunday';
      case 1:
        return 'Monday';
      case 2:
        return 'Tuesday';
      case 3:
        return 'Wednesday';
      case 4:
        return 'Thursday';
      case 5:
        return 'Friday';
      case 6:
        return 'Saturday';
      default:
        return '';
    }
  }

  return (
    <div className="dailyForecastsHolder">
      <div className="dailyForecastsTitle">Next Days</div>
      <div className="dailyForecastsSlidesHolder">
        {dailyForecast.map((day, index) => (
          <div key={index} className="dailyForecastSlide">
            <div className="dailyForecastDay">{returnDay(index)}</div>
            <div className="dailyForecastIconHolder">
              <img
                className="dailyForecastIcon"
                alt="weather icon"
                src={`https://openweathermap.org/img/wn/${day.weatherIcon}@2x.png`}
              ></img>
            </div>
            <div className="hourlyForecastTemperature">{`${Math.round(
              day.minTemp
            )}°C`}</div>
            <div className="hourlyForecastTemperature">{`${Math.round(
              day.maxTemp
            )}°C`}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default CityCardDailyForecasts;
