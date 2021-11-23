import './cloudy-night.css';

function CloudyNight(props) {
  let { weatherCondition, weatherDescription } = props;
  let cloudClass = '';
  let starClass = '';
  let sizeClass = '';
  if (props.thumb) {
    sizeClass = 'thumb';
  }
  if (
    weatherCondition === 'Clouds' &&
    (weatherDescription === 'few clouds' ||
      weatherDescription === 'scattered clouds')
  ) {
    cloudClass = 'cloudyNight';
    starClass = 'visibleStars';
  } else if (
    weatherCondition === 'Mist' ||
    weatherCondition === 'Smoke' ||
    weatherCondition === 'Haze' ||
    weatherCondition === 'Fog' ||
    weatherCondition === 'Ash' ||
    (weatherCondition === 'Clouds' &&
      (weatherDescription === 'broken clouds' ||
        weatherDescription === 'overcast clouds'))
  ) {
    cloudClass = 'veryCloudyNight';
    starClass = 'noStars';
  }
  return (
    <div className={`cloudsNightAnimationHolder ${sizeClass}`}>
      <div className={`stars ${starClass}`}></div>
      <div className={`clouds ${cloudClass}`}></div>
    </div>
  );
}
export default CloudyNight;
