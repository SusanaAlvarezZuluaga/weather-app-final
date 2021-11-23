import CityThumb from '../components/CityThumb';
import '../styles/MenuPage.css';

function MenuPage(props) {
  const { cityList, setMenuPageOpen, slideToCity, setSearchPageOpen } = props;
  return (
    <div className="menuPage">
      <div
        className="iconHolderReturnArrow"
        onClick={() => {
          setMenuPageOpen(false);
        }}
      >
        <span className="material-icons returnArrow">arrow_back</span>
      </div>
      <div className="menuPageTitle">Your Cities</div>
      <div className="cityThumbsHolder">
        {cityList.map((city, index) => (
          <CityThumb
            key={index}
            cityIndex={index}
            currentInfo={city.currentInfo}
            slideToCity={slideToCity}
            setMenuPageOpen={setMenuPageOpen}
          />
        ))}
      </div>
      <div
        className="searchBarIconHolder"
        onClick={() => {
          window.scrollTo(0, 0);
          setSearchPageOpen(true);
          setMenuPageOpen(false);
        }}
      >
        <span className="material-icons md-36">search</span>
      </div>
    </div>
  );
}

export default MenuPage;
