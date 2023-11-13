import React from 'react';
import aboutUsImage from '../assets/img-7.jpg'; 
import '../css/AboutUs.scss';
import "../css/navigation.scss";

const AboutUs = () => {
  return (
    <div className="about-us">
      <h2>Über Uns</h2>
	  <img src={aboutUsImage} alt="Über uns Bild" />
      <p>Willkommen bei unserem DC OnlineShop! Hier finden Sie ...</p>
      <p>Unsere Mission ist es, ...</p>
      <p>Unser Team besteht aus...</p>
      
    </div>
  );
}

export default AboutUs;

