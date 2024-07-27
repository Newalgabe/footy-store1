import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import News from './pages/News';
import Catalog from './pages/Catalog';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/about-us" element={<AboutUs theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/news" element={<News theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/catalog" element={<Catalog theme={theme} toggleTheme={toggleTheme} />} /> {}
      </Routes>
    </Router>
  );
};

export default App;
