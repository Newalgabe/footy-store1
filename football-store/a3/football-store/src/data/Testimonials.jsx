import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Testimonials = ({ theme }) => {
  const carouselControlStyle = {
    backgroundColor: '#007bff', // Blue color for buttons
    color: 'white',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    lineHeight: '40px', // Adjusted for vertical centering
    fontSize: '1.2rem',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
  };

  const testimonialStyle = {
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    marginBottom: '30px',
    ...(theme === 'dark' && {
      backgroundColor: '#343a40',
      color: 'white',
    }),
  };

  return (
    <section className="py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Carousel
              nextIcon={<FontAwesomeIcon icon={faChevronRight} style={carouselControlStyle} />}
              prevIcon={<FontAwesomeIcon icon={faChevronLeft} style={carouselControlStyle} />}
            >
              <Carousel.Item>
                <div style={testimonialStyle}>
                  <p>"Fantastic service and great products!"</p>
                  <p>- Jared Williams</p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div style={testimonialStyle}>
                  <p>"I love the variety of Tottenham merchandise."</p>
                  <p>- Jane Kelly</p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div style={testimonialStyle}>
                  <p>"Highly recommend to any Spurs fan!"</p>
                  <p>- Dave Davis</p>
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
      <style>{`
        .carousel-indicators li {
          background-color: ${theme === 'dark' ? '#007bff' : '#007bff'}; // Blue color for indicators
          width: 12px;
          height: 12px;
          margin: 0 4px; // Adjust spacing between indicators
          border-radius: 50%;
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        }
        .carousel-indicators .active {
          background-color: ${theme === 'dark' ? '#343a40' : '#f8f9fa'}; // Dark or light background for active indicator
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
