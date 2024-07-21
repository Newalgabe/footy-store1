import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Container, Row, Col, Card, Button, Accordion } from 'react-bootstrap';
import { FaUserFriends, FaRegLightbulb, FaHistory, FaStar } from 'react-icons/fa';
import { MdContactMail } from 'react-icons/md';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { useNavigate } from 'react-router-dom';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AboutUsContainer = styled(Container)`
  background: ${(props) => (props.theme === 'dark' ? 'rgba(18, 18, 18, 0.8)' : 'rgba(248, 249, 250, 0.8)')};
  padding: 3rem 1.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  animation: ${fadeIn} 1s ease-in-out;
`;

const CustomCard = styled(Card)`
  background: ${(props) => (props.theme === 'dark' ? 'rgba(30, 30, 30, 0.8)' : 'rgba(255, 255, 255, 0.8)')};
  color: ${(props) => (props.theme === 'dark' ? '#f8f9fa' : '#212529')};
  border: none;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .card-body {
    padding: 2rem;
    text-align: center;
  }

  .card-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .card-text {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: ${(props) => (props.theme === 'dark' ? '#667eea' : '#764ba2')};
  }
`;

const GoBackButton = styled(Button)`
  border-radius: 50px;
  padding: 0.5rem 2rem;
  font-size: 1rem;
  text-transform: uppercase;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  margin-top: 55px;
  margin-bottom: 6px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ReviewsSection = styled.section`
  padding: 3rem 1.5rem;
  background-color: ${(props) => (props.theme === 'dark' ? '#181818' : '#f1f1f1')};
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .review {
    font-style: italic;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .customer {
    font-weight: bold;
  }

  .stars {
    display: flex;
    margin-top: 0.5rem;
  }

  .stars span {
    font-size: 1.5rem;
    color: #ffc107;
    margin-right: 0.25rem;
  }
`;

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(<span key={i}>{i <= rating ? <FaStar /> : <FaStar style={{ color: '#e4e5e9' }} />}</span>);
  }
  return <div className="stars">{stars}</div>;
};

const ImageBackground = styled.div`
  position: relative;
  height: 60vh;
  background: url('https://wallpapers.com/images/hd/tottenham-hotspurs-fc-stadium-interior-at-night-my4elm1n3wall9gn.jpg') center center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }

  .content {
    position: relative;
    z-index: 2;
    font-size: 2rem;
  }
`;

const FAQSection = styled(Accordion)`
  margin-top: 2rem;

  .accordion-item {
    background: ${(props) => (props.theme === 'dark' ? '#1e1e1e' : '#ffffff')};
    color: ${(props) => (props.theme === 'dark' ? '#f8f9fa' : '#212529')};
    border: none;
    margin-bottom: 1rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

    .accordion-header {
      background: ${(props) => (props.theme === 'dark' ? '#1e1e1e' : '#ffffff')};
    }

    .accordion-button {
      background: ${(props) => (props.theme === 'dark' ? '#1e1e1e' : '#ffffff')};
      color: ${(props) => (props.theme === 'dark' ? '#f8f9fa' : '#212529')};
      border: none;

      &:not(.collapsed) {
        background: ${(props) => (props.theme === 'dark' ? '#2a2a2a' : '#e9ecef')};
      }
    }
  }
`;

const AboutUs = ({ theme, toggleTheme }) => {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([
    { customer: 'Jane Doe', rating: 5, text: 'Tottenham Store has the best products! I love shopping here. The customer service is excellent.' },
    { customer: 'John Smith', rating: 4, text: 'Fast shipping and great quality. I always find what I\'m looking for.' }
  ]);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Container className="mt-3">
        <Row>
          <Col>
            <GoBackButton onClick={() => navigate(-1)}>
              &larr; Go Back
            </GoBackButton>
          </Col>
        </Row>
      </Container>
      <ImageBackground>
        <div className="overlay"></div>
        <div className="content">
          <h1>About Us</h1>
          <p>Discover our story, mission, and values.</p>
        </div>
      </ImageBackground>
      <AboutUsContainer theme={theme} className="my-5 about-us">
        <Row className="mb-4">
          <Col md={6}>
            <CustomCard theme={theme} className="shadow-sm mb-4">
              <FaRegLightbulb className="icon" />
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
              <FaHistory className="icon" />
              <Card.Body>
                <Card.Title>Our History</Card.Title>
                <Card.Text>
                  Founded in 2024, Tottenham Store has quickly become the go-to destination for Spurs fans worldwide. Our dedication to quality and customer satisfaction has driven our growth and success.
                </Card.Text>
              </Card.Body>
            </CustomCard>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col md={6}>
            <CustomCard theme={theme} className="shadow-sm mb-4">
              <FaUserFriends className="icon" />
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
              <MdContactMail className="icon" />
              <Card.Body>
                <Card.Title>Contact Us</Card.Title>
                <Card.Text>
                  We love to hear from our fans! If you have any questions, comments, or feedback, please do not hesitate to contact us at support@tottenhamstore.com.
                </Card.Text>
              </Card.Body>
            </CustomCard>
          </Col>
        </Row>
      </AboutUsContainer>
      <ReviewsSection theme={theme}>
        <h2>Customer Reviews</h2>
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <p>{review.text}</p>
            <div className="customer">{review.customer}</div>
            <StarRating rating={review.rating} />
          </div>
        ))}
      </ReviewsSection>
      <AboutUsContainer theme={theme} className="my-5 faq-section">
        <h2 className={`text-center ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>Frequently Asked Questions</h2>
        <FAQSection theme={theme} defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>How can I contact customer support?</Accordion.Header>
            <Accordion.Body>
              You can contact our customer support via email at support@tottenhamstore.com or call us at 123-456-7890.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What is your return policy?</Accordion.Header>
            <Accordion.Body>
              We offer a 30-day return policy on all items. Please visit our returns page for more details.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Do you ship internationally?</Accordion.Header>
            <Accordion.Body>
              Yes, we ship to most countries worldwide. Shipping costs and delivery times vary depending on the destination.
            </Accordion.Body>
          </Accordion.Item>
        </FAQSection>
      </AboutUsContainer>
      <Footer theme={theme} />
      <BackToTop theme={theme} />
    </div>
  );
};

export default AboutUs;
