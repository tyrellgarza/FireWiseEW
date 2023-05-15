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
      <h1>Impact</h1>
      <p> The wildfires that have taken place in Eastern Washington have created a lasting impact on surrounding areas.
        This page offers an in-depth analysis of wildfire impacts in order to better understand
        how these events affect us both short-term and long-term, as well as fundraising and donation opportunities.
      </p>
      <div className="section-timeline">
        <h1>Biggest Wildfires to Date in Eastern Washington</h1>
        <div id="timeline">
          {data && data.map((year, index) => <Year key={index} data={year} />)}
        </div>
      </div>
      <div className="section-funding">
        <h1>Fundraising and Donation Opportunities</h1>
      </div>
    </div>
  );
};

export default Impact;
