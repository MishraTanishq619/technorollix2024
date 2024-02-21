import React from "react";

function ContactCard({
  imageLink = "logo.png",
  name = "Dwayne Patel",
  branch = "branch",
  email = "email@gmail.com",
  phone = "9876786564",
}) {
  return (
    <>
      <div className="bg-red-300">
        <div id="contact-container" className="flex-row  bg-red-600 ">
          <div id="contact-pic">
            <img src={imageLink}></img>
          </div>
          <div id="name" className="bg-yellow-300">
            {name}
          </div>
          <div id="branch" className="bg-green-300">
            {branch}
          </div>
        </div>
        <div id="additional-dets" className="flex-row">
          <div id="email" className="bg-orange-400">
            {email}
          </div>
          <div id="phone" className="bg-pink-400">
            {phone}
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactCard;
