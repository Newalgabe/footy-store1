import React from 'react';
import styled from 'styled-components';

const BrandsSection = styled.section`
  margin: 5rem 0;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: ${(props) => (props.theme === 'dark' ? '#f8f9fa' : '#212529')};
  }
`;

const BrandLogo = styled.img`
  max-width: 100%;
  height: auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Brands = ({ theme }) => {
  return (
    <BrandsSection theme={theme}>
      <h2>Our Partners</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        <div className="col d-flex justify-content-center align-items-center">
          <BrandLogo
            src="https://upload.wikimedia.org/wikipedia/commons/7/79/AIA_logo.png"
            alt="AIA"
          />
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <BrandLogo
            src="https://cdne-totv8-prod-westeurope.azureedge.net/media/3251/nike_black_logo.png"
            alt="Nike"
          />
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <BrandLogo
            src="https://cdne-totv8-prod-westeurope.azureedge.net/media/hrwiddg5/kraken-primary-2x1-v3.png"
            alt="Kraken"
          />
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <BrandLogo
            src="https://cdne-totv8-prod-westeurope.azureedge.net/media/makdnbkh/betmgm-primary-2x1.png"
            alt="BET MGM"
          />
        </div>
      </div>
    </BrandsSection>
  );
};

export default Brands;
