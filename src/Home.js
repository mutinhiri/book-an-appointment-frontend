import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import Header from './components/Header';
import Appointment from './components/appointments/Appointments';
import './App.css';
import Main from './components/Main';
import DetailPage from './components/DetailPage/DetailPage';

const Home = () => (

  <BrowserRouter>
    <SideBar />
    <div className="content">
      <h1>content</h1>
      <Header />
      <div className="home-content">
        <Routes>
          <Route path="/" element={<Main />} exact />
          <Route path="/appointments" element={<Appointment />} />
          <Route path="/Detail/:id" element={<DetailPage />} />
          {/* <Route path="/appointment-form" element={<AppointmentForm />} /> */}
        </Routes>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

export default Home;
