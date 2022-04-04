import React from 'react';
import SideBar from './SideBar';
import Footer from './Footer';
import Header from './Header';
import '../App.css';

const Home = () => (
  <div className="p-3 d-sm-block d-none">
    <SideBar />
    <div className="content">
      <Header />
      <div className="home-content">
        <small>Home content</small>
      </div>
      <Footer />
    </div>
  </div>
);

export default Home;
