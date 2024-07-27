import React, { useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import Brands from '../data/Brands';
import Events from '../data/Events';
import VideoBanner from '../data/VideoBanner';
import Testimonials from '../data/Testimonials';
import BackToTop from '../components/BackToTop';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    background: ${({ theme }) => (theme === 'dark' ? '#181818' : '#f0f0f0')};
    color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#000000')};
    transition: background 0.5s ease, color 0.5s ease;
    margin: 0;
    padding: 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
`;

const MainTitle = styled.h1`
  margin-top: 5rem;
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#000000')};
  transition: color 0.5s ease;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SubTitle = styled.p`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 300;
  color: ${({ theme }) => (theme === 'dark' ? '#cccccc' : '#555555')};
  margin-bottom: 3rem;
  transition: color 0.5s ease;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const StyledContainer = styled.main`
  margin: 0 1rem;
`;

const Home = ({ theme, toggleTheme }) => {
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <GlobalStyle theme={theme} />
      <div>
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <StyledContainer>
          <MainTitle theme={theme}>Welcome to Tottenham Store</MainTitle>
          <SubTitle theme={theme}>Your one-stop shop for all things Tottenham Hotspur football club.</SubTitle>
          <Carousel />
          <VideoBanner theme={theme} />
          <Brands theme={theme}/>
          <Events theme={theme} />
          <Testimonials theme={theme} />
        </StyledContainer>
        <Footer theme={theme} />
        <BackToTop theme={theme} />
      </div>
    </>
  );
};

export default Home;
