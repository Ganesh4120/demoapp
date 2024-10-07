import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaClock, FaClipboardList, FaMoneyBillWave, FaQuestionCircle, FaCaretDown, FaCaretRight, FaArrowLeft } from 'react-icons/fa';
import './Sidebar.css'; // Assuming you have a CSS file for styles

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMySpaceOpen, setIsMySpaceOpen] = useState(true);
  const location = useLocation();

  // Determine active tab
  const activeTab = location.pathname === '/' ? 'Attendance' : location.pathname.substring(1);

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button onClick={() => setIsOpen(!isOpen)} className="toggle-button">
        {isOpen ? <FaArrowLeft /> : '>'}
      </button>
      {isOpen && <h2>My Space</h2>}
      {isOpen && (
        <div className="my-space">
          <div onClick={() => setIsMySpaceOpen(!isMySpaceOpen)} className="dropdown-header">
            {isMySpaceOpen ? <FaCaretDown /> : <FaCaretRight />} My Space
          </div>
          {isMySpaceOpen && (
            <ul className="dropdown-list">
              <li>
                <Link to="/" className={activeTab === 'Attendance' ? 'active' : ''}>
                  <FaClock /> Attendance
                </Link>
              </li>
              <li><br/>
                <Link to="/leave" className={activeTab === 'leave' ? 'active' : ''}>
                  <FaClipboardList /> Leave
                </Link>
              </li>
              <li><br/>
                <Link to="/performance" className={activeTab === 'performance' ? 'active' : ''}>
                  <FaClipboardList /> Performance
                </Link>
              </li>
              <br/>
              <li>
                <Link to="/expenses" className={activeTab === 'expenses' ? 'active' : ''}>
                  <FaMoneyBillWave /> Expenses & Travel
                </Link>
              </li>
              <li><br/>
                <Link to="/help" className={activeTab === 'help' ? 'active' : ''}>
                  <FaQuestionCircle /> Help Desk
                </Link>
              </li>
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
