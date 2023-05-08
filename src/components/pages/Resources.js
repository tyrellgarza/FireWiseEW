import React, { useEffect } from 'react';
import './resources.css';

const ResourcePage = () => {
  const brochures = [
    {
      title: "National Wildfire Coordinating Group Communicator's Guide for Wildland Fire Management",
      description: "Learn how to protect yourself and your property during wildfires by remembering fire mitigation strategies.",
      link: "https://gacc.nifc.gov/swcc/dc/azpdc/operations/documents/prevention-education/Reference-Material/Chapter%209_Fire%20Mitigation.pdf"
    },
    {
      title: "Wildfire Risk Reduction Safety Tips",
      description: "Find tips on reducing the risk of wildfires and protecting yourself and property.",
      link: "https://www.nfpa.org/-/media/Files/Public-Education/Resources/Safety-tip-sheets/WildfireRiskReductionSafetyTips.pdf"
    },
    {
      title: "Protect Your Property from Wildfire",
      description: "A FEMA guide on protecting your property from wildfires.",
      link: "https://www.fema.gov/sites/default/files/2020-11/fema_protect-your-property_wildfire.pdf"
    },
    {
      title: "7 Firewise Tips",
      description: "Discover 7 tips to make your property more resilient against wildfires.",
      link: "https://www.nfpa.org//-/media/Images/Public-Education/By-topic/Outdoors/7-Firewise-Tips-(1).pdf"
    },
    {
      title: "Wildfire Preparedness Checklist",
      description: "Use this checklist to ensure you are prepared for wildfire emergencies and guide you on what do to before, during, and after a wildfire.",
      link: "https://www.redcross.org/content/dam/redcross/get-help/pdfs/wildfire/EN_Wildfire-Safety-Checklist.pdf"
    }
  ];

  // Function to create a brochure element
  const createBrochureElement = (brochure) => {
    return (
      <div className="brochure">
        <h3>{brochure.title}</h3>
        <p>{brochure.description}</p>
        <a href={brochure.link} target="_blank" rel="noopener noreferrer">Click to Download</a>
      </div>
    );
  };

  // Function to populate the brochures
  const populateBrochures = () => {
    return brochures.map((brochure, index) => (
      <div key={index}>
        {createBrochureElement(brochure)}
      </div>
    ));
  };

  return (
    <div>
      <div className="container">
        <h1>Wildfire Resources</h1>
        <p> <strong> 
          These websites mentioned in this section serve as valuable resources for individuals seeking information and resources related to wildfires. They offer a range of information and tools to help people prepare for, respond to, and stay safe during wildfire events.
        </strong> </p>
        <br></br>

        <h2>National Interagency Fire Center:</h2>
        <a href="https://www.nifc.gov/fire-information">
          Click here for more information!
        </a> <br></br>
        <img src="/images/NationalInteragencyFireCenterIMG.jpg" alt="Preparedness Levels" style={{ width: '650px'}}></img>
        <p>
          National Interagency Fire Center (NIFC), establishes Preparedness Levels
          throughout the calendar year to ensure suppression resource availability
          for emerging incidents across the country. Preparedness Levels are
          dictated by fuel and weather conditions, fire activity, and fire
          suppression resource availability throughout the country.
        </p>

        <h2>Washington Smoke Information:</h2>
        <a href="https://wasmoke.blogspot.com/">
        Click here for more information!
        </a> <br></br>
        <img src="/images/waSmokeInfo.jpg" alt="WA Smoke Information" style={{ width: '650px'}}></img>
        <p>
          This website provides real-time air quality information for Washington
          state, including Eastern Washington. It also provides information on
          smoke forecasts, health impacts, and other useful resources.
        </p>

        <h2>Ready.gov Wildfires Preparedness:</h2>
        <a href="https://www.ready.gov/wildfires">
        Click here for more information!
        </a><br></br>
        <img src="/images/wildfiresReady.jpg" alt="Evacuation Illustration" style={{ width: '650px'}}></img>
        <p>
          This website provides information on how to prepare for and respond to
          wildfires, including those in Eastern Washington. It includes tips on
          evacuation, emergency supplies, and creating defensible space around
          your home.
        </p>

        <h2>American Red Cross Wildfire Safety:</h2>
        <a href="https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/wildfire.html">
        Click here for more information!
        </a> <br></br>
        <iframe title="vimeo-player" src="https://player.vimeo.com/video/496965172?h=fd1f8b94e6" width="640" height="360" frameborder="0"    allowfullscreen></iframe>
        <p>
          The webpage focuses on wildfires, providing information and resources for preparing, responding to, and recovering from these destructive emergencies. It covers topics like creating an emergency plan, wildfire safety tips, evacuation procedures, and reducing wildfire risk.
        </p>

        <br></br>
        <h1>Brochures:</h1>
        <div className="brochures-container">
          {populateBrochures()}
        </div>
      </div>
    </div>
  );
};

export default ResourcePage;
