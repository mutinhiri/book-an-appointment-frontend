import React from 'react';
import '../App.css';

const SideBar = () => (
  <div className="sidebar">
    <a className="active" href="#home">Home</a>
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>
);

export default SideBar;
