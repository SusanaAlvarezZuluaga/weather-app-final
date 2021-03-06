import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import MenuPage from './MenuPage';
import SearchPage from './SearchPage';

import '../styles/HomePage.css';
import SwiperCities from '../components/SwiperCities';

function HomePage(props) {
  const { name, gender, cityList, setCityList, handleAddCity } = props;
  const [menuPageOpen, setMenuPageOpen] = useState(false);
  const [searchPageOpen, setSearchPageOpen] = useState(false);
  const [swiper, setSwiper] = useState(null);
  const slideToCity = (index) => {
    swiper.slideTo(index);
  };
  //run only when mounted
  useEffect(() => {
    if (cityList.length > 1) {
      setCityList([cityList[0]]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (cityList.length === 0) {
    return <Redirect to="/" basename={process.env.PUBLIC_URL} />;
  } else {
    return (
      <div>
        <div className="homePage">
          <SwiperCities
            cityList={cityList}
            clientName={name}
            clientGender={gender}
            setSwiper={setSwiper}
            setMenuPageOpen={setMenuPageOpen}
            slideToCity={slideToCity}
          />
        </div>
        <div>
          {menuPageOpen ? (
            <MenuPage
              cityList={cityList}
              setMenuPageOpen={setMenuPageOpen}
              handleAddCity={handleAddCity}
              slideToCity={slideToCity}
              setSearchPageOpen={setSearchPageOpen}
            />
          ) : null}
          {searchPageOpen ? (
            <SearchPage
              handleAddCity={handleAddCity}
              slideToCity={slideToCity}
              setSearchPageOpen={setSearchPageOpen}
              setMenuPageOpen={setMenuPageOpen}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default HomePage;
