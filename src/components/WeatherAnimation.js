import ClearDay from '../animations/clear-day/ClearDay';
import ClearNight from '../animations/clear-night/ClearNight';
import Rainy from '../animations/rainy/Rainy';
import CloudyDay from '../animations/cloudy-day/CloudyDay';
import CloudyNight from '../animations/cloudy-night/CloudyNight';
import Snowy from '../animations/snowy/Snowy';
import ThunderStorm from '../animations/thunder-storm/ThunderStorm';
import Tornado from '../animations/tornado/Tornado';
import SandDust from '../animations/sand-dust/SandDust';
function WeatherAnimation(props) {
  let { weatherCondition, weatherIcon, weatherDescription, thumb } = props;
  let isDay = weatherIcon.includes('d');
  switch (weatherCondition) {
    case 'Clear':
      return isDay ? <ClearDay thumb={thumb} /> : <ClearNight thumb={thumb} />;
    case 'Clouds':
    case 'Mist':
    case 'Smoke':
    case 'Haze':
    case 'Fog':
    case 'Ash':
      return isDay ? (
        <CloudyDay
          weatherCondition={weatherCondition}
          weatherDescription={weatherDescription}
          thumb={thumb}
        />
      ) : (
        <CloudyNight
          weatherCondition={weatherCondition}
          weatherDescription={weatherDescription}
          thumb={thumb}
        />
      );
    case 'Rain':
    case 'Drizzle':
      return <Rainy isDay={isDay} thumb={thumb} />;
    case 'Dust':
    case 'Sand':
      return <SandDust thumb={thumb} />;
    case 'Tornado':
    case 'Squall':
      return <Tornado thumb={thumb} />;
    case 'Snow':
      return <Snowy isDay={isDay} thumb={thumb} />;
    case 'Thunderstorm':
      return <ThunderStorm isDay={isDay} thumb={thumb} />;
    default:
      return <ClearDay thumb={thumb} />;
  }
}
export default WeatherAnimation;
