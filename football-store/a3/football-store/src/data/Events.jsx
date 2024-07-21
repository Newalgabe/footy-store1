import React, { useState } from 'react';
import styled from 'styled-components';

const EventsSection = styled.section`
  margin: 5rem 0;
  padding: 2rem;
  background: ${(props) => (props.theme === 'dark' ? '#1c1c1c' : '#f8f9fa')};
  border-radius: 1rem;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${(props) => (props.theme === 'dark' ? '#e9ecef' : '#212529')};
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
`;

const EventCard = styled.div`
  background: ${(props) => (props.theme === 'dark' ? '#2e2e2e' : '#ffffff')};
  color: ${(props) => (props.theme === 'dark' ? '#e9ecef' : '#212529')};
  border: 1px solid ${(props) => (props.theme === 'dark' ? '#444' : '#ddd')};
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const EventButton = styled.button`
  background: ${(props) => (props.theme === 'dark' ? '#ffffff' : '#212529')};
  color: ${(props) => (props.theme === 'dark' ? '#212529' : '#ffffff')};
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background: ${(props) => (props.theme === 'dark' ? '#f8f9fa' : '#343a40')};
    color: ${(props) => (props.theme === 'dark' ? '#343a40' : '#f8f9fa')};
  }
`;

const Details = styled.div`
  margin-top: 1rem;
  font-size: 0.875rem;
  line-height: 1.5;
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
        Tickets for the match against Vissel Kobe and for the Open Training session are on now on general sale.
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
          <div key={index} className="col">
            <EventCard theme={theme} onClick={() => handleExpand(index)}>
              <CardContent>
                <h5 className="card-title">{event.title}</h5>
                <p className="card-text"><i className="far fa-calendar-alt me-2"></i>{event.date}</p>
                <p className="card-text mb-3"><i className="fas fa-map-marker-alt me-2"></i>{event.location}</p>
                {expandedEvent === index && (
                  <Details>
                    <p>{event.details}</p>
                  </Details>
                )}
                <EventButton theme={theme}>
                  {expandedEvent === index ? 'Hide Details' : 'View Details'}
                </EventButton>
              </CardContent>
            </EventCard>
          </div>
        ))}
      </div>
    </EventsSection>
  );
};

export default Events;
