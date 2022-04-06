import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const SideBar = () => (
  <div className="sidebar">
    <h1>Doctors</h1>
    <Link className="active" to="/">Doctors</Link>
    <Link to="/appointments">Appointments</Link>
    <a href="#news">My Appointments</a>
    <Link to="/appointment-form">New Appointment</Link>
    <a href="#about">Delete Appointment</a>
  </div>
);

export default SideBar;
