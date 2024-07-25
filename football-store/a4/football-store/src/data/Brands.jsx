import React from 'react';
import styled from 'styled-components';

const BrandsSection = styled.section`
  margin: 5rem 0;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: ${(props) => (props.theme === 'dark' ? '#f8f9fa' : '#212529')};
    font-weight: bold;
    letter-spacing: 1px;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }
  }
`;

const BrandLogo = styled.img`
  max-width: 100%;
  height: auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  object-fit: contain;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Brands = ({ theme }) => {
  return (
    <BrandsSection theme={theme}>
      <h2>Our Partners</h2>
      <div className="container">
        <div className="row row-cols-2 row-cols-md-4 g-4">
          <div className="col">
            <LogoContainer>
              <BrandLogo
                src="https://upload.wikimedia.org/wikipedia/commons/7/79/AIA_logo.png"
                alt="AIA"
              />
            </LogoContainer>
          </div>
          <div className="col">
            <LogoContainer>
              <BrandLogo
                src="https://cdne-totv8-prod-westeurope.azureedge.net/media/3251/nike_black_logo.png"
                alt="Nike"
              />
            </LogoContainer>
          </div>
          <div className="col">
            <LogoContainer>
              <BrandLogo
                src="https://cdne-totv8-prod-westeurope.azureedge.net/media/hrwiddg5/kraken-primary-2x1-v3.png"
                alt="Kraken"
              />
            </LogoContainer>
          </div>
          <div className="col">
            <LogoContainer>
              <BrandLogo
                src="https://cdne-totv8-prod-westeurope.azureedge.net/media/makdnbkh/betmgm-primary-2x1.png"
                alt="BET MGM"
              />
            </LogoContainer>
          </div>
        </div>
      </div>
    </BrandsSection>
  );
};

export default Brands;
