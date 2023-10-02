/* eslint-disable react/prop-types */

import { useState } from "react";

function Lang({ setLang, setLang1, setLang2, setLang3 }) {
  const [inputLang, setInputLang] = useState("");
  const [inputLang1, setInputLang1] = useState("");
  const [inputLang2, setInputLang2] = useState("");
  const [inputLang3, setInputLang3] = useState("");

  const handelingInputLang = (e) => {
    e.preventDefault();
    setInputLang(e.target.value);
    setLang(e.target.value);
  };
  const handelingInputLang1 = (e) => {
    e.preventDefault();
    setInputLang1(e.target.value);
    setLang1(e.target.value);
  };
  const handelingInputLang2 = (e) => {
    e.preventDefault();
    setInputLang2(e.target.value);
    setLang2(e.target.value);
  };
  const handelingInputLang3 = (e) => {
    e.preventDefault();
    setInputLang3(e.target.value);
    setLang3(e.target.value);
  };

  return (
    <div>
      <h2>Languages</h2>
      <div className="scrollable-div lang">
        <input
          type="text"
          placeholder="Deutsch"
          value={inputLang}
          onChange={handelingInputLang}
        />
        <input
          type="text"
          placeholder="Italian"
          value={inputLang1}
          onChange={handelingInputLang1}
        />
        <input
          type="text"
          placeholder="English"
          value={inputLang2}
          onChange={handelingInputLang2}
        />
        <input
          type="text"
          placeholder="Spanish"
          value={inputLang3}
          onChange={handelingInputLang3}
        />
      </div>
    </div>
  );
}

export default Lang;
