import React from "react";
import resume from "../../assets/resume.pdf"
function Resume() {
  return (
    <section className="about">
      <a href={resume} target="_blank" rel="noreferrer">
        <h2>Download my resume</h2>
      </a>
      <div>
        <h1 id="title">Guvanchmyrat Paytakov</h1>
        <h5>Email: pguvanch@yahoo.com Phone: 555-555-5555</h5>
      </div>
      <div className="content-about">
        <p>
          Experience:<br></br>District Chemistry PLC/PD Lead Teacher, Honors
          Chemistry System Course Leader Harmony Public Schools Aug 2019 –
          Present (3 yrs) Train Chemistry Teachers and Curriculum Writing{" "}
          <br></br>Adjunct Professor Lone Star College Aug 2016 – Present (6
          yrs) Teaching Chem 1411 and Chem 1405 Courses
        </p>
        <p>
          <span>Libraries and Frameworks</span> React, Node, jQuery, Redux,
          Express, MongoDB, SQL Bootstrap, Webpack, PWAs.
        </p>
        <p>
          <span>Languages</span>
          HTML, CSS, JavaScript, EcmaScript 6, GraphQL, Python, REST API Tools
          and Apps Chrome Dev Tools, NPM, GitHub, VS Code, ESLint, Prettier,
          GraphQL
        </p>
      </div>
    </section>
  );
}

export default Resume;