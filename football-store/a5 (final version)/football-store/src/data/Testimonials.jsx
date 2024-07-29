import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Container, Grid, Card, CardContent, Typography, Avatar } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos, Star } from '@mui/icons-material';
import 'bootstrap/dist/css/bootstrap.min.css';

const testimonials = [
  {
    quote: "Tottenham Store has exceeded my expectations in every way. The quality of products is top-notch, and their customer service is outstanding!",
    author: "Jared Williams",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    quote: "I've been a loyal Spurs fan for years, and finding a store that offers such a diverse range of merchandise is a dream come true.",
    author: "Jane Kelly",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
  },
  {
    quote: "The convenience and variety at Tottenham Store make it my go-to for all things Spurs. Highly recommended!",
    author: "Dave Davis",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 5,
  },
];

const Testimonials = ({ theme }) => {
  return (
    <section
      className={`py-5 ${theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'}`}
      style={{ padding: '50px 0', borderRadius: '20px' }}
    >
      <Container>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8}>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              style={{
                fontWeight: 'bold',
                marginBottom: '30px',
                color: theme === 'dark' ? '#ffffff' : '#000000',
                fontFamily: 'Roboto, sans-serif',
                letterSpacing: '1.5px',
              }}
            >
              What Our Fans Say
            </Typography>
            <Carousel
              NextIcon={<ArrowForwardIos fontSize="large" style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }} />}
              PrevIcon={<ArrowBackIos fontSize="large" style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }} />}
              navButtonsAlwaysVisible
              indicatorIconButtonProps={{
                style: {
                  padding: '10px',
                  color: theme === 'dark' ? '#007bff' : '#007bff',
                  borderRadius: '50%',
                },
              }}
              activeIndicatorIconButtonProps={{
                style: {
                  color: theme === 'dark' ? '#ffffff' : '#000000',
                },
              }}
              navButtonsProps={{
                style: {
                  backgroundColor: theme === 'dark' ? '#007bff' : '#007bff',
                  color: '#ffffff',
                  borderRadius: '50%',
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  style={{
                    backgroundColor: theme === 'dark' ? '#1e1e1e' : '#f9f9f9',
                    color: theme === 'dark' ? '#ffffff' : '#000000',
                    borderRadius: '16px',
                    padding: '20px',
                    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.2)',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0px 10px 25px rgba(0, 0, 0, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0px 6px 15px rgba(0, 0, 0, 0.2)';
                  }}
                >
                  <CardContent>
                    <Avatar
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      sx={{ width: 80, height: 80, margin: '0 auto 20px', border: '3px solid #007bff' }}
                    />
                    <Typography variant="body1" paragraph style={{ fontStyle: 'italic', fontFamily: 'Georgia, serif' }}>
                      "{testimonial.quote}"
                    </Typography>
                    <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
                      - {testimonial.author}
                    </Typography>
                    <Grid container justifyContent="center" spacing={1} style={{ marginTop: '10px' }}>
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Grid item key={i}>
                          <Star style={{ color: '#ffc107' }} />
                        </Grid>
                      ))}
                    </Grid>
                  </CardContent>
                </Card>
              ))}
            </Carousel>
          </Grid>
        </Grid>
      </Container>
      <style jsx="true">{`
        .carousel-indicators li {
          background-color: ${theme === 'dark' ? '#007bff' : '#007bff'};
          width: 12px;
          height: 12px;
          margin: 0 4px;
          border-radius: 50%;
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        }
        .carousel-indicators .active {
          background-color: ${theme === 'dark' ? '#ffffff' : '#000000'};
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
