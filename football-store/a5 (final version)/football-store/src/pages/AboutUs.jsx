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
  background: ${({ theme }) => 
    theme === 'dark'
      ? 'linear-gradient(135deg, rgba(18, 18, 18, 0.8), rgba(34, 34, 34, 0.9)), url("/path/to/dark-background.jpg") no-repeat center/cover'
      : 'linear-gradient(135deg, rgba(248, 249, 250, 0.8), rgba(255, 255, 255, 0.9)), url("/path/to/light-background.jpg") no-repeat center/cover'
  };
  padding: 3rem 2rem;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(15px);
  animation: ${fadeIn} 1s ease-in-out;
  transition: background 0.4s ease, box-shadow 0.4s ease, transform 0.4s ease;

  &:hover {
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
    transform: translateY(-5px) scale(1.03);
  }

  &:focus-within {
    border: 2px solid ${({ theme }) => theme === 'dark' ? '#ffffff' : '#000000'};
    outline: none;
    box-shadow: 0 0 0 4px ${({ theme }) => theme === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)'};
  }

  overflow: hidden;

  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    border-radius: 12px;
  }
`;

const CustomCard = styled(Card)`
  background: ${({ theme }) => 
    theme === 'dark'
      ? 'linear-gradient(135deg, rgba(30, 30, 30, 0.9), rgba(50, 50, 50, 0.8))'
      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(240, 240, 240, 0.8))'
  };
  color: ${({ theme }) => (theme === 'dark' ? '#e9ecef' : '#343a40')};
  border: none;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease, color 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    background: ${({ theme }) => 
      theme === 'dark'
        ? 'rgba(0, 0, 0, 0.1)'
        : 'rgba(255, 255, 255, 0.2)'
    };
    opacity: 0.5;
    pointer-events: none;
  }

  .card-body {
    padding: 2.5rem;
    text-align: center;
    position: relative;
    z-index: 1;
  }

  .card-title {
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 1.2rem;
    color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#333333')};
  }

  .card-text {
    font-size: 1.1rem;
    color: ${({ theme }) => (theme === 'dark' ? '#e0e0e0' : '#555555')};
    margin-bottom: 1.5rem;
  }

  .icon {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => (theme === 'dark' ? '#76c7c0' : '#6f42c1')};
    transition: color 0.3s ease;
  }

  @media (max-width: 768px) {
    .card-body {
      padding: 1.5rem;
    }

    .card-title {
      font-size: 1.4rem;
    }

    .card-text {
      font-size: 1rem;
    }

    .icon {
      font-size: 3rem;
    }
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
    background: linear-gradient(135deg, #6a5acd, #6a4b8d);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.5);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

const ReviewsSection = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) =>
    theme === 'dark'
      ? 'linear-gradient(135deg, rgba(24, 24, 24, 0.9), rgba(34, 34, 34, 0.8)), url("/path/to/dark-background.jpg") center/cover'
      : 'linear-gradient(135deg, rgba(241, 241, 241, 0.9), rgba(255, 255, 255, 0.8)), url("/path/to/light-background.jpg") center/cover'
  };
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  text-align: center;
  position: relative;
  overflow: hidden;
  color: ${({ theme }) => (theme === 'dark' ? '#e0e0e0' : '#333333')};

  h2 {
    font-size: 2.8rem;
    font-weight: 700;
    margin-bottom: 2.5rem;
    color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#212529')};
    letter-spacing: 1px;
  }

  .review {
    font-style: italic;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    border: 1px solid ${({ theme }) => (theme === 'dark' ? '#333333' : '#dddddd')};
    border-radius: 10px;
    background: ${({ theme }) => (theme === 'dark' ? 'rgba(28, 28, 28, 0.7)' : 'rgba(255, 255, 255, 0.9)')};
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: background 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      background: ${({ theme }) => (theme === 'dark' ? 'rgba(38, 38, 38, 0.8)' : 'rgba(240, 240, 240, 0.9)')};
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
    }
  }

  .customer {
    font-weight: 600;
    margin-top: 0.5rem;
    color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#000000')};
  }

  .stars {
    display: flex;
    justify-content: center;
    margin-top: 0.5rem;
  }

  .stars span {
    font-size: 1.8rem;
    color: ${({ theme }) => (theme === 'dark' ? '#ffb107' : '#ffcc00')};
    margin-right: 0.2rem;
    transition: transform 0.3s ease, color 0.3s ease;
    cursor: pointer;
  }

  .stars span:hover {
    color: ${({ theme }) => (theme === 'dark' ? '#ff9f00' : '#e5a700')};
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;

    h2 {
      font-size: 2.2rem;
    }

    .stars span {
      font-size: 1.6rem;
    }

    .review {
      padding: 1rem;
      margin-bottom: 1.5rem;
    }
  }
`;

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} aria-label={`Rating ${i} stars`}>
        <FaStar style={{ color: i <= rating ? '#ffc107' : '#e4e5e9' }} />
      </span>
    );
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
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
`;

const FAQSection = styled(Accordion)`
  margin-top: 2rem;

  .accordion-item {
    background: ${({ theme }) => (theme === 'dark' ? '#1e1e1e' : '#ffffff')};
    color: ${({ theme }) => (theme === 'dark' ? '#f8f9fa' : '#212529')};
    border: none;
    margin-bottom: 1rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: background 0.5s ease, color 0.5s ease;

    .accordion-header {
      background: ${({ theme }) => (theme === 'dark' ? '#1e1e1e' : '#ffffff')};
      transition: background 0.5s ease;
    }

    .accordion-button {
      background: ${({ theme }) => (theme === 'dark' ? '#1e1e1e' : '#ffffff')};
      color: ${({ theme }) => (theme === 'dark' ? '#f8f9fa' : '#212529')};
      border: none;
      transition: background 0.5s ease, color 0.5s ease;

      &:not(.collapsed) {
        background: ${({ theme }) => (theme === 'dark' ? '#2a2a2a' : '#e9ecef')};
      }
    }
  }
`;

