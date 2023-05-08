import React from 'react'
import './Title.css';
import { NavLink } from 'react-router-dom'


function Title() {
  return (
    <div className="BUTTERTitle">
      <header>
        <img src={`${process.env.PUBLIC_URL}/images/cake.png`} alt='cake' height="100px"/>
        <h1 className = "banner">Buttercraft Cakes</h1>


        <div>
        <NavLink 
          className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
          to="/cakes">Cakes</NavLink>
        <NavLink 
          className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
          to="/about">About</NavLink>
        <NavLink 
          className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
          to="/contact">Contact</NavLink>
        </div>

      </header>
    </div>
  )
}

export default Title

