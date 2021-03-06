import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toast';
import { useHistory } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import SocialMedia from '../components/SocialMedia';
import logoWhite from '../images/logoWhite.png';
import '../styles/Login-Page.css';

function LoginPage(props) {
  const { name, gender, handleGenderChange, handleLoginPageName } = props;
  const [city, setCity] = useState('');
  let history = useHistory();

  const alertMsg = () => toast.error('Please fill all the fields');
  const redirect = () => {
    if (name === '' || gender === '' || city === '') {
      alertMsg();
    } else {
      history.push('/home');
    }
  };

  return (
    <div className="loginPage">
      <div className="logoContainer">
        <img className="logo-home-page" src={logoWhite} alt="logoWhite" />

        <div className="socialMediaDesktop">
          <SocialMedia />
        </div>
      </div>

      <div className="bodyStyle">
        <div className="writtenContent">
          <p className="bigText"> Tell us who and where you are...</p>
          <p className="smallerText"> We'll tell you what to wear!</p>
        </div>
        <form lang="en" className="formStyle">
          <input
            className="nameInput"
            name="name"
            type="text"
            placeholder="Please enter your Name"
            value={name}
            onChange={handleLoginPageName}
          />
          <div className="genderButtonsHolder">
            <input
              id="firstRadioButton"
              className="genderButton"
              type="radio"
              name="gender"
              value="female"
              data-icon=""
              onChange={handleGenderChange}
            />
            <input
              id="secondRadioButton"
              className="genderButton"
              type="radio"
              name="gender"
              value="male"
              data-icon=""
              onChange={handleGenderChange}
            />
          </div>

          <div className="centerButton">
            <SearchBar
              loginPageCall={true}
              handleAddCity={props.handleAddFirstCity}
              city={city}
              setCity={setCity}
            />
            <button className="submitButton" type="button" onClick={redirect}>
              Enter
            </button>
            <ToastContainer
              className="toastContainer toast"
              position="containerPosition"
              delay="3000"
            />
          </div>
        </form>
      </div>

      <div className="socialMediaMobile">
        <SocialMedia />
      </div>
    </div>
  );
}

export default LoginPage;
