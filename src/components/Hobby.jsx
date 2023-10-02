/* eslint-disable react/prop-types */

import { useState } from "react";

function Hobby({ setHobby, setHobby1, setHobby2, setHobby3, setHobby4 }) {
  const [inputHobby, setInputHobby] = useState("");
  const [inputHobby1, setInputHobby1] = useState("");
  const [inputHobby2, setInputHobby2] = useState("");
  const [inputHobby3, setInputHobby3] = useState("");
  const [inputHobby4, setInputHobby4] = useState("");

  const handelingInputHobby = (e) => {
    e.preventDefault();
    setInputHobby(e.target.value);
    setHobby(e.target.value);
  };
  const handelingInputHobby1 = (e) => {
    e.preventDefault();
    setInputHobby1(e.target.value);
    setHobby1(e.target.value);
  };
  const handelingInputHobby2 = (e) => {
    e.preventDefault();
    setInputHobby2(e.target.value);
    setHobby2(e.target.value);
  };
  const handelingInputHobby3 = (e) => {
    e.preventDefault();
    setInputHobby3(e.target.value);
    setHobby3(e.target.value);
  };
  const handelingInputHobby4 = (e) => {
    e.preventDefault();
    setInputHobby4(e.target.value);
    setHobby4(e.target.value);
  };
  return (
    <div>
      <h2>Hobbies</h2>
      <div className="scrollable-div hobby">
        <input
          type="text"
          placeholder="Travelling"
          value={inputHobby}
          onChange={handelingInputHobby}
        />
        <input
          type="text"
          placeholder="Outdoor Actvity"
          value={inputHobby1}
          onChange={handelingInputHobby1}
        />
        <input
          type="text"
          placeholder="Reading"
          value={inputHobby2}
          onChange={handelingInputHobby2}
        />
        <input
          type="text"
          placeholder="Photography"
          value={inputHobby3}
          onChange={handelingInputHobby3}
        />
        <input
          type="text"
          placeholder="Hiking"
          value={inputHobby4}
          onChange={handelingInputHobby4}
        />
      </div>
    </div>
  );
}

export default Hobby;
