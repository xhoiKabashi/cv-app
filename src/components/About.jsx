/* eslint-disable react/prop-types */
import { useState } from "react";

useState;
function Name({ setName, setLast, setProfession, setInfo }) {
  const [inputName, setInputName] = useState(""); // handle input name
  const [inputLast, setInputLast] = useState(""); /// handle last name input
  const [inputProfession, setInputProfession] = useState(""); // handle email input
  const [inputAbout, setInputAbout] = useState(""); // handle about input

  // handle input name
  const handleInputName = (e) => {
    e.preventDefault();
    setInputName(e.target.value);
    setName(e.target.value);
  };
  /// handle last name input
  const handleInputLast = (e) => {
    e.preventDefault();
    setInputLast(e.target.value);
    setLast(e.target.value);
  };
  //handle email input
  const handleInputProfession = (e) => {
    e.preventDefault();
    setInputProfession(e.target.value);
    setProfession(e.target.value);
  };
  // handle above input input
  const handleInputAbout = (e) => {
    e.preventDefault();
    setInputAbout(e.target.value);
    setInfo(e.target.value);
  };
  return (
    <div className="about-container">
      <h2 className="title">About</h2>
      <div className="inputName active-border">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Your First Name"
          value={inputName}
          onChange={handleInputName}
          name="name"
        />
      </div>
      <div className="inputLast active-border">
        <label htmlFor="lastname">Last Name</label>
        <input /// handle last name input
          type="text"
          placeholder="Your Last Name"
          value={inputLast}
          onChange={handleInputLast}
          name="lastname"
        />
      </div>
      <div className="profession active-border">
        <label htmlFor="email">Professional Title</label>
        <input // handle email input
          type="text"
          placeholder="Your Profession"
          value={inputProfession}
          onChange={handleInputProfession}
        />
      </div>
      <div className="profile active-border">
        <label htmlFor="about">About Your Profile</label>
        <textarea // handle about input
          type="text"
          placeholder="I am a Web Developer with special love to React..."
          value={inputAbout}
          onChange={handleInputAbout}
          name="about"
        />
      </div>
    </div>
  );
}

export default Name;
