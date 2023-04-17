import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/structure/navbar';
import HomePage from './components/pages/HomePage';
import AboutUs from './components/pages/AboutUs';
import Resources from './components/pages/Resources';
import Impact from './components/pages/Impact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/impact" element={<Impact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
