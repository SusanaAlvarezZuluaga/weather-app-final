import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import SwiperCore, { Pagination, Navigation, Thumbs, FreeMode } from 'swiper';
import { Link } from 'react-router-dom';
//import logo
import logo from '../images/white-logo.png';
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/pagination/pagination.scss'; // Pagination module
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/thumbs/thumbs.scss';
import CityCard from '../components/CityCard';

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Thumbs, FreeMode]);
function SwiperCities(props) {
  const { setSwiper, cityList, clientName, clientGender, setMenuPageOpen } =
    props;

  const pagination = {
    el: '.dotsContainer',
    clickable: true,
    bulletClass: 'bullet',
    bulletActiveClass: 'bulletActive',
  };
  const navigation = {
    prevEl: '.arrow1',
    nextEl: '.arrow2',
  };
  return (
    <div>
      <Swiper
        onSwiper={setSwiper}
        className="mainSlider"
        slidesPerView={1}
        grabCursor={true}
        noSwiping={true}
        noSwipingClass="hourlyForecastsHolder"
        preventClicks={true}
        navigation={navigation}
        pagination={pagination}
      >
        {cityList.map((city, index) => (
          <SwiperSlide className="slide" key={index}>
            <CityCard
              id={index}
              currentInfo={city.currentInfo}
              utcOffset={city.utcOffset}
              hourlyForecast={city.hourlyForecast}
              dailyForecast={city.dailyForecast}
              clientName={clientName}
              clientGender={clientGender}
            />
          </SwiperSlide>
        ))}
        <div className="navigation">
          <div className="arrow1Container">
            <div className="arrow1">
              <span className="material-icons arrows"> arrow_back_ios</span>
            </div>
          </div>
          <div className="arrow2Container">
            <div className="arrow2">
              <span className="material-icons arrows"> arrow_forward_ios</span>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="logo-holder">
            <Link to="/">
              <img src={logo} className="logo" alt="logo" />
            </Link>
          </div>
          <div className="pagination">
            <div className="dotsContainer"></div>
          </div>
          <div
            className="searchBar"
            onClick={() => {
              window.scrollTo(0, 0);
              setMenuPageOpen(true);
            }}
          >
            <span className="material-icons md-36">menu</span>
          </div>
        </div>
      </Swiper>
    </div>
  );
}
export default SwiperCities;
