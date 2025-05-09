import React from 'react';
import './App.css';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { CiCoffeeCup } from "react-icons/ci";
import GymTrackerCoverImage from "./assets/gym_tracker.png";

function App() {
  return (
    <div className="app">

      <div className="grid-background">
          <div className="grid-lines horizontal"></div>
          <div className="grid-lines vertical"></div>
      </div>

      <header className="header">
        <div className="header-left">
          <p className="author">By Daniyar Orazov</p>
          <h1 className="logo">QOSYLME</h1>
          <span class="subtitle"><p>Create innovative projects for everyone.</p></span>
        </div>
        <div className="header-right">
          <a href="#">
            <button className="header__support"><span>Support</span> <CiCoffeeCup /></button>
          </a>
          <a href="https://linkedin.com" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com" className="social-icon">
            <FaInstagram />
          </a>
        </div>
      </header>

      <div className="projects-grid">
      <div className="project-card">
          <a href="https://gym-tracker-qosylme.netlify.app/">
            <div className="project-image coffee-menu">
              <img src={GymTrackerCoverImage} alt="Gym Tracker" />
              <div className="overlay">
                <h2>Gym Tracker</h2>
              </div>
            </div> 
          </a>
          <h3 className="project-title">Gym Tracker</h3>
        </div>

        <div className="project-card">
          <div className="project-image coffee-menu">
            {/* Coffee menu image placeholder */}
          </div>
          <h3 className="project-title">Sholdeme Coffee Menu</h3>
        </div>

        <div className="project-card">
          <div className="project-image ai-event">
            {/* AI event finding image placeholder */}
          </div>
          <h3 className="project-title">AI event finding</h3>
        </div>
      </div>

      {/* Mobile view will show the projects in a single column */}
    </div>
  );
}

export default App;
