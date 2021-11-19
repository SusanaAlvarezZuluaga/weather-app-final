import data from '../data/city.list.json';
function GetCityResults(cityName) {
  let resp = [];
  if (cityName !== '') {
    for (let i = 0; i < data.length && resp.length < 15; i++) {
      if (data[i].name.toLowerCase().startsWith(cityName.toLowerCase())) {
        resp.push({
          id: data[i].id,
          long: data[i].coord.lon,
          lat: data[i].coord.lat,
          name: data[i].name,
          state: data[i].state,
          country: data[i].country,
        });
      }
    }
  }
  return resp;
}
export default GetCityResults;
