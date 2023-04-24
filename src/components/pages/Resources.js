import React from 'react';
import './resources.css';


const Resources = () => {
  // Create a new div element with class 'box'
  const box = document.createElement("div");
  box.classList.add("box");

  // Create an h2 element for the box title
  const title = document.createElement("h2");
  title.textContent = "Box Title";

  // Create a p element for the box content
  const content = document.createElement("p");
  content.textContent = "Box content goes here";

  // Append the title and content to the box element
  box.appendChild(title);
  box.appendChild(content);

  // Append the box element to the body of the page
  document.body.appendChild(box);

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
