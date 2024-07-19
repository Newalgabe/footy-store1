import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import Brands from '../data/Brands';
import Events from '../data/Events';
import VideoBanner from '../data/VideoBanner';
import Testimonials from '../data/Testimonials';
import BackToTop from '../components/BackToTop';

const Home = ({ theme, toggleTheme }) => {
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <main className="container my-5">
        <h1 className="main-title">Welcome to Tottenham Store</h1>
        <p className="sub-title">Your one-stop shop for all things Tottenham Hotspur football club.</p>
        <Carousel />
        <VideoBanner theme={theme} /> {}
        <Brands />
        <Events theme={theme} />
        <Testimonials theme={theme} />
      </main>
      <Footer theme={theme} />
      <BackToTop />
    </div>
  );
};

export default Home;
