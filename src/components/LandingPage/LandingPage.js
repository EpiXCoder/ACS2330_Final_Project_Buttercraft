import React from 'react'
import './LandingPage.css'
import { Link } from 'react-router-dom';


function LandingPage() {
  return (
    <div className='landing-page'>
        <div className='vid-container'>
            <div className="celebrate-container">
                <p className="celebrate">cakes that mark your moments</p>
            </div>
            <video src={`${process.env.PUBLIC_URL}/images/bccvid.mp4`} autoPlay muted loop className="video"/>
        </div>
        <div className='link-container'>
            <h1 className="welcome-message"> Buttercraft Cakes</h1>
            <Link to="/cakes" className="enter-button">Enter</Link>
        </div>
    </div>
  )
}

export default LandingPage;