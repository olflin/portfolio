import React from 'react';
import { Routes, Route} from "react-router-dom";

import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import Mentions from './pages/Mentions.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Services from './pages/Services.jsx';

import Header from './components/Header.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions" element={<Mentions />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}


export default App;