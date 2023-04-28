import React from 'react';
import './aboutus.css';
/** About us section */
const AboutUs = () => {
  return (
    <div classname="about-us">
      <div id= "left">
        <h1>Why we are doing this?</h1>
      </div>
      <div id="right">
      <h1>The team</h1>
        <div id="allmembers">
          <div className="member">
           <img src="/images/AnokhiShah.jpeg" alt="Team Member Anokhi Shah"></img>
            <h2>Anokhi Shah</h2>
          </div>
          <div className="member">
            <h2>Tyrell Garza</h2>
          </div>
          <div className="member">
            <h2>Fatima Laghari</h2>
          </div>
          <div className="member">
            <h2>Dellina Gebrehiwot</h2>
          </div>
          <div className="member">
            <h2>Kathy Thin</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;