import React from 'react';
import AttendanceStatus from './AttendanceStatus.js';
import LogsAndRequests from './  LogsAndRequests.js';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Attendance</h1>
      <AttendanceStatus />
      <LogsAndRequests />
    </div>
  );
};

export default Dashboard;
