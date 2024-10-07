import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './ components/  Dashboard.js';
import Sidebar from './ components/ Sidebar.js';
import Navbar from './ components/Navbar.js';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
