import React from 'react';
import './aboutus.css';

/** About us section */
const AboutUs = () => {
  return (
    <div className="about-us-page">
      <div classname="about-us">
        <div id="left">
          <div className="center-container">
            <div id="header">
              <h1 className="aboutTitle">Why we are doing this?</h1>
            </div>
            <p className="centered-block"> We believe that residents of Eastern Washington can benefit from
              a resource like this in times of peril. Being a region particularly
              prone to wildfires, which are often unpredictable and destructive.
              In recent years, the incidence and intensity of wildfires in this region
              have been on the rise.
            </p>
          </div>
        </div>

        <div id="right">
          <div id="header">
            <h1 className="Team">Meet The Team</h1>
          </div>
          <div id="allmembers">
            <div className="member">
              <img src="/images/ShahAnokhi.jpg" alt="Team Member Anokhi Shah"></img>
              <h2>Anokhi Shah</h2>
            </div>
            <div className="member">
              <img src="/images/GarzaTyrell.jpg" alt="Team Member Tyrell Garza"></img>
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
    </div>
  );
};

export default AboutUs;