import React, { useEffect } from 'react';
import styled from 'styled-components';

const BannerSection = styled.section`
  padding: 5rem 0;
  background: ${({ theme }) => (theme === 'dark' ? '#343a40' : '#f8f9fa')};
  color: ${({ theme }) => (theme === 'dark' ? '#e9ecef' : '#343a40')};
  text-align: center;
`;

const Card = styled.div`
  background: ${({ theme }) => (theme === 'dark' ? '#495057' : '#ffffff')};
  border: 1px solid ${({ theme }) => (theme === 'dark' ? '#6c757d' : '#dee2e6')};
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  max-width: 100%;
  margin: 0 auto;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const CardBody = styled.div`
  padding: 2rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => (theme === 'dark' ? '#e9ecef' : '#343a40')};
  text-transform: uppercase;
`;

const Button = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  margin: 0.5rem 0;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.3s ease, color 0.3s ease;
  background: ${({ theme }) => (theme === 'dark' ? 'transparent' : '#007bff')};
  color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#ffffff')};
  border: ${({ theme }) => (theme === 'dark' ? '1px solid #ffffff' : 'none')};

  &:hover {
    background: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#0056b3')};
    color: ${({ theme }) => (theme === 'dark' ? '#343a40' : '#ffffff')};
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  margin: 1rem 0;
  color: ${({ theme }) => (theme === 'dark' ? '#e9ecef' : '#343a40')};
`;

const VideoBanner = ({ theme }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <BannerSection theme={theme}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <Card theme={theme}>
              <CardBody theme={theme}>
                <Title theme={theme}>Watch Our Latest Highlights</Title>
                <div className="tiktok-embed" style={{ maxWidth: '100%', margin: '0 auto' }}>
                  <blockquote
                    className="tiktok-embed"
                    cite="https://www.tiktok.com/@spursofficial/video/7376543602048060705"
                    data-video-id="7376543602048060705"
                    style={{ maxWidth: '605px', minWidth: '325px', margin: '0 auto' }}
                  >
                    <section>
                      <Button
                        target="_blank"
                        title="@spursofficial"
                        href="https://www.tiktok.com/@spursofficial?refer=embed"
                        theme={theme}
                      >
                        @spursofficial on TikTok
                      </Button>
                      <Description theme={theme}>
                        Our 2024/25 Home Kit has arrived and it looks this good 🔥
                      </Description>
                      <Button
                        target="_blank"
                        title="♬ original sound - spursofficial"
                        href="https://www.tiktok.com/music/original-sound-7376543699909610273?refer=embed"
                        theme={theme}
                      >
                        Listen to the Soundtrack
                      </Button>
                    </section>
                  </blockquote>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </BannerSection>
  );
};

export default VideoBanner;
