import React from 'react';
import { FaClock, FaCheckCircle } from 'react-icons/fa'; // Importing icons
import './AttendanceStatus.css';

const AttendanceStatus = () => {
  return (
    <div className="attendance-container">
      <div className="attendance-status">
        <div className="attendance-overview">
          <h3>Attendance Status</h3>
          <div className="attendance-metrics">
            <div className="metric avg-hrs">
              <FaClock className="metric-icon" />
              <span>Avg hrs / Day</span>
              <span>6hrs 48m</span>
            </div>
            <div className="metric on-time">
              <FaCheckCircle className="metric-icon" />
              <span>On Time Arrival</span>
              <span>95%</span>
            </div>
          </div>
        </div>

        <div className="timing-section">
          <h3>Timings</h3>
          <div className="week-days">
            <span className="weekday">M</span>
            <span className="weekday">T</span>
            <span className="weekday">W</span>
            <span className="weekday">T</span>
            <span className="weekday">F</span>
            <span className="weekend">S</span>
            <span className="weekend">S</span>
          </div>
          <div className="timing-info">
            <div>Today: 09:30 AM - 06:30 PM</div>
            <div>Duration: 9h 0m | Break: 0m</div>
          </div>
        </div>

        <div className="current-time">
          <h1>04:04:39 PM</h1>
          <p>Wed 06, Dec 2023</p>
        </div>

        <div className="actions">
          <h3>Action</h3>
          <button className="leave-request-btn">Leave Request</button>
          <button className="work-from-home-btn">Work From Home</button>
        </div>
      </div>
    </div>
  );
};

export default AttendanceStatus;
