import React, { useState } from "react";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";

import Navigation from "./Navigation";

function Header() {
  const [currentPage, setCurrentPage] = useState("About");
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <About />;
  };
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <>
      <div id="header">
        <h1>
          Guvanchmyrat Paytakov <span>Full Stack Developer</span>
        </h1>
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
        
      </div>
      <main>{renderPage()}</main>
    </>
  );
}

export default Header;
