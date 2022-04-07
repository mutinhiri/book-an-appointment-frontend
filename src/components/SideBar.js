import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const SideBar = () => (
  <div className="sidebar">
    <div className="sidebar-header">
      <Link to="/">Doctors</Link>
      <Link to="/appointment">Appointments</Link>
      <Link to="/appointments">My Appointment</Link>
      <Link to="/delete">Delete Appointment</Link>
    </div>
  </div>
);

export default SideBar;
