import React, { useEffect, useState } from 'react';
import './impact.css';

const getFireSeverityColor = (acres_burned) => {
  // Convert acres_burned to a number if it's not already
  const acres = typeof acres_burned === 'string' ? parseInt(acres_burned.replace(",", ""), 10) : acres_burned;

  // Return a different CSS class based on the number of acres burned
  if (acres >= 100000) {
    return 'severity-high';
  } else if (acres >= 50000) {
    return 'severity-medium';
  } else {
    return 'severity-low';
  }
}

const Year = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='year'>
      <button onClick={() => setIsOpen(!isOpen)}>
        {data.year}
        <span className='dropdown-icon'></span>
      </button>
      {isOpen && data.fires.map((fire, index) => (
        <div key={index} className={`fire ${getFireSeverityColor(fire.acres_burned)}`}>
          <h2>{fire.name}</h2>
          <p>
            <b>Start date:</b> {fire.start_date}<br></br>
            <b>Location:</b> {fire.location}<br></br>
            <b>Acres burned:</b> {fire.acres_burned}<br></br>
            <b>Impact:</b> {fire.impact}
          </p>
        </div>
      ))}
    </div>
  );
};

const Impact = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch the data from the JSON file
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setData(data.wildfires));
  }, []);

  return (
    <div className="content">
      <h1 className="impacttitle">Impact</h1>
      <p> The wildfires that have taken place in Eastern Washington have created a lasting impact on surrounding areas.
        This page offers an in-depth analysis of wildfire impacts in order to better understand
        how these events affect us both short-term and long-term, as well as fundraising and donation opportunities.
      </p>
      <img src="/images/impact.jpg" alt="Preparedness Levels" style={{ width: '500px' }}></img>
      <h3 className="caption">South of Lind, Washington. August 2022.</h3>
      <div className="section-timeline">
        
          <h1 className="title2">Biggest Wildfires to Date in Eastern Washington</h1>
          <div className="timeline-introduction">
          <p> The below timeline illustrates the biggest wildfires to date in Eastern Washington from the years 2017 through 2022.</p>

          <h2>Wildfire Timeline Severity</h2>
          {/* Color Legend */}
          <div className="severity-legend">
            <span className="severity-high-legend"></span><b>100,000+ Acres Burned (High Severity)</b><br></br>
            <span className="severity-medium-legend"></span><b>50,000 - 100,000 Acres burned (Medium Severity)</b><br></br>
            <span className="severity-low-legend"></span><b>Less than 50,000 Acres Burned (Low Severity)</b>
          </div>
        </div>

        <div id="timeline">
          {data && data.map((year, index) => <Year key={index} data={year} />)}
        </div>
      </div>
      
        <h1 className="title3">Fundraising and Donation Opportunities</h1>
        <div className="section-funding">
        <p> There are a number of fundraising and donation resources to help support the impact of Eastern Washington wildfires.
          Listed below are funding opportutnities to help rebuild and restore affected communities.
        </p>
        <h2>Go Fund Me</h2>
        <a href="https://www.gofundme.com/c/act/wildfire-relief/washington">
          How to Help Those Affected by the Washington Fires
        </a> <br></br>
        <h2>Red Cross</h2>
        <a href="https://www.redcross.org/local/washington/about-us/our-work/western-wildfires.html">
          Western Wildfires: Northwest Region
        </a> <br></br>
        <h2>KXLY</h2>
        <a href="https://www.kxly.com/news/local-news/here-s-how-you-can-donate-to-victims-of-washington-s-wildfires/article_13848719-be59-5214-bbdf-af33b08ac008.html">
          Here's How You Can Donate to Victims
        </a> <br></br>
      </div>
    </div>
  );
};

export default Impact;
