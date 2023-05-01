import React from 'react';
import './aboutus.css';
/** About us section */
const AboutUs = () => {
  return (
    <div classname="about-us">
      <div id="left">
        <h1>Why we are doing this?</h1>
      </div>
      <div id="right">
        <h1>The team</h1>
        <div id="allmembers">
          <div className="member">
            <img src="/images/AnokhiShah.jpg" alt="Team Member Anokhi Shah"></img>
            <h2>Anokhi Shah</h2>
          </div>
          <div className="member">
            <img src="/images/TyrellGarza.jpg" alt="Team Member Tyrell Garza"></img>
            <h2>Tyrell Garza</h2>
          </div>
          <div className="member">
            <img src="/images/FatimaLaghari.jpg" alt="Team Member Fatima Laghari"></img>
            <h2>Fatima Laghari</h2>
          </div>
          <div className="member">
            <img src="/images/DellinaGebrehiwot.jpg" alt="Team Member Dellina Gebrehiwot"></img>
            <h2>Dellina Gebrehiwot</h2>
          </div>
          <div className="member">
            <img src="/images/KathyThin.jpg" alt="Team Member Kathy Thin"></img>
            <h2>Kathy Thin</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;