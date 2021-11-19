import { useEffect, useState } from 'react';
import axios from 'axios';
import GetCityResults from '../functions/GetCityResults';

import CityResult from '../components/CityResult';

function SearchBar(props) {
  let holderClass;
  if (props.loginPageCall) {
    holderClass = 'smallHolder';
  }
  const [cityName, setCityName] = useState('');
  const [dataFound, setDataFound] = useState([]);
  useEffect(() => {
    /* ---------------------------------------------------DIRECT CALL ---------------------------------------------------*/
    let results = GetCityResults(cityName);
    setDataFound(results);
    /* ---------------------------------------------------BACK END API CALL ---------------------------------------------------*/
    /* const apiUrl = `http://localhost:4000/api/cities?startsWith=${cityName}&limit=15`;
    axios.get(apiUrl).then((response) => setDataFound(response.data)); */
  }, [cityName]);

  function handleInputChange(e) {
    if (props.setCity) {
      props.setCity(e.target.value);
    }
    setCityName(e.target.value);
  }

  function handleCitySelect(city) {
    setCityName(city);
  }

  return (
    <div className="searchBarComponentHolder">
      <div className="searchBarHolder">
        <div className="iconHolderSearch">
          <span className="material-icons search">search</span>
        </div>
        <div className="searchSpaceHolder">
          <input
            className="searchSpace"
            id="fullName"
            type="text"
            autoComplete="off"
            placeholder="Search City"
            value={cityName}
            onChange={handleInputChange}
          />
        </div>
        <div
          className="iconHolderClear"
          onClick={() => {
            if (props.setCity) {
              props.setCity('');
            }
            setCityName('');
          }}
        >
          <span className="material-icons clear">clear</span>
        </div>
      </div>
      <div className={`cityResultsHolder ${holderClass}`}>
        {dataFound.map((cityResult) => (
          <CityResult
            key={cityResult.id}
            id={cityResult.id}
            long={cityResult.long}
            lat={cityResult.lat}
            name={cityResult.name}
            state={cityResult.state}
            country={cityResult.country}
            handleAddCity={props.handleAddCity}
            handleCitySelect={handleCitySelect}
            slideToCity={props.slideToCity}
            setSearchPageOpen={props.setSearchPageOpen}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
