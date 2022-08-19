import React from "react";
import gp from "../../assets/gp.jpg";

function About() {
  return (
    <section className="about">
      <div className="col-1">
        <h1 id="title">About me</h1>
        <img id="profile-photo" src={gp} alt="GP" />
      </div>
      <div className="col-2">
        <p>
          Hi, I am Guvanchmyrat, a self taught developer graduated from
          University of Texas at Austin Full Stack (MERN) Developer Bootcamp. I
          am currently looking for opportunities in Front End, Back End and/or
          Full-Stack Developer positions.
        </p>
        <p>
          <h3>Libraries</h3>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>jQuery</li>
          </ul>
        </p>
        <p>
          <h3>Frameworks</h3>
          <ul>
            <li>Mongoose</li>
            <li>Express</li>
            <li>Bootstrap</li>
          </ul>
        </p>
        <p>
          <h3>Tools</h3>
          <ul>
            <li>GitHub</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>PWAs</li>
            <li>Webpack</li>
            <li>VSCode</li>
            <li>ESLint</li>
            <li>Prettier</li>
          </ul>
        </p>
        <p>
          <h3>Languages</h3>
          <ul>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Python</li>
            <li>GraphQL</li>
            <li>REST API</li>
          </ul>
        </p>
      </div>
    </section>
  );
}

export default About;
