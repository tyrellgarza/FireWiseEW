import React, { useEffect, useState } from 'react';
import './impact.css';

const Year = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='year'>
      <button onClick={() => setIsOpen(!isOpen)}>
        {data.year}
      </button>
      {isOpen && data.fires.map((fire, index) => (
        <div key={index} className='fire'>
          <h2>{fire.name}</h2>
          <p>Start date: {fire.start_date}</p>
          <p>Location: {fire.location}</p>
          <p>Acres burned: {fire.acres_burned}</p>
          <p>Impact: {fire.impact}</p>
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
        <p> The below timeline illustrates the biggest wildfires to date in Eastern Washington from the years 2017 through 2022.
        </p>
        <div id="timeline">
          {data && data.map((year, index) => <Year key={index} data={year} />)}
        </div>
      </div>
      <div className="section-funding">
        <h1 className="title3">Fundraising and Donation Opportunities</h1>
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
