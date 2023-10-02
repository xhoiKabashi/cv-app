import { useState } from "react";
import "./App.css";
import "./styles/info.css";
import "./styles/contact.css";
import "./styles/shared.css";
import "./styles/skills.css";
import "./styles/img.css";
import "./styles/work.css";
import "./styles/cvlayout.css";
import "./styles/education.css";
import "./styles/media.css";
import "./styles/hobby.css";
import "./styles/lang.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Education2 from "./components/Education2";
import Work from "./components/Work";
import Work2 from "./components/Work2";
import Skills from "./components/Skills";
import ImageUploader from "./components/Image";
import html2canvas from "html2canvas";
import jsPDF from "jsPDF";
import Hobby from "./components/Hobby";
import Lang from "./components/Lang";
import OtherExp from "./components/OtherExp";

function App() {
  // For the About component
  const [name, setName] = useState("");
  const [last, setLast] = useState("");
  const [profession, setProfession] = useState("");
  const [info, setInfo] = useState("");
  // For the Contact component
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  // For Education component
  const [degree, setDegree] = useState("");
  const [university, setUniversity] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  // For Education 2
  const [degree2, setDegree2] = useState("");
  const [university2, setUniversity2] = useState("");
  const [fromDate2, setFromDate2] = useState("");
  const [toDate2, setToDate2] = useState("");
  const [showEducation2, setShowEducation2] = useState(true);

  // For Work component
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [workFromDate, setWorkFromDate] = useState("");
  const [workToDate, setWorkToDate] = useState("");
  const [ds, setDs] = useState("");
  const [jobTitle2, setJobTitle2] = useState("");
  const [company2, setCompany2] = useState("");
  const [workFromDate2, setWorkFromDate2] = useState("");
  const [workToDate2, setWorkToDate2] = useState("");
  const [ds2, setDs2] = useState("");
  const [showWork2, setShowWork2] = useState(true);
  // for other experiences components
  const [jobTitle3, setJobTitle3] = useState("");
  const [company3, setCompany3] = useState("");
  const [workFromDate3, setWorkFromDate3] = useState("");
  const [workToDate3, setWorkToDate3] = useState("");
  const [ds3, setDs3] = useState("");
  // For Skills component
  const [skills, setSkills] = useState("");
  const [skills1, setSkills1] = useState("");
  const [skills2, setSkills2] = useState("");
  const [skills3, setSkills3] = useState("");
  const [skills4, setSkills4] = useState("");
  const [skills5, setSkills5] = useState("");
  const [skills6, setSkills6] = useState("");
  const [skills7, setSkills7] = useState("");
  const [skills8, setSkills8] = useState("");
  const [skills9, setSkills9] = useState("");
  // for Hobby components
  const [hobby, setHobby] = useState("");
  const [hobby1, setHobby1] = useState("");
  const [hobby2, setHobby2] = useState("");
  const [hobby3, setHobby3] = useState("");
  // for Language components
  const [lang, setLang] = useState("");
  const [lang1, setLang1] = useState("");
  const [lang2, setLang2] = useState("");
  const [lang3, setLang3] = useState("");

  // For Image component
  const [uploadedImage, setUploadedImage] = useState(null);
  const handleImageUpload = (imageData) => {
    setUploadedImage(imageData); // Update the state with the uploaded image data
  };

  const [next, setNext] = useState(0); //Handeling the switch of the forms
  const [loader, setLoader] = useState(false);

  const downloadPDF = () => {
    const capture = document.querySelector(".cv-container");
    setLoader(true);

    const scale = 4; // Increase the scale for higher quality (adjust as needed)

    html2canvas(capture, { scale: scale }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = (canvas.height * componentWidth) / canvas.width;

      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save("cv.pdf");
    });
  };

  const handleNextForm = (e) => {
    //Handeling the switch of the forms
    e.preventDefault();
    setNext((next + 1) % 9); //Handeling the switch of the forms
  };
  const handlePreviousForm = (e) => {
    //Handeling the switch of the forms
    e.preventDefault();
    setNext(next === 0 ? 8 : next - 1);
  };
  return (
    <>
      <div className="super-container">
        <div className="main-container">
          <form>
            {next === 0 && (
              <About
                setName={setName}
                setLast={setLast}
                setProfession={setProfession}
                setInfo={setInfo}
              />
            )}
            {next === 1 && (
              <Contact
                setWebsite={setWebsite}
                setEmail={setEmail}
                setLocation={setLocation}
                setPhone={setPhone}
              />
            )}
            {next === 2 && (
              <div className="education-btn-container">
                {/* Conditional rendering for Education component */}
                {showEducation2 ? (
                  <Education
                    setDegree={setDegree}
                    setUniversity={setUniversity}
                    setFromDate={setFromDate}
                    setToDate={setToDate}
                  />
                ) : (
                  <Education2
                    setDegree2={setDegree2}
                    setUniversity2={setUniversity2}
                    setFromDate2={setFromDate2}
                    setToDate2={setToDate2}
                  />
                )}

                {/* Button to toggle between Education components */}
                <button
                  className="education-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowEducation2(!showEducation2);
                  }}
                >
                  {showEducation2 ? "Add New Education" : "Previous Education"}
                </button>
              </div>
            )}
            {next === 3 && (
              <div>
                {showWork2 ? (
                  <Work
                    setJobTitle={setJobTitle}
                    setCompany={setCompany}
                    setWorkFromDate={setWorkFromDate}
                    setWorkToDate={setWorkToDate}
                    setDs={setDs}
                  />
                ) : (
                  <Work2
                    setJobTitle2={setJobTitle2}
                    setCompany2={setCompany2}
                    setWorkFromDate2={setWorkFromDate2}
                    setWorkToDate2={setWorkToDate2}
                    setDs2={setDs2}
                  />
                )}
                <button
                  className="work-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowWork2(!showWork2);
                  }}
                >
                  {showWork2 ? "Add New Work" : "Show Previous Work"}
                </button>
              </div>
            )}
            {next === 4 && (
              <OtherExp
                setJobTitle3={setJobTitle3}
                setCompany3={setCompany3}
                setWorkFromDate3={setWorkFromDate3}
                setWorkToDate3={setWorkToDate3}
                setDs3={setDs3}
              />
            )}
            {next === 5 && (
              <Skills
                setSkills={setSkills}
                setSkills1={setSkills1}
                setSkills2={setSkills2}
                setSkills3={setSkills3}
                setSkills4={setSkills4}
                setSkills5={setSkills5}
                setSkills6={setSkills6}
                setSkills7={setSkills7}
                setSkills8={setSkills8}
                setSkills9={setSkills9}
              />
            )}
            {next === 6 && (
              <Hobby
                setHobby={setHobby}
                setHobby1={setHobby1}
                setHobby2={setHobby2}
                setHobby3={setHobby3}
              />
            )}
            {next === 7 && (
              <Lang
                setLang={setLang}
                setLang1={setLang1}
                setLang2={setLang2}
                setLang3={setLang3}
              />
            )}
            {next === 8 && <ImageUploader onImageUpload={handleImageUpload} />}
            <div className="buttons-class">
              <button onClick={handlePreviousForm}>Prev</button>
              {next === 8 ? (
                <button onClick={downloadPDF} disabled={!(loader === false)}>
                  {loader ? <span>Print</span> : <span>Printed</span>}
                </button>
              ) : (
                <button onClick={handleNextForm}>Next</button>
              )}
            </div>
          </form>
          {/* Add this button */}
        </div>
      </div>
      {/* passing the output */}
      <div className="super-cv-container">
        <div className="cv-container">
          <nav className="nav-container">
            {/* image */}
            {uploadedImage && (
              <div className="img-cv">
                <img
                  src={uploadedImage}
                  alt="Uploaded"
                  style={{ maxWidth: "200px" }}
                />
              </div>
            )}
            {/* Name */}
            <div className="name-profession">
              <div className="full-name">
                <h3>{name}</h3>
                <h3 className="last-name">{last} </h3>
              </div>
              <div className="profession-title">
                <p>{profession}</p>
              </div>
            </div>
          </nav>
          <div className="sidebar-container">
            {/* Contact */}
            <p className="sidebar-headlinders"> Contact</p>
            <div className="contact-cv">
              <p>{website}</p>
              <p>{email}</p>
              <p>{location}</p>
              <p>{phone}</p>
            </div>
            {/* Education */}
            <p className="sidebar-headlinders"> Education</p>
            <div className="education-cv">
              <p className="edu-degree-title">{degree}</p>
              <p className="edu-uni-title">{university}</p>
              <p>
                {fromDate}-{toDate}
              </p>
            </div>
            <div className="education-cv">
              <p className="edu-degree-title">{degree2}</p>
              <p className="edu-uni-title">{university2}</p>
              <p>
                {fromDate2}-{toDate2}
              </p>
            </div>
            {/* Skills */}
            <p className="sidebar-headlinders">Skills</p>
            <div className="skills-cv">
              <p>{skills}</p>
              <p>{skills1}</p>
              <p>{skills2}</p>
              <p>{skills3}</p>
              <p>{skills4}</p>
              <p>{skills5}</p>
              <p>{skills6}</p>
              <p>{skills7}</p>
              <p>{skills8}</p>
              <p>{skills9}</p>
            </div>
            <p className="sidebar-headlinders">Hobbies</p>
            <div className="skills-cv">
              <p>{hobby}</p>
              <p>{hobby1}</p>
              <p>{hobby2}</p>
              <p>{hobby3}</p>
            </div>
            <p className="sidebar-headlinders">Languages</p>
            <div className="skills-cv">
              <p>{lang}</p>
              <p>{lang1}</p>
              <p>{lang2}</p>
              <p>{lang3}</p>
            </div>
          </div>
          <main className="body-container">
            {/* Info */}

            <div className="underline-cv">
              <h4>About me</h4>
            </div>
            <div className="about-work">
              {" "}
              <p>{info}</p>
            </div>
            {/* Work */}
            <div className="underline-cv">
              <h4>work experience</h4>
            </div>
            {/* other work */}
            <div className="experience-work">
              <h4>{jobTitle}</h4>
              <h5>
                {company}: {workFromDate} - {workToDate}
              </h5>
              <p>{ds}</p>
            </div>
            <div className="experience-work">
              <h4>{jobTitle2}</h4>
              <h5>
                {company2}: {workFromDate2} - {workToDate2}
              </h5>
              <p>{ds2}</p>
            </div>
            {/* Other experiences */}
            <div className="underline-cv">
              <h4>Other experiences</h4>
            </div>

            <div className="experience-work">
              <h4>{jobTitle3}</h4>
              <h5>
                {company3} {workFromDate3} {workToDate3}
              </h5>
              <p>{ds3}</p>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
