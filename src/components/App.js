import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom'
import Title from './Title/Title';
import { useLocation } from 'react-router-dom';
import Footer from './Footer/Footer';



function App() {
  const location = useLocation();
  return (
  <div className="App" role="main">
    <div className="App-content">
    {location.pathname !== '/' && <Title />}
      <Outlet />
    </div>
    {location.pathname !== '/' && <Footer />}
    
  </div>
  );
}

export default App;
