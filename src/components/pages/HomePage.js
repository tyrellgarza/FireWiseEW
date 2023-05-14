import React, { useEffect } from 'react';
import './homepage.css';

const HomePage = () => {
  useEffect(() => {
    const video = document.createElement('video');
    video.src = '/wildfirevideo.mp4';
    video.type = 'video/mp4';
    video.loop = true;
    video.muted = true;
    video.autoplay = true;
    video.playsInline = true;
    video.className = 'background-video';

    video.addEventListener('load', () => {
      video.play();
    });

    document.body.appendChild(video);

    return () => {
      document.body.removeChild(video);
    };
  }, []);

  return (
    <div className="content">
      <h1 className="title">Welcome to FirewiseEW</h1>
      <div className="description">
        <p>
          FirewiseEW offers comprehensive insights of wildfires occuring in the Eastern Washington
          region, featuring valuable resources, in-depth analysis of wildfire
          impacts, and a timeline documenting the region's fire history.
        </p>
      </div>
      <div className="map-container">
        <iframe
          title="Interactive Wildfire Map"
          src="https://maps.nwcg.gov/sa/#/%3F/%3F/47.4525/-119.6774/7"
          className="map"
        ></iframe>
      </div>
    </div>
  );
};

export default HomePage;
