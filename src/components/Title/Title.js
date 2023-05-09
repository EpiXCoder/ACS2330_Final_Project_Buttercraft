import React from 'react';
import './Title.css';
import { NavLink } from 'react-router-dom';

function Title() {
  return (
    <div className="BUTTERTitle" role="banner">
      <header>
        <img src={`${process.env.PUBLIC_URL}/images/cake.png`} alt="logo" height="100px" />
        <h1 className="banner">Buttercraft Cakes</h1>
        <nav role="navigation">
          <NavLink
            exact
            activeClassName="nav-link-active"
            className="nav-link"
            to="/cakes"
            aria-label="Cakes"
          >
            Cakes
          </NavLink>
          <NavLink
            exact
            activeClassName="nav-link-active"
            className="nav-link"
            to="/about"
            aria-label="About"
          >
            About
          </NavLink>
          <NavLink
            exact
            activeClassName="nav-link-active"
            className="nav-link"
            to="/contact"
            aria-label="Contact"
          >
            Contact
          </NavLink>
        </nav>
      </header>
    </div>
  );
}

export default Title;
