import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Modal, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';
import { FaShareAlt, FaThumbsUp, FaComment } from 'react-icons/fa';
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

const slideIn = keyframes`
  from {
    transform: translateY(50px);
  }
  to {
    transform: translateY(0);
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
    background: linear-gradient(135deg, #5a6eea, #6c3f8b);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.5);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    background: linear-gradient(135deg, #5a6eea, #6c3f8b);
  }
`;

const NewsSection = styled(Container)`
  background: ${({ theme }) => (theme === 'dark' ? 'rgba(18, 18, 18, 0.7)' : 'rgba(255, 255, 255, 0.7)')};
  padding: 60px 20px;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1s ease-in-out, ${slideIn} 0.6s ease-out;
  backdrop-filter: blur(10px);
  transition: background 0.5s ease, color 0.5s ease;
  @media (max-width: 768px) {
    padding: 40px 10px;
  }
`;

const NewsCard = styled(Card)`
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out, background 0.5s ease, color 0.5s ease;
  border: none;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

const ModalStyled = styled(Modal)`
  .modal-content {
    background-color: ${({ theme }) => (theme === 'dark' ? 'rgba(28, 28, 30, 0.8)' : 'rgba(255, 255, 255, 0.8)')};
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
    transition: background 0.5s ease, color 0.5s ease;
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
    background-color: ${({ theme }) => (theme === 'dark' ? 'rgba(28, 28, 30, 0.8)' : 'rgba(255, 255, 255, 0.8)')};
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
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
      background: linear-gradient(135deg, #5a6eea, #6c3f8b);
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.5);
    }

    &:active {
      transform: translateY(1px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
      background: linear-gradient(135deg, #5a6eea, #6c3f8b);
    }
  }
`;

const SearchBar = styled(Form.Control)`
  margin-bottom: 20px;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  border: 1px solid ${({ theme }) => (theme === 'dark' ? '#444' : '#ddd')};
  background: ${({ theme }) => (theme === 'dark' ? 'linear-gradient(145deg, #444, #333)' : 'linear-gradient(145deg, #f9f9f9, #fff)')};
  color: ${({ theme }) => (theme === 'dark' ? '#eee' : '#333')};
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  box-shadow: ${({ theme }) => (theme === 'dark' ? '0 4px 8px rgba(0, 0, 0, 0.2)' : '0 4px 8px rgba(0, 0, 0, 0.05)')};
  transition: all 0.3s ease;

  &::placeholder {
    color: ${({ theme }) => (theme === 'dark' ? '#888' : '#aaa')};
    opacity: 0.7;
  }

  &:hover {
    border-color: ${({ theme }) => (theme === 'dark' ? '#4a90e2' : '#4a90e2')};
    background: ${({ theme }) => (theme === 'dark' ? '#444' : '#f4f4f4')};
  }

  &:focus {
    border-color: ${({ theme }) => (theme === 'dark' ? '#4a90e2' : '#4a90e2')};
    background: ${({ theme }) => (theme === 'dark' ? '#333' : '#fff')};
    color: ${({ theme }) => (theme === 'dark' ? '#eee' : '#333')};
    outline: none;
    box-shadow: 0 0 0 4px ${({ theme }) => (theme === 'dark' ? 'rgba(74, 144, 226, 0.5)' : 'rgba(74, 144, 226, 0.2)')};
    transform: scale(1.02);
    transition: all 0.2s ease;
  }

  @media (max-width: 768px) {
    padding: 0.4rem 1.2rem;
    font-size: 0.9rem;
    margin-top: 40px
    margin-bottom: -30px;
  }
`;



const News = ({ theme, toggleTheme }) => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem('likes')) || {};
    setLikes(savedLikes);
  }, []);

  const handleShowArticle = (article) => setSelectedArticle(article);
  const handleCloseArticle = () => setSelectedArticle(null);
  const handleGoBack = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(-1);
  };

  const handleSearch = (e) => setSearchQuery(e.target.value.toLowerCase());

  const filteredArticles = newsArticles.filter(article =>
    article.title.toLowerCase().includes(searchQuery) ||
    article.content.toLowerCase().includes(searchQuery)
  );

  const handleLike = (title) => {
    const savedLikes = JSON.parse(localStorage.getItem('likes')) || {};
    if (!savedLikes[title]) {
      const newLikes = {
        ...savedLikes,
        [title]: (savedLikes[title] || 0) + 1,
      };
      setLikes(newLikes);
      localStorage.setItem('likes', JSON.stringify(newLikes));
    } else {
      alert('You have already liked this article.');
    }
  };

  const handleComment = (title, comment) => {
    setComments((prev) => ({
      ...prev,
      [title]: [...(prev[title] || []), comment],
    }));
  };

  const handleShare = (article) => {
    const shareData = {
      title: article.title,
      text: article.summary,
      url: window.location.href,
    };

    if (navigator.share) {
      navigator.share(shareData)
        .then(() => console.log('Article shared successfully!'))
        .catch((error) => console.error('Error sharing article:', error));
    } else {
      navigator.clipboard.writeText(window.location.href)
        .then(() => alert('URL copied to clipboard'))
        .catch((error) => console.error('Error copying URL:', error));
    }
  };

  return (
    <div>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Container className="my-5">
        <Row className="justify-content-start mb-3">
          <Col md={4} className="text-left">
            <GoBackButton onClick={handleGoBack} aria-label="Go Back">
              <IoMdArrowBack style={{ marginRight: '5px' }} /> Go Back
            </GoBackButton>
          </Col>
        </Row>
        <Row className="justify-content-center mb-3">
          <Col md={8}>
            <SearchBar 
              type="text"
              placeholder="Search for news..."
              value={searchQuery}
              onChange={handleSearch}
              theme={theme}
            />
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
        <NewsSection className="my-5" theme={theme}>
          <h1 className={`main-title text-center mb-5 ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
            <span style={{ color: 'blue' }}>Latest News</span>
          </h1>
          <Row>
            {filteredArticles.map((article, index) => (
              <Col key={index} md={4} className="mb-4">
                <NewsCard className={`h-100 ${theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'}`} aria-label={article.title}>
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
                      aria-label={`Read more about ${article.title}`}
                    >
                      Read More
                    </Button>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <Button variant="link" onClick={() => handleLike(article.title)}>
                        <FaThumbsUp /> {likes[article.title] || 0}
                      </Button>
                      <Button variant="link" onClick={() => handleShowArticle(article)}>
                        <FaComment /> {comments[article.title] ? comments[article.title].length : 0}
                      </Button>
                      <Button variant="link" onClick={() => handleShare(article)}>
                        <FaShareAlt />
                      </Button>
                    </div>
                  </Card.Body>
                </NewsCard>
              </Col>
            ))}
          </Row>
        </NewsSection>
      </div>
      <Footer theme={theme} />
      {selectedArticle && (
        <ModalStyled show={true} onHide={handleCloseArticle} theme={theme} centered aria-labelledby="modal-title">
          <Modal.Header closeButton>
            <Modal.Title id="modal-title">{selectedArticle.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedArticle.imgUrl}
              alt={selectedArticle.title}
              className="img-fluid mb-3"
              style={{ borderRadius: '10px' }}
            />
            <p>{selectedArticle.content}</p>
            <h5>Comments</h5>
            {comments[selectedArticle.title]?.map((comment, idx) => (
              <p key={idx}>&ldquo;{comment}&rdquo;</p>
            ))}
            <Form onSubmit={(e) => {
              e.preventDefault();
              const comment = e.target.elements.comment.value;
              if (comment) {
                handleComment(selectedArticle.title, comment);
                e.target.reset();
              }
            }}>
              <Form.Group>
                <Form.Control type="text" name="comment" placeholder="Add a comment" />
              </Form.Group>
              <Button type="submit" className="mt-2">
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="close-button"
              onClick={handleCloseArticle}
              aria-label="Close"
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