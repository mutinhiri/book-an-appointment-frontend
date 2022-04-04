import React from 'react';
import '../App.css';

const SideBar = () => (
  <div className="sidebar">
    <h1>Doctrs</h1>
    <a className="active" href="#home">Doctors</a>
    <a href="#news">Appointments</a>
    <a href="#news">My Appointments</a>
    <a href="#contact">New Appointment</a>
    <a href="#about">Delete Appointment</a>
  </div>
);

export default SideBar;
