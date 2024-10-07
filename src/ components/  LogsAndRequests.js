import React, { useState } from 'react';
import './LogsAndRequests.css';

const LogsAndRequests = () => {
  const [activeTab, setActiveTab] = useState('log');

  const logs = [
    {
      date: 'Dec 04, Mon',
      visual: 'green-bar',
      attendance: '9h 15m',
      gross: '9h 59m',
      extra: '0h 59m',
      arrival: '✔️ On Time',
    },
    {
      date: 'Dec 03, Sun',
      visual: 'w-off',
      attendance: 'Full day weekly-off',
      gross: '',
      extra: '',
      arrival: '',
    },
    {
      date: 'Dec 02, Sat',
      visual: 'green-bar',
      attendance: '8h 59m',
      gross: '9h 59m',
      extra: '0h 30m',
      arrival: '😊 On Time',
    },
    {
      date: 'Dec 01, Fri',
      visual: 'green-bar',
      attendance: '8h 59m',
      gross: '9h 59m',
      extra: '1h 30m',
      arrival: '⏰ 30m Late',
    },
    {
      date: 'Nov 30, Thu',
      visual: 'leave',
      attendance: 'Sick Leave',
      gross: '',
      extra: '',
      arrival: '',
    },
  ];

  return (
    <div className="logs-requests">
      <div className="header">
        <h3>{activeTab === 'log' ? 'Attendance Log' : 'Attendance Requests'}</h3>
        <div className="tabs">
        <button 
            className={`tab-button ${activeTab === 'log' ? 'active-tab' : ''}`} 
            onClick={() => setActiveTab('log')}
          >
            Attendance Log
          </button>
          <button 
            className={`tab-button ${activeTab === 'request' ? 'active-tab' : ''}`} 
            onClick={() => setActiveTab('request')}
          >
            Attendance Requests
          </button>
        </div>
      </div>

      {activeTab === 'log' && (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th colSpan="7" className="table-header">
                  <div className="table-header-content">
                    <h4>December, 2023</h4>
                    <button className="filter-btn">30 Days</button>
                    <div className="month-filter">
                      {['Nov', 'Oct', 'Sep', 'Aug', 'Jul', 'Jun'].map((month, index) => (
                        <span key={index}>{month}</span>
                      ))}
                    </div>
                  </div>
                </th>
              </tr>
              <tr>
                <th>Date</th>
                <th>Attendance Visual</th>
                <th>Effective Hours</th>
                <th>Gross Hours</th>
                <th>Extra Hours</th>
                <th>Arrival</th>
                <th>Log</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log, index) => (
                <tr key={index}>
                  <td>{log.date}</td>
                  <td>
                    <div className={`attendance-visual ${log.visual}`}></div>
                  </td>
                  <td>{log.attendance}</td>
                  <td>{log.gross}</td>
                  <td>{log.extra}</td>
                  <td>{log.arrival}</td>
                  <td>Details</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'request' && (
        <div className="attendance-requests">
          <p>No attendance requests available at this moment.</p>
        </div>
      )}
    </div>
  );
};

export default LogsAndRequests;
