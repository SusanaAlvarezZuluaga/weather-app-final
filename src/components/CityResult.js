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
        handleCitySelect(completeCityName);
        await handleAddCity(id, long, lat);
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
