/* eslint-disable react/prop-types */

import { useState } from "react";

function Contact({ setWebsite, setEmail, setLocation, setPhone }) {
  const [inputWebsite, setInputWebsite] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputLocation, setInputLocation] = useState("");
  const [inputPhone, setInputPhone] = useState("");

  const handleWebsiteInput = (e) => {
    e.preventDefault();
    setInputWebsite(e.target.value);
    setWebsite(e.target.value);
  };
  const handleEmailInput = (e) => {
    e.preventDefault();
    setInputEmail(e.target.value);
    setEmail(e.target.value);
  };
  const handleLocationInput = (e) => {
    e.preventDefault();
    setInputLocation(e.target.value);
    setLocation(e.target.value);
  };
  const handlePhoneInput = (e) => {
    e.preventDefault();
    setInputPhone(e.target.value);
    setPhone(e.target.value);
  };

  return (
    <div className="contact-container">
      <h2 className="title">Contact</h2>
      <div className="input-website">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          placeholder="something.github.oi"
          value={inputWebsite}
          onChange={handleWebsiteInput}
          name="website"
        />
      </div>
      <div className="input-email">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="something@gmail.com"
          value={inputEmail}
          onChange={handleEmailInput}
          name="email"
        />
      </div>
      <div className="input-location">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          placeholder="Tirana, AL"
          value={inputLocation}
          onChange={handleLocationInput}
          name="location"
        />
      </div>
      <div className="input-number">
        <label htmlFor="tel">Phone</label>
        <input
          type="tel"
          placeholder="0690000000"
          value={inputPhone}
          onChange={handlePhoneInput}
          name="tel"
        />
      </div>
    </div>
  );
}

export default Contact;
