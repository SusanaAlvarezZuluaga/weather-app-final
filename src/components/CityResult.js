function CityResult(props) {
  let completeCityName;
  if (props.state !== '') {
    completeCityName = `${props.name}, ${props.state}, ${props.country}`;
  } else {
    completeCityName = `${props.name}, ${props.country}`;
  }
  return (
    <div
      className="cityResult"
      value="completeCityName"
      onClick={async () => {
        await props.handleAddCity(props.id, props.long, props.lat);
        await props.handleCitySelect(completeCityName);
        if (props.slideToCity) {
          props.slideToCity(0);
        }
        if (props.setSearchPageOpen) {
          props.setSearchPageOpen(false);
        }
      }}
    >
      <div>{completeCityName}</div>
    </div>
  );
}

export default CityResult;
