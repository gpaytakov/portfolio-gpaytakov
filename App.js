import React, {useState} from 'react';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import NavTabs from './components/NavTabs';

export default function App() {
    const [currentPage, setCurrentPage] = useState('About');
    const renderPage = () => {
        if (currentPage === 'About') {
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
    }

    const handlePageChange = (page) => setCurrentPage(page);
    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}