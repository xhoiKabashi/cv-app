/* eslint-disable react/prop-types */

import { useState } from "react";

function Education2({ setDegree2, setUniversity2, setFromDate2, setToDate2 }) {
  const [inputDegree, setInputDegree] = useState("");
  const [inputUnversity, setInputUniversity] = useState("");
  const [inputFromDate, setInputFromDate] = useState("");
  const [inputToDate, setInputToDate] = useState("");

  const handelingInputDegree = (e) => {
    e.preventDefault();
    setInputDegree(e.target.value);
    setDegree2(e.target.value);
  };
  const handelingInputUniversity = (e) => {
    e.preventDefault();
    setInputUniversity(e.target.value);
    setUniversity2(e.target.value);
  };
  const handelingInputFromDate = (e) => {
    e.preventDefault();
    setInputFromDate(e.target.value);
    setFromDate2(e.target.value);
  };
  const handelingInputToDate = (e) => {
    e.preventDefault();
    setInputToDate(e.target.value);
    setToDate2(e.target.value);
  };

  return (
    <div className="education-container">
      <h2 className="title">Education/Master</h2>
      <div className="inputDegree">
        <label htmlFor="degree">Degree</label>
        <input
          type="text"
          placeholder="MSC IT"
          value={inputDegree}
          onChange={handelingInputDegree}
          name="degree"
        />
      </div>
      <div className="inputUni">
        <label htmlFor="uni">University</label>
        <input
          type="text"
          placeholder="Epoka University"
          value={inputUnversity}
          onChange={handelingInputUniversity}
          name="uni"
        />
      </div>
      <div className="fromEducation">
        <label htmlFor="uni">From</label>
        <input
          type="tel"
          placeholder="2015"
          value={inputFromDate}
          onChange={handelingInputFromDate}
          name="from"
          maxLength={4}
        />
      </div>
      <div className="toEducation">
        <label htmlFor="to">To</label>
        <input
          type="tel"
          maxLength={4}
          placeholder="2018"
          value={inputToDate}
          onChange={handelingInputToDate}
          name="to"
        />
      </div>
    </div>
  );
}

export default Education2;
