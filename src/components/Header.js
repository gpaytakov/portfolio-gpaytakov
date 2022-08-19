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
        <div id="name-title">
          <h1>Guvanchmyrat Paytakov</h1>
          <h2>Full Stack Developer</h2>
        </div>

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
