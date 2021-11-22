function CityResult(props) {
  const {
    name,
    id,
    state,
    country,
    long,
    lat,
    handleAddCity,
    handleCitySelect,
    slideToCity,
    setSearchPageOpen,
  } = props;
  let completeCityName;
  if (state !== '') {
    completeCityName = `${name}, ${state}, ${country}`;
  } else {
    completeCityName = `${name}, ${country}`;
  }
  return (
    <div
      className="cityResult"
      value="completeCityName"
      onClick={async () => {
        await handleAddCity(id, long, lat);
        await handleCitySelect(completeCityName);
        if (slideToCity) {
          slideToCity(0);
        }
        if (setSearchPageOpen) {
          setSearchPageOpen(false);
        }
      }}
    >
      <div>{completeCityName}</div>
    </div>
  );
}

export default CityResult;
