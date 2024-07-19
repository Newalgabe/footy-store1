import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { useNavigate } from 'react-router-dom';

const AboutUsContainer = styled(Container)`
  background-color: ${(props) => (props.theme === 'dark' ? '#121212' : '#f8f9fa')};
  padding: 3rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CustomCard = styled(Card)`
  background-color: ${(props) => (props.theme === 'dark' ? '#1e1e1e' : '#ffffff')};
  color: ${(props) => (props.theme === 'dark' ? '#f8f9fa' : '#212529')};
  border: 1px solid ${(props) => (props.theme === 'dark' ? '#343a40' : '#e0e0e0')};
  border-radius: 10px;

  .card-body {
    padding: 2rem;
  }
`;

const GoBackButton = styled(Button)`
  border-radius: 50px;
  padding: 0.5rem 2rem;
  font-size: 1rem;
  text-transform: uppercase;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const AboutUs = ({ theme, toggleTheme }) => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <AboutUsContainer theme={theme} className="my-5 about-us">
        <h1 className="main-title">About Us</h1>
        <p className="lead sub-title">Learn more about Tottenham Store and our mission.</p>
        <Row className="my-4">
          <Col md={6}>
            <CustomCard theme={theme} className="shadow-sm mb-4">
              <Card.Body>
                <Card.Title>Our Mission</Card.Title>
                <Card.Text>
                  At Tottenham Store, we aim to provide the best products and services to our fans. Our mission is to bring you closer to your favorite team with high-quality merchandise and a seamless shopping experience.
                </Card.Text>
              </Card.Body>
            </CustomCard>
          </Col>
          <Col md={6}>
            <CustomCard theme={theme} className="shadow-sm mb-4">
              <Card.Body>
                <Card.Title>Our History</Card.Title>
                <Card.Text>
                  Founded in 2024, Tottenham Store has quickly become the go-to destination for Spurs fans worldwide. Our dedication to quality and customer satisfaction has driven our growth and success.
                </Card.Text>
              </Card.Body>
            </CustomCard>
          </Col>
        </Row>
        <Row className="my-4">
          <Col md={6}>
            <CustomCard theme={theme} className="shadow-sm mb-4">
              <Card.Body>
                <Card.Title>Our Team</Card.Title>
                <Card.Text>
                  Our team is comprised of passionate professionals who are dedicated to providing the best service to our customers. We are proud to have a diverse and talented team.
                </Card.Text>
              </Card.Body>
            </CustomCard>
          </Col>
          <Col md={6}>
            <CustomCard theme={theme} className="shadow-sm mb-4">
              <Card.Body>
                <Card.Title>Contact Us</Card.Title>
                <Card.Text>
                  We love to hear from our fans! If you have any questions, comments, or feedback, please do not hesitate to contact us at support@tottenhamstore.com.
                </Card.Text>
              </Card.Body>
            </CustomCard>
          </Col>
        </Row>
        <div className="d-flex justify-content-center my-4">
          <GoBackButton 
            variant={theme === 'dark' ? 'outline-light' : 'outline-dark'} 
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </GoBackButton>
        </div>
      </AboutUsContainer>
      <Footer theme={theme} />
      <BackToTop /> {}
    </div>
  );
};

export default AboutUs;
