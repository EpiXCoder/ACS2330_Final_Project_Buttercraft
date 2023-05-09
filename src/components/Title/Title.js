import React from 'react';
import './Title.css';
import { NavLink } from 'react-router-dom';

function Title() {
  return (
    <div className="BUTTERTitle">
      <header>
        <img src={`${process.env.PUBLIC_URL}/images/cake.png`} alt="cake" height="100px" />
        <h1 className="banner">Buttercraft Cakes</h1>
        <nav>
          <NavLink
            exact
            activeClassName="nav-link-active"
            className="nav-link"
            to="/cakes"
          >
            Cakes
          </NavLink>
          <NavLink
            exact
            activeClassName="nav-link-active"
            className="nav-link"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            exact
            activeClassName="nav-link-active"
            className="nav-link"
            to="/contact"
          >
            Contact
          </NavLink>
        </nav>
      </header>
    </div>
  );
}

export default Title;
