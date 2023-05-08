import React from 'react';
// import ReactDOM from 'react-dom/client';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './components/App';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import BUTTERList from './components/BUTTERList/BUTTERList';
import reportWebVitals from './reportWebVitals';
import BUTTERDetails from './components/BUTTERDetails/BUTTERDetails';
import ContactForm from './components/BUTTERContact/BUTTERContact';
import LandingPage from './components/LandingPage/LandingPage';



const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<LandingPage />} />
        <Route path="cakes" element={<BUTTERList />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactForm />} />
        <Route path="/details/:id" element={<BUTTERDetails />} />
      </Route>
    </Routes>
  </Router>,
  // document.getElementById('root')
);

reportWebVitals();
