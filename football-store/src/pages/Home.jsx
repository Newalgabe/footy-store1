import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';

const Home = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <main className="container my-5">
        <h1 className="display-4">Welcome to Tottenham Store</h1>
        <p className="lead">Your one-stop shop for all the things about the Tottenham Hotspur football club.</p>
        <Carousel />
      </main>
      <Footer theme={theme} />
    </div>
  );
};

export default Home;
