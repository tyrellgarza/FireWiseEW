import React from 'react';
import './impact.css';


const Impact = () => {
  // Get all timeline events
  const timelineEvents = document.querySelectorAll('.timeline-event');

  // Add click event listener to each event
  timelineEvents.forEach(event => {
    event.addEventListener('click', () => {
      // Toggle active class to show/hide event details
      const description = event.querySelector('.info');
      description.classList.toggle('hidden');
    });
  });

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
          <div class="timeline-event">
            <div class="event-date">2017</div>
            <div class="event-description">Test 1</div>
            <div className='info'>
              <p>this is a test</p>
            </div>
          </div>
          <div class="timeline-event">
            <div class="event-date">2018</div>
            <div class="event-description">info</div>
          </div>
          <div class="timeline-event">
            <div class="event-date">2019</div>
            <div class="event-description">info</div>
          </div>
          <div class="timeline-event">
            <div class="event-date">2020</div>
            <div class="event-description">info</div>
          </div>
          <div class="timeline-event">
            <div class="event-date">2021</div>
            <div class="event-description">info</div>
          </div>
          <div class="timeline-event">
            <div class="event-date">2022</div>
            <div class="event-description">info</div>
          </div>

        </div>

      </div>
      <div className="section-funding">
        <h1>Fundraising and Donation Opportunities</h1>
      </div>
    </div>
  );
};

export default Impact;