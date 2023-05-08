import React, { useEffect } from 'react';
import './resources.css';

const ResourcePage = () => {
  return (
    <div>
      <h1>Wildfire Resources</h1>
      <h2>National Interagency Fire Center:</h2>
      <a href="https://www.nifc.gov/fire-information">
        https://www.nifc.gov/fire-information
      </a>
      <p>
        National Interagency Fire Center (NIFC), establishes Preparedness Levels
        throughout the calendar year to ensure suppression resource availability
        for emerging incidents across the country. Preparedness Levels are
        dictated by fuel and weather conditions, fire activity, and fire
        suppression resource availability throughout the country.
      </p>

      <h2>Washington Smoke Information:</h2>
      <a href="https://wasmoke.blogspot.com/">
        https://wasmoke.blogspot.com/
      </a>
      <p>
        This website provides real-time air quality information for Washington
        state, including Eastern Washington. It also provides information on
        smoke forecasts, health impacts, and other useful resources.
      </p>

      <h2>Ready.gov Wildfires Preparedness:</h2>
      <a href="https://www.ready.gov/wildfires">
        https://www.ready.gov/wildfires
      </a>
      <p>
        This website provides information on how to prepare for and respond to
        wildfires, including those in Eastern Washington. It includes tips on
        evacuation, emergency supplies, and creating defensible space around
        your home.
      </p>

      <h2>American Red Cross Wildfire Safety:</h2>
      <a href="https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/wildfire.html">
        https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/wildfire.html
      </a>
      <p>
        This website provides information on how to prepare for and respond to
        wildfires, including those in Eastern Washington. It includes tips on
        evacuation, emergency supplies, and creating defensible space around
        your home.
      </p>

      <h2>Washington State Department of Natural Resources:</h2>
      <a href="https://www.dnr.wa.gov/Wildfire">
        https://www.dnr.wa.gov/Wildfire
      </a>
      <p>
        This website provides information on wildfire prevention, preparedness,
        and response in Washington state. It includes information on fire danger
        ratings, burn restrictions, and wildfire statistics.
      </p>
    </div>
  );
};

export default ResourcePage;
