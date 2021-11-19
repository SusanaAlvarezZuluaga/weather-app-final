import { useEffect } from 'react';
import SearchBar from '../components/SearchBar';

import '../styles/SearchPage.css';

function SearchPage(props) {
  const { handleAddCity, slideToCity, setSearchPageOpen } = props;
  return (
    <div className="searchPage">
      <div
        className="iconHolderReturnArrow"
        onClick={() => {
          props.setSearchPageOpen(false);
        }}
      >
        <span className="material-icons returnArrow">arrow_back</span>
      </div>
      <SearchBar
        handleAddCity={handleAddCity}
        slideToCity={slideToCity}
        handleReturnArrow={props.handleReturnArrow}
        setSearchPageOpen={setSearchPageOpen}
      />
    </div>
  );
}

export default SearchPage;
