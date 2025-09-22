import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PropertiesPage from './pages/PropertiesPage';
import ExhibitorsPage from './pages/ExhibitorsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navigation />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/properties" element={<PropertiesPage />} />
            <Route path="/exhibitors" element={<ExhibitorsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
