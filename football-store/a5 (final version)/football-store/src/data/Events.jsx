import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Card } from 'react-bootstrap';

const EventsSection = styled.section`
  margin: 6rem 0;
  padding: 3rem;
  background: ${(props) => (props.theme === 'dark' 
    ? 'linear-gradient(135deg, #1c1c1c, #333)' 
    : 'linear-gradient(135deg, #e2e2e2, #ffffff)')};
  border-radius: 1.5rem;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h2`
  font-size: 3rem;
  margin-bottom: 2.5rem;
  color: ${(props) => (props.theme === 'dark' ? '#ffffff' : '#333333')};
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const StyledCard = styled(Card)`
  background: ${(props) => (props.theme === 'dark' ? '#2e2e2e' : '#ffffff')};
  color: ${(props) => (props.theme === 'dark' ? '#e0e0e0' : '#333333')};
  border: 1px solid ${(props) => (props.theme === 'dark' ? '#444' : '#e0e0e0')};
  border-radius: 1rem;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.2);
  }
`;

const CardBody = styled(Card.Body)`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const EventTitle = styled(Card.Title)`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const EventDate = styled.p`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: ${(props) => (props.theme === 'dark' ? '#b0b0b0' : '#555555')};
`;

const EventLocation = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: ${(props) => (props.theme === 'dark' ? '#b0b0b0' : '#555555')};
`;

const Details = styled.div`
  margin-top: 1rem;
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${(props) => (props.theme === 'dark' ? '#e0e0e0' : '#555555')};
  background: ${(props) => (props.theme === 'dark' ? '#3a3a3a' : '#f9f9f9')};
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const EventButton = styled(Button)`
  background: ${(props) => (props.theme === 'dark' ? 'linear-gradient(90deg, #007bff, #0056b3)' : '#343a40')};
  color: ${(props) => (props.theme === 'dark' ? '#ffffff' : '#ffffff')};
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 1.1rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  margin-top: auto;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: ${(props) => (props.theme === 'dark' ? 'linear-gradient(90deg, #0056b3, #003d7a)' : '#212529')};
    transform: scale(1.05);
  }
`;

const Events = ({ theme }) => {
  const [expandedEvent, setExpandedEvent] = useState(null);

  const events = [
    {
      date: 'Saturday 27 July',
      title: 'SPURS VS VISSEL KOBE',
      location: 'Japan National Stadium',
      details: `
        Tottenham Hotspur will be returning to Japan for the first time in 33 years this summer.
        The Club will play reigning J1 League champions Vissel Kobe at the Japan National Stadium on Saturday 27 July as part of our preparations for the 2024/25 season.
        Prior to this, the team will also participate in an Open Training session, also at the Japan National Stadium, on Friday 26 July from 5pm.
        The Club first visited Japan in 1971, when we embarked on a post-season tour to play three matches against an All Japan XI in our first visit to Asia.
        The last visit came in 1991 after having won the FA Cup when we took part in the Kirin Cup.
        Tickets for the match against Vissel Kobe and for the Open Training session are now on general sale.
      `
    },
    {
      date: 'Wednesday 31 July',
      title: 'SPURS VS TEAM K LEAGUE',
      location: 'Seoul World Cup Stadium',
      details: `
        Tottenham Hotspur's Men’s first team will travel to South Korea as part of its pre-season tour of Asia this summer.
        The Club will compete in the Coupang Play Series 2024 - a collection of pre-season matches featuring prestigious football clubs hosted, organised, and broadcasted by Coupang Play.
        The first fixture against Team K League on Wednesday 31 July will be the opening round.
        The second fixture of the series will be the previously announced game against FC Bayern on Saturday 3 August.
        The tour will be the first time Son Heung-min represents the Club as Captain in his home country.
        Spurs will take on Team K League and FC Bayern in the Coupang Play Series 2024 with both matches taking place at the Seoul World Cup Stadium.
        The Club played a fixture against Team K League during our previous visit to Korea in 2022, when two goals from Heung-Min Son secured a thrilling 6-3 victory for the Lilywhites.
        Tickets for the 2024 Coupang Play Series are now both SOLD OUT. For more information about the fixtures click the link below
      `
    },
    {
      date: 'Saturday 3 August',
      title: 'SPURS VS FC BAYERN',
      location: 'Seoul World Cup Stadium',
      details: `
        Spurs will take on FC Bayern in the Coupang Play Series 2024 with the match taking place at the Seoul World Cup Stadium.
        The team will also take part in an open training session at the Stadium ahead of the game against FC Bayern.
        Tickets for the 2024 Coupang Play Series are now both SOLD OUT. For more information about the fixtures click the link below
      `
    }
  ];

  const handleExpand = (index) => {
    setExpandedEvent(index === expandedEvent ? null : index);
  };

  return (
    <EventsSection theme={theme}>
      <Heading theme={theme}>Upcoming Events</Heading>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {events.map((event, index) => (
          <div key={index} className="col d-flex align-items-stretch">
            <StyledCard theme={theme} onClick={() => handleExpand(index)}>
              <CardBody>
                <EventTitle>{event.title}</EventTitle>
                <EventDate theme={theme}><i className="far fa-calendar-alt me-2"></i>{event.date}</EventDate>
                <EventLocation theme={theme}><i className="fas fa-map-marker-alt me-2"></i>{event.location}</EventLocation>
                {expandedEvent === index && (
                  <Details theme={theme}>
                    <p>{event.details}</p>
                  </Details>
                )}
                <EventButton theme={theme}>
                  {expandedEvent === index ? 'Hide Details' : 'View Details'}
                </EventButton>
              </CardBody>
            </StyledCard>
          </div>
        ))}
      </div>
    </EventsSection>
  );
};

export default Events;
