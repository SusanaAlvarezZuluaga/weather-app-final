import './cloudy-day.css';

function CloudyDay(props) {
  let { weatherCondition, weatherDescription } = props;
  let cloudClass = '';
  let sizeClass = '';
  if (props.thumb) {
    sizeClass = 'thumb';
  }
  if (
    weatherCondition == 'Clouds' &&
    (weatherDescription === 'few clouds' ||
      weatherDescription == 'scattered clouds')
  ) {
    cloudClass = 'cloudyDay';
  } else if (
    weatherCondition == 'Mist' ||
    weatherCondition == 'Smoke' ||
    weatherCondition == 'Haze' ||
    weatherCondition == 'Fog' ||
    weatherCondition == 'Ash' ||
    (weatherCondition == 'Clouds' &&
      (weatherDescription === 'broken clouds' ||
        weatherDescription == 'overcast clouds'))
  ) {
    cloudClass = 'veryCloudyDay';
  }
  return (
    <div className={`cloudsDayAnimationHolder ${cloudClass} ${sizeClass}`}>
      <div className="clouds"></div>
    </div>
  );
}
export default CloudyDay;
