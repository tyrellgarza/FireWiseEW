import React, { useEffect } from 'react';
import './resources.css';




const Resources = () => {
 useEffect(() => {
   // Create a new div element with class 'box'
   const box = document.createElement("div");
   box.classList.add("box");


   // Create an h2 element for the box title
   const title1 = document.createElement("h2");
   title1.textContent = "National Interagency Fire Center:";


   // Create a p element for the box content
   const content1 = document.createElement("p");
   content1.textContent = "National Interagency Fire Center (NIFC), establishes Preparedness Levels throughout the calendar year to ensure suppression resource availability for emerging incidents across the country. Preparedness Levels are dictated by fuel and weather conditions, fire activity, and fire suppression resource availability throughout the country. https://www.nifc.gov/fire-information";


   // Create an h2 element for the box title
   const title2 = document.createElement("h2");
   title2.textContent = "Washington Smoke Information:";


   // Create a p element for the box content
   const content2 = document.createElement("p");
   content2.textContent = "This website provides real-time air quality information for Washington state, including Eastern Washington. It also provides information on smoke forecasts, health impacts, and other useful resources. https://wasmoke.blogspot.com/";


   // Create an h2 element for the box title
   const title3 = document.createElement("h2");
   title3.textContent = "Ready.gov Wildfires Preparedness:";


   // Create a p element for the box content
   const content3 = document.createElement("p");
   content3.textContent = "This website provides information on how to prepare for and respond to wildfires, including those in Eastern Washington. It includes tips on evacuation, emergency supplies, and creating defensible space around your home. https://www.ready.gov/wildfires";


   // Append the first title and content to the box element
   box.appendChild(title1);
   box.appendChild(content1);


   // Create a new div element with class 'box'
   const box2 = document.createElement("div");
   box2.classList.add("box");


   // Append the second title and content to the second box element
   box2.appendChild(title2);
   box2.appendChild(content2);


   // Create a new div element with class 'box'
   const box3 = document.createElement("div");
   box3.classList.add("box");


   // Append the third title and content to the third box element
   box3.appendChild(title3);
   box3.appendChild(content3);


   // Create a new div element to contain the boxes
   const container = document.createElement("div");


   // Append the boxes to the container
   container.appendChild(box);
   container.appendChild(box2);
   container.appendChild(box3);


   // Append container element to the body of the page
   document.body.appendChild(container);
 }, []);


 return (
   <div>
     <h1>Resources</h1>
     <div className="resourceDesc">
       <p>
         add a description about the resource page
       </p>
     </div>
   </div>
  
 );
};


export default Resources;
