import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const CarouselControl = styled.div`
  background: ${props => props.theme === 'dark' ? 'linear-gradient(135deg, #007bff, #0056b3)' : 'linear-gradient(135deg, #007bff, #0056b3)'};
  color: #fff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  line-height: 50px; /* Center vertically */
  font-size: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
  
  &:hover {
    background: ${props => props.theme === 'dark' ? '#0056b3' : '#0056b3'};
  }
`;

const TestimonialCard = styled.div`
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  text-align: center;
  margin-bottom: 40px;
  background: ${props => props.theme === 'dark' ? 'linear-gradient(135deg, #343a40, #495057)' : 'linear-gradient(135deg, #ffffff, #f8f9fa)'};
  color: ${props => props.theme === 'dark' ? '#e9ecef' : '#343a40'};
  transition: background 0.3s ease, color 0.3s ease;
  
  p {
    margin: 0;
    font-size: 1.125rem;
  }

  h5 {
    margin-top: 20px;
    font-weight: 700;
    font-size: 1.25rem;
  }
`;

const Testimonials = ({ theme }) => {
  return (
    <section className="py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Carousel
              nextIcon={<CarouselControl theme={theme}><FontAwesomeIcon icon={faChevronRight} /></CarouselControl>}
              prevIcon={<CarouselControl theme={theme}><FontAwesomeIcon icon={faChevronLeft} /></CarouselControl>}
              indicators={false}
            >
              <Carousel.Item>
                <TestimonialCard theme={theme}>
                  <p>"Fantastic service and great products!"</p>
                  <h5>- Jared Williams</h5>
                </TestimonialCard>
              </Carousel.Item>
              <Carousel.Item>
                <TestimonialCard theme={theme}>
                  <p>"I love the variety of Tottenham merchandise."</p>
                  <h5>- Jane Kelly</h5>
                </TestimonialCard>
              </Carousel.Item>
              <Carousel.Item>
                <TestimonialCard theme={theme}>
                  <p>"Highly recommend to any Spurs fan!"</p>
                  <h5>- Dave Davis</h5>
                </TestimonialCard>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
      <style jsx>{`
        .carousel-indicators li {
          background: ${theme === 'dark' ? '#007bff' : '#007bff'};
          width: 12px;
          height: 12px;
          margin: 0 5px; /* Adjust spacing between indicators */
          border-radius: 50%;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          transition: background 0.3s ease;
        }
        .carousel-indicators .active {
          background: ${theme === 'dark' ? '#0056b3' : '#0056b3'};
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
