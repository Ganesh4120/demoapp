import React, { useState } from 'react';
import { FaSearch, FaBell, FaEnvelope, FaMoon, FaSun, FaUser } from 'react-icons/fa';
import './Navbar.css'; // Assuming you have a CSS file for styles

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <nav className="navbar">
       <div className="logo">
        <img style={{ width: '100px' }}  src='https://th.bing.com/th/id/R.06cd8f948fb099f1626338163513b4a6?rik=m4h5OvLFypaT9A&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-ibm-logologobrand-logoiconslogos-251519939176ka7y8.png&ehk=LWXiPfXnsF3l6lHHpy1BGAxdoQu0BkY7OkdYr2MziCM%3d&risl=&pid=ImgRaw&r=0' alt="Company Logo" />
      </div>
      <div className="search-box">
        <input type="text" />
        <FaSearch className="search-icon" />
      </div>
      <div className="navbar-icons">
        <FaBell className="icon" />
        <FaEnvelope className="icon" />
        <div className="mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? <FaSun className="icon" /> : <FaMoon className="icon" />}
        </div>
        <FaUser className="icon" />
      </div>
    </nav>
  );
};

export default Navbar;