const TeamSection = styled.section`
  padding: 3rem 1.5rem;
  text-align: center;
  background: ${({ theme }) => (theme === 'dark' ? '#181818' : '#f9f9f9')};
  color: ${({ theme }) => (theme === 'dark' ? '#f1f1f1' : '#212529')};
  transition: background 0.5s ease, color 0.5s ease;

  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#333')};
  }

  .team-card {
    margin-bottom: 2rem;
    text-align: center;
    border: none;
    background: ${({ theme }) => (theme === 'dark' ? 'rgba(30, 30, 30, 0.8)' : '#fff')};
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background 0.5s ease, color 0.5s ease;
    border-radius: 15px;
    overflow: hidden;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    }

    .card-body {
      padding: 2rem;
      background: ${({ theme }) => (theme === 'dark' ? 'rgba(24, 24, 24, 0.9)' : '#fafafa')};
      color: ${({ theme }) => (theme === 'dark' ? '#dcdcdc' : '#333')};
    }

    .card-title {
      font-size: 1.8rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    .card-text {
      font-size: 1rem;
      margin-bottom: 1rem;
      line-height: 1.5;
    }

    .team-image {
      width: 150px;
      height: 150px;
      object-fit: cover;
      border-radius: 50%;
      margin-bottom: 1rem;
      border: 4px solid ${({ theme }) => (theme === 'dark' ? '#667eea' : '#764ba2')};
      transition: border 0.5s ease;
    }
  }
`;


const AboutUs = ({ theme, toggleTheme }) => {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([
    { customer: 'Jane Doe', rating: 5, review: 'Absolutely amazing products and customer service!' },
    { customer: 'John Smith', rating: 4, review: 'Great quality and quick delivery. Highly recommend.' },
    { customer: 'Emily Johnson', rating: 5, review: 'Love the custom kit designs. Will order again!' },
  ]);

  const [teamMembers, setTeamMembers] = useState([
    {
      name: 'Daniel Levy',
      role: 'CEO',
      bio: 'Levy is the visionary behind our company, leading with passion and expertise.',
      image: 'https://www.themarque.com/photos-cache/profile-images/43308602-6062dff0854590/profile_public_big.jpg',
    },
    {
      name: 'Will Hattam',
      role: 'Chief Marketing Officer',
      bio: 'Will spearheads our marketing efforts, driving brand awareness and engagement.',
      image: 'https://www.holdthefrontpage.co.uk/wp-content/uploads/WillHattam.jpg',
    },
    {
      name: 'Kieran Murphy',
      role: 'Head of Design',
      bio: 'Murphy creates stunning designs that capture the essence of our brand.',
      image: 'https://images.squarespace-cdn.com/content/v1/6602e87dbd179b1e3650087a/1715133200927-GUDT9V578W3S8MFQ3RBG/km-b%26w.jpg',
    },
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <ImageBackground>
        <div className="overlay" />
        <div className="content">
          <h1>About Us</h1>
        </div>
      </ImageBackground>
      <Container>
        <Row className="justify-content-center mt-4">
          <Col md={8} className="text-center">
            <AboutUsContainer theme={theme}>
              <h2>Welcome to Tottenham Football Store!</h2>
              <p>
                At Tottenham Football Store, we are passionate about bringing the best football gear and memorabilia to
                fans worldwide. Our team is dedicated to providing top-notch products and excellent customer service.
              </p>
              <GoBackButton onClick={handleGoBack}>Go Back</GoBackButton>
            </AboutUsContainer>
          </Col>
        </Row>
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
        <TeamSection theme={theme}>
          <h2 className="text-center mb-4" theme={theme}>Our Team</h2>
          <Row className="justify-content-center" theme={theme}>
            {teamMembers.map((member, index) => (
              <Col md={4} key={index} className="mb-4" theme={theme}>
                <Card className="team-card" theme={theme}>
                  <Card.Img variant="top" src={member.image} alt={member.name} className="team-image" theme={theme}/>
                  <Card.Body theme={theme}>
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Text>{member.role}</Card.Text>
                    <Card.Text>{member.bio}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </TeamSection>
        <ReviewsSection theme={theme}>
          <h2>What Our Customers Say</h2>
          {reviews.map((review, index) => (
            <div className="review" key={index}>
              <p>"{review.review}"</p>
              <p className="customer">- {review.customer}</p>
              <StarRating rating={review.rating} />
            </div>
          ))}
        </ReviewsSection>
        <FAQSection defaultActiveKey="0" theme={theme}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is Tottenham Football Store?</Accordion.Header>
            <Accordion.Body>
              Tottenham Football Store is an online retailer specializing in football gear and memorabilia for Tottenham
              Hotspur fans. We offer a wide range of products, from kits and apparel to accessories and collectibles.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>How can I place an order?</Accordion.Header>
            <Accordion.Body>
              To place an order, simply browse our catalog, add items to your cart, and proceed to checkout. You can
              create an account or check out as a guest. We accept various payment methods for your convenience.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>What is your return policy?</Accordion.Header>
            <Accordion.Body>
              We offer a hassle-free return policy within 30 days of purchase. If you're not satisfied with your
              purchase, please contact our customer service team for assistance. Items must be in their original
              condition and packaging.
            </Accordion.Body>
          </Accordion.Item>
        </FAQSection>
      </Container>
      <BackToTop theme={theme} />
      <Footer theme={theme} />
    </>
  );
};

export default AboutUs;
