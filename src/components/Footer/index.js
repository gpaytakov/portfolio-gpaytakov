import React from "react";
import GitHub_Logo from "../../assets/GitHub_Logo.png";
import li from "../../assets/li.png"

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <h5>You may also click any of the links below to contact me.</h5>
        <div className="footer-icons">
          <p>
            <a href="https://github.com/gpaytakov">
              <img id="github" src={GitHub_Logo} alt="github link" />
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/guvanchmyrat-paytakov-2766a040/">
              <img id="github" src={li} alt="linkedin link" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
