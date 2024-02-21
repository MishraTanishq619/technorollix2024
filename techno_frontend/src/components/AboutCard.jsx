import React from "react";

function AboutCard({ imageLink = "logo.png", text = "default" }) {
  return (
    <>
      <div id="about-container" className="bg-red-500 ">
        <div id="about" className="bg-yellow-500 flex ">
          <div id="about-pic" className="bg-green-200">
            <img src={imageLink}></img>
          </div>
          <div id="about-text" className="bg-gren-600">
            {text}
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutCard;
