import React, { useEffect }  from 'react';
import './App.css';
import { Outlet } from 'react-router-dom'
import Title from './Title/Title';
import { useLocation } from 'react-router-dom';
import Footer from './Footer/Footer';



function App() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      const scrolled = window.pageYOffset || document.documentElement.scrollTop;

      if (scrolled > 0) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
  <div className="App" role="main">
    <div className="App-content">
      <div className='navbar'>
        {location.pathname !== '/' && <Title />}
      </div>
      <div className={`not-navbar ${isLandingPage ? "landing-page" : ""}`}>
        <Outlet />
      </div>
      </div>
      {location.pathname !== '/' && <Footer />}
  </div>
  );
}

export default App;
