import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import Header from './components/Header';
import Appointment from './components/appointments/Appointments';
import AppointmentForm from './components/appointments/AppointmentForm';
import './App.css';
import Main from './components/Main';

const Home = () => (

  <BrowserRouter>
    <SideBar />
    <div className="content">
      <Header />
      <div className="home-content">
        <Routes>
          <Route path="/" element={<Main />} exact />
          <Route path="/appointments" element={<Appointment />} />
          <Route path="/appointment-form" element={<AppointmentForm />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

export default Home;
