/* eslint-disable react/prop-types */

import { useState } from "react";

function Skills({
  setSkills,
  setSkills1,
  setSkills2,
  setSkills3,
  setSkills4,
  setSkills5,
  setSkills6,
  setSkills7,
  setSkills8,
  setSkills9,
}) {
  const [inputSkills, setInputSkills] = useState("");
  const [inputSkills1, setInputSkills1] = useState("");
  const [inputSkills2, setInputSkills2] = useState("");
  const [inputSkills3, setInputSkills3] = useState("");
  const [inputSkills4, setInputSkills4] = useState("");
  const [inputSkills5, setInputSkills5] = useState("");
  const [inputSkills6, setInputSkills6] = useState("");
  const [inputSkills7, setInputSkills7] = useState("");
  const [inputSkills8, setInputSkills8] = useState("");
  const [inputSkills9, setInputSkills9] = useState("");

  const handelingInputSkills = (e) => {
    e.preventDefault();
    setInputSkills(e.target.value);
    setSkills(e.target.value);
  };
  const handelingInputSkills1 = (e) => {
    e.preventDefault();
    setInputSkills1(e.target.value);
    setSkills1(e.target.value);
  };
  const handelingInputSkills2 = (e) => {
    e.preventDefault();
    setInputSkills2(e.target.value);
    setSkills2(e.target.value);
  };
  const handelingInputSkills3 = (e) => {
    e.preventDefault();
    setInputSkills3(e.target.value);
    setSkills3(e.target.value);
  };
  const handelingInputSkills4 = (e) => {
    e.preventDefault();
    setInputSkills4(e.target.value);
    setSkills4(e.target.value);
  };
  const handelingInputSkills5 = (e) => {
    e.preventDefault();
    setInputSkills5(e.target.value);
    setSkills5(e.target.value);
  };
  const handelingInputSkills6 = (e) => {
    e.preventDefault();
    setInputSkills6(e.target.value);
    setSkills6(e.target.value);
  };
  const handelingInputSkills7 = (e) => {
    e.preventDefault();
    setInputSkills7(e.target.value);
    setSkills7(e.target.value);
  };
  const handelingInputSkills8 = (e) => {
    e.preventDefault();
    setInputSkills8(e.target.value);
    setSkills8(e.target.value);
  };
  const handelingInputSkills9 = (e) => {
    e.preventDefault();
    setInputSkills9(e.target.value);
    setSkills9(e.target.value);
  };

  return (
    <div>
      <h2>Skills</h2>
      <div className="scrollable-div">
        <input
          type="text"
          placeholder="Team Work"
          value={inputSkills}
          onChange={handelingInputSkills}
        />
        <input
          type="text"
          placeholder="HTML"
          value={inputSkills1}
          onChange={handelingInputSkills1}
        />
        <input
          type="text"
          placeholder="CSS"
          value={inputSkills2}
          onChange={handelingInputSkills2}
        />
        <input
          type="text"
          placeholder="JavaScript"
          value={inputSkills3}
          onChange={handelingInputSkills3}
        />
        <input
          type="text"
          placeholder="Tailwind"
          value={inputSkills4}
          onChange={handelingInputSkills4}
        />
        <input
          type="text"
          placeholder="Critical Thinking"
          value={inputSkills5}
          onChange={handelingInputSkills5}
        />
        <input
          type="text"
          placeholder="React.js"
          value={inputSkills6}
          onChange={handelingInputSkills6}
        />
        <input
          type="text"
          placeholder="PHP"
          value={inputSkills7}
          onChange={handelingInputSkills7}
        />
        <input
          type="text"
          placeholder="Node.js"
          value={inputSkills8}
          onChange={handelingInputSkills8}
        />
        <input
          type="text"
          placeholder="MongoDB"
          value={inputSkills9}
          onChange={handelingInputSkills9}
        />
      </div>
    </div>
  );
}

export default Skills;
