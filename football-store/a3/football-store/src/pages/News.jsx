import React, { useState } from 'react';
import { Card, Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';
import styled, { keyframes } from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const newsArticles = [
  {
    title: 'Micky van de Ven taunts young Tottenham star with humorous social media post',
    date: '07:00, 19 JUL 2024',
    summary: 'The Netherlands centre-back made sure that his fellow Tottenham defender knew that he was watching in him friendly action',
    content: "Micky van de Ven had little hesitation in taunting his fellow young Tottenham centre-back Ashley Phillips on social media after the friendly win against Hearts.\nThe Dutchman has been resting up after featuring for the Netherlands at the Euros ahead of re-joining Tottenham for pre-season. It appears that while relaxing the 23-year-old has been keeping a close eye on his club and watched Spurs' 5-1 win at Heart of Midlothian on Wednesday evening as he soon commented on Phillips' Instagram post on Thursday following the match\n...",
    imgUrl: 'https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/van-der-ven-085220-16x9.png?VersionId=Mw_tAuklErUB2w.HmZCerp6bxv5fu0Ub&size=690:388',
  },
  {
    title: 'Every word Ange Postecoglou said on transfers, England, Archie Gray, Djed Spence and Bentancur',
    date: '22:05, 17 JUL 2024',
    summary: "Here's every single word Ange Postecoglou said following Tottenham's 5-1 friendly win at Hearts on Wednesday evening",
    content: "Was that a good run-out for the players with a lot of young players doing their bit to impress you?\nYeah it was a good run-out. It's always good when you play these games and there's a good crowd and a good atmosphere because it feels like a real game sometimes. A friendly game you worry that the competitiveness and intensity isn't there but I thought it was today. Both halves were good. We played some decent football. The boys worked hard, no injuries. We're only nine days into pre-season so overall I thought it was a good hit out for us\n...",
    imgUrl: 'https://image.assets.pressassociation.io/v2/image/production/e09a0eea95bd065e37c6e172b7c534a6Y29udGVudHNlYXJjaGFwaSwxNzIxMzM1MDU5/2.76876026.jpg?rect=0,159,1711,962&ext=.jpg',
  },
  {
    title: 'The young Tottenham midfielder making a huge impression on Ange Postecoglou and his coaches',
    date: '07:00, 16 JUL 2024',
    summary: "It's time for the latest episode of our podcast Gold & Guest Talk Tottenham with our Spurs correspondents Alasdair Gold and Rob Guest",
    content: "Archie Gray has been settling in well so far and impressing following his £40million move from Leeds to Tottenham Hotspur.\nThe 18-year-old played 52 times last season for Leeds and was named Championship Young Player of the Season before arriving at Spurs this month in a deal which saw Joe Rodon head in the opposite direction. Gray is naturally a central midfielder but played much of last season at right-back, a position Ange Postecoglou used him in during the second half of a behind-closed-door friendly against Cambridge United on Saturday\n...",
    imgUrl: 'https://prod-media.beinsports.com/image/1721253601204_0306addc-d56b-452c-857e-bc4a564df228.jpg',
  },
];

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
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
  margin-top: 23px;
  margin-bottom: -43px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const NewsSection = styled(Container)`
  background: rgba(255, 255, 255, 0.1);
  padding: 60px 20px;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1s ease-in-out;
  backdrop-filter: blur(10px);
`;

const NewsCard = styled(Card)`
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  border: none;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ModalStyled = styled(Modal)`
  .modal-content {
    background-color: ${({ theme }) => (theme === 'dark' ? 'rgba(28, 28, 30, 0.95)' : 'rgba(255, 255, 255, 0.95)')};
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
  }
  .modal-header {
    border-bottom: none;
  }
  .modal-title {
    font-size: 2rem;
    font-weight: bold;
    color: ${({ theme }) => (theme === 'dark' ? '#FFD700' : '#007bff')};
  }
  .modal-body {
    line-height: 1.8;
    font-size: 1.1rem;
    background-color: ${({ theme }) => (theme === 'dark' ? 'rgba(28, 28, 30, 0.95)' : 'rgba(255, 255, 255, 0.95)')};
  }
  .btn-outline-light {
    color: #fff;
    border-color: #fff;
  }
  .close-button {
    border-radius: 50px;
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    text-transform: uppercase;
    transition: all 0.3s ease;
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
  }
`;

const News = ({ theme, toggleTheme }) => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const navigate = useNavigate();

  const handleShowArticle = (article) => setSelectedArticle(article);
  const handleCloseArticle = () => setSelectedArticle(null);
  const handleGoBack = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(-1);
  };

  return (
    <div>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Container className="my-5">
        <Row className="justify-content-start mb-3">
          <Col md={4} className="text-left">
            <GoBackButton onClick={handleGoBack}>
              <IoMdArrowBack style={{ marginRight: '5px' }} /> Go Back
            </GoBackButton>
          </Col>
        </Row>
      </Container>
      <div
        style={{
          backgroundImage: 'url(https://media.timeout.com/images/105685403/image.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '40px 0',
        }}
      >
        <NewsSection className="my-5">
          <h1 className={`main-title text-center mb-5 ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
            <span style={{ color: 'blue' }}>Latest News</span>
          </h1>
          <Row>
            {newsArticles.map((article, index) => (
              <Col key={index} md={4} className="mb-4">
                <NewsCard className={`h-100 ${theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
                  <Card.Img variant="top" src={article.imgUrl} />
                  <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text>
                      <small className="text-muted">{article.date}</small>
                    </Card.Text>
                    <Card.Text>{article.summary}</Card.Text>
                    <Button
                      variant={theme === 'dark' ? 'outline-light' : 'outline-dark'}
                      onClick={() => handleShowArticle(article)}
                    >
                      Read More
                    </Button>
                  </Card.Body>
                </NewsCard>
              </Col>
            ))}
          </Row>
        </NewsSection>
      </div>
      <Footer theme={theme} />
      {selectedArticle && (
        <ModalStyled show={true} onHide={handleCloseArticle} theme={theme} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedArticle.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedArticle.imgUrl}
              alt={selectedArticle.title}
              className="img-fluid mb-3"
              style={{ borderRadius: '10px' }}
            />
            <p>{selectedArticle.content}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant={theme === 'dark' ? 'outline-light' : 'outline-dark'}
              className="close-button"
              onClick={handleCloseArticle}
            >
              Close
            </Button>
          </Modal.Footer>
        </ModalStyled>
      )}
      <BackToTop theme={theme} />
    </div>
  );
};

export default News;
