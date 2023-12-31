/* eslint-disable react/prop-types */

import { useState } from "react";

function Work({
  setJobTitle,
  setCompany,
  setWorkFromDate,
  setWorkToDate,
  setDs,
}) {
  const [inputTitle, setInputTitle] = useState("");
  const [inputCompany, setInputCompany] = useState("");
  const [inputWorkFromDate, setWorkInputFromDate] = useState("");
  const [inputWorkToDate, setWorkInputToDate] = useState("");
  const [inputWorkDs, setInputWorkDs] = useState("");

  const handelingInputTitle = (e) => {
    e.preventDefault();
    setInputTitle(e.target.value);
    setJobTitle(e.target.value);
  };
  const handelingInputCompany = (e) => {
    e.preventDefault();
    setInputCompany(e.target.value);
    setCompany(e.target.value);
  };
  const handelingInputWorkFromDate = (e) => {
    e.preventDefault();
    setWorkInputFromDate(e.target.value);
    setWorkFromDate(e.target.value);
  };
  const handelingInputWorkToDate = (e) => {
    e.preventDefault();
    setWorkInputToDate(e.target.value);
    setWorkToDate(e.target.value);
  };
  const handelingInputDs = (e) => {
    e.preventDefault();
    setInputWorkDs(e.target.value);
    setDs(e.target.value);
  };

  return (
    <div className="work-container">
      <h2 className="title"> Work</h2>
      <div className="inputTitle">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="Web Developer"
          value={inputTitle}
          onChange={handelingInputTitle}
          name="title"
        />
      </div>
      <div className="inputCompany">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          placeholder="Protik ICT"
          value={inputCompany}
          onChange={handelingInputCompany}
          name="company"
        />
      </div>
      <div className="fromWork">
        <label htmlFor="uni">From</label>
        <input
          type="tel"
          placeholder="2021"
          value={inputWorkFromDate}
          onChange={handelingInputWorkFromDate}
          name="from"
          maxLength={7}
        />
      </div>
      <div className="toWork">
        <label htmlFor="to">To</label>
        <input
          type="tel"
          maxLength={7}
          placeholder="2023"
          value={inputWorkToDate}
          onChange={handelingInputWorkToDate}
          name="to"
        />
      </div>

      <div className="profile active-border workDes">
        <label htmlFor="des">Description</label>
        <textarea // handle about input
          type="text"
          placeholder="I use to work as a web developer at Google..."
          value={inputWorkDs}
          onChange={handelingInputDs}
          name="des"
        />
      </div>
    </div>
  );
}

export default Work;
