import { useState } from 'react';
//Woman
import womanCold from '../images/womanCold.png';
import womanTooCold from '../images/womanTooCold.png';
import womanNormal from '../images/womanNormal.png';
import womanHot from '../images/womanHot.png';
import womanTooHot from '../images/womanTooHot.png';

//Umbrella
import womanUmbrellaCold from '../images/womanUmbrellaCold.png';
import womanUmbrellaTooCold from '../images/womanUmbrellaTooCold.png';
import womanUmbrellaNormal from '../images/womanUmbrellaNormal.png';
import womanUmbrellaHot from '../images/womanUmbrellaHot.png';
import womanUmbrellaTooHot from '../images/womanUmbrellaTooHot.png';

//Man
import manCold from '../images/manCold.png';
import manTooCold from '../images/manTooCold.png';
import manNormal from '../images/manNormal.png';
import manHot from '../images/manHot.png';
import manTooHot from '../images/manTooHot.png';

//Umbrella
import manUmbrellaCold from '../images/manUmbrellaCold.png';
import manUmbrellaTooCold from '../images/manUmbrellaTooCold.png';
import manUmbrellaNormal from '../images/manUmbrellaNormal.png';
import manUmbrellaHot from '../images/manUmbrellaHot.png';
import manUmbrellaTooHot from '../images/manUmbrellaTooHot.png';

function CityCardClothesTips(props) {
  const { temperature, weatherCondition, clientName, clientGender } = props;
  const [avatarClicked, setAvatarClicked] = useState(false);
  let avatar;
  let tipsMessage = '';
  let goingToRain = false;
  let tipsClass;
  avatarClicked ? (tipsClass = 'tipsDisplay') : (tipsClass = 'tipsHide');
  if (temperature <= 5) {
    tipsMessage =
      "It's very cold today, you should go out only if you need to. Gear Up! Jacket, gloves, scarf, hat and a nice pair of boots will come in handy!";
    if (
      weatherCondition === 'Rain' ||
      weatherCondition === 'Drizzle' ||
      weatherCondition === 'Thunderstorm'
    ) {
      goingToRain = true;
      if (clientGender === 'male') {
        avatar = manUmbrellaTooCold;
      } else {
        avatar = womanUmbrellaTooCold;
      }
    } else {
      if (clientGender === 'male') {
        avatar = manTooCold;
      } else {
        avatar = womanTooCold;
      }
    }
  } else if (temperature > 5 && temperature <= 15) {
    tipsMessage =
      "Today it's cold outside remember to wear your favorite jacket, long sleeves and warm clothes.";
    if (
      weatherCondition === 'Rain' ||
      weatherCondition === 'Drizzle' ||
      weatherCondition === 'Thunderstorm'
    ) {
      goingToRain = true;
      if (clientGender === 'male') {
        avatar = manUmbrellaCold;
      } else {
        avatar = womanUmbrellaCold;
      }
    } else {
      if (clientGender === 'male') {
        avatar = manCold;
      } else avatar = womanCold;
    }
  } else if (temperature > 15 && temperature <= 25) {
    tipsMessage =
      'The temperature is moderate today, if going outside is your cup of tea...  Do it! Wear confortable clothes and shoes and enjoy!';
    if (
      weatherCondition === 'Rain' ||
      weatherCondition === 'Drizzle' ||
      weatherCondition === 'Thunderstorm'
    ) {
      goingToRain = true;
      if (clientGender === 'male') {
        avatar = manUmbrellaNormal;
      } else {
        avatar = womanUmbrellaNormal;
      }
    } else {
      if (clientGender === 'male') {
        avatar = manNormal;
      } else {
        avatar = womanNormal;
      }
    }
  } else if (temperature > 25 && temperature <= 35) {
    tipsMessage =
      "It's gettin' hot in here...put on fresh, cool clothes. Enjoy the hot weather.";
    if (
      weatherCondition === 'Rain' ||
      weatherCondition === 'Drizzle' ||
      weatherCondition === 'Thunderstorm'
    ) {
      goingToRain = true;
      if (clientGender === 'male') {
        avatar = manUmbrellaHot;
      } else {
        avatar = womanUmbrellaHot;
      }
    } else {
      if (clientGender === 'male') {
        avatar = manHot;
      } else {
        avatar = womanHot;
      }
    }
  } else if (temperature > 35) {
    tipsMessage =
      "It is boiling hot today! Remember to keep hydrated and find some 'cool' cool places to stay in.";
    if (
      weatherCondition === 'Rain' ||
      weatherCondition === 'Drizzle' ||
      weatherCondition === 'Thunderstorm'
    ) {
      goingToRain = true;
      if (clientGender === 'male') {
        avatar = manUmbrellaTooHot;
      } else {
        avatar = womanUmbrellaTooHot;
      }
    } else {
      if (clientGender === 'male') {
        avatar = manTooHot;
      } else {
        avatar = womanTooHot;
      }
    }
  }

  return (
    <div className="cityCardTipsContainer">
      <div class="avatarHolder">
        <img
          alt="avatar"
          className="avatarImg"
          src={avatar}
          onClick={() => setAvatarClicked(!avatarClicked)}
        />
      </div>
      <div className={`writtenTips ${tipsClass}`}>
        <div className="greeting">{clientName}</div>
        <div className="tip"> {tipsMessage}</div>
        <div className="tip">
          {goingToRain ? "⚠️ Don't forget your umbrella!" : null}
        </div>
      </div>
    </div>
  );
}

export default CityCardClothesTips;
