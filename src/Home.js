import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import Header from './components/Header';
import Appointment from './components/appointments/Appointments';
import AppointmentForm from './components/appointments/AppointmentForm';
import DoctorCard from './components/Main/DoctorCard';
import './App.css';

const Home = () => (

  <BrowserRouter>
    <SideBar />
    <div className="content">
      <h1>content</h1>
      <Header />
      <div className="home-content">
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />

        <Routes>
          <Route path="/appointments" element={<Appointment />} />
          <Route path="/appointment-form" element={<AppointmentForm />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

export default Home;
