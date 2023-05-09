import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="vid-container">
        <div className="celebrate-container">
          <p className="celebrate" aria-label="Cakes that mark your moments">
            Cakes that mark your moments
          </p>
        </div>
        <video
          src={`${process.env.PUBLIC_URL}/images/bccvid.mp4`}
          autoPlay
          muted
          loop
          className="video"
          aria-label="Video background"
        />
      </div>
      <div className="link-container">
        <h1 className="welcome-message" aria-label="Welcome to Buttercraft Cakes">
          Buttercraft Cakes
        </h1>
        <Link to="/cakes" className="enter-button" aria-label="Enter the website">
          Enter
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
