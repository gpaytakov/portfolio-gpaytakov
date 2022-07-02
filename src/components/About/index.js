import React from "react";
import gp from "../../assets/gp.jpg";

function About() {
  return (
    <section className="about">
      <div>
        <h1 id="title">About me</h1>
        <img id="profile-photo" src={gp} alt="GP" />
      </div>
      <div className="content-about">
        <p>
          Hi, I am Guvanchmyrat, a self taught and soon graduating University of
          Texas at Austin Full Stack Developer Bootcamp. I am currently looking
          for opportunities in Front End, Back End and Full-Stack Developer
          positions.
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

export default About;
