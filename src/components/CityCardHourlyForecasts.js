import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
function CityCardHourlyForecasts(props) {
  const cityUtcOffset = props.utcOffset;

  //returns the current hour (and next hours) in the city the person is looking for
  function returnHour(index) {
    if (index === 0) {
      return 'Now';
    }

    const date = new Date();
    const localTime = date.getTime();
    const localOffset = date.getTimezoneOffset() * 60000;
    const utc = localTime + localOffset;
    const cityDestinationOffset = cityUtcOffset * 1000;
    const cityTimeMs = utc + cityDestinationOffset;
    const timeInDestinationCity = new Date(cityTimeMs);
    let hourInDestinationCity = timeInDestinationCity.getHours();
    let forecastTime = hourInDestinationCity + index;

    if (forecastTime > 24) {
      forecastTime = forecastTime - 24;
    }

    if (forecastTime === 24) {
      forecastTime = forecastTime - 12;
      return forecastTime + 'AM';
    } else if (forecastTime > 12) {
      forecastTime = forecastTime - 12;
      return forecastTime + 'PM';
    } else if (forecastTime === 12) {
      return forecastTime + 'PM';
    } else {
      return forecastTime + 'AM';
    }
  }

  return (
    <div className="hourlyForecastsHolder">
      <div className="hourlyForecastsTitle">Next Hours</div>
      <Swiper
        className="hourlyForecastSwiper"
        breakpoints={{
          320: {
            slidesPerView: 3,
          },
          425: {
            slidesPerView: 4,
          },
          550: {
            slidesPerView: 6,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1440: {
            slidesPerView: 6,
          },
        }}
      >
        {props.hourlyForecast.map((hour, index) => (
          <SwiperSlide>
            <div className="hourlyForecastSlide">
              <div className="hourlyForecastHour">{returnHour(index)}</div>
              <div className="hourlyForecastIconHolder">
                <img
                  className="hourlyForecastIcon"
                  alt="weather icon"
                  src={`https://openweathermap.org/img/wn/${hour.weatherIcon}@2x.png`}
                ></img>
              </div>
              <div className="hourlyForecastWeatherCondition">
                {hour.weatherCondition === 'Thunderstorm'
                  ? 'Thunder- storm'
                  : hour.weatherCondition}
              </div>
              <div className="hourlyForecastTemperature">{`${Math.round(
                hour.temp
              )}°C`}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CityCardHourlyForecasts;
