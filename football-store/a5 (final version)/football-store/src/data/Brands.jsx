import React from 'react';
import styled from 'styled-components';

const BrandsSection = styled.section`
  margin: 6rem 0;
  padding: 4rem 0;
  background: ${(props) => (props.theme === 'dark' ? '#181818' : '#f5f5f5')};
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 3.2rem;
  margin-bottom: 3rem;
  color: ${(props) => (props.theme === 'dark' ? '#e0e0e0' : '#2c2c2c')};
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const BrandGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
`;

const BrandCard = styled.div`
  background: ${(props) => (props.theme === 'dark' ? '#232323' : '#ffffff')};
  border-radius: 1.2rem;
  padding: 2rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.2);
    background-color: ${(props) => (props.theme === 'dark' ? '#2e2e2e' : '#f0f0f0')};
  }
`;

const BrandLogo = styled.img`
  max-width: 100%;
  height: auto;
  transition: transform 0.3s ease, filter 0.3s ease;
  object-fit: contain;

  &:hover {
    transform: scale(1.15);
    filter: brightness(1.1);
  }
`;

const Brands = ({ theme }) => {
  return (
    <BrandsSection theme={theme}>
      <Heading theme={theme}>Our Partners</Heading>
      <BrandGrid>
        <BrandCard theme={theme}>
          <BrandLogo
            src="https://upload.wikimedia.org/wikipedia/commons/7/79/AIA_logo.png"
            alt="AIA"
          />
        </BrandCard>
        <BrandCard theme={theme}>
          <BrandLogo
            src="https://cdne-totv8-prod-westeurope.azureedge.net/media/3251/nike_black_logo.png"
            alt="Nike"
          />
        </BrandCard>
        <BrandCard theme={theme}>
          <BrandLogo
            src="https://cdne-totv8-prod-westeurope.azureedge.net/media/hrwiddg5/kraken-primary-2x1-v3.png"
            alt="Kraken"
          />
        </BrandCard>
        <BrandCard theme={theme}>
          <BrandLogo
            src="https://cdne-totv8-prod-westeurope.azureedge.net/media/makdnbkh/betmgm-primary-2x1.png"
            alt="BET MGM"
          />
        </BrandCard>
      </BrandGrid>
    </BrandsSection>
  );
};

export default Brands;
