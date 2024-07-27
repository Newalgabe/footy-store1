import React from 'react';
import styled from 'styled-components';
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  background: ${(props) => (props.theme === 'light' 
    ? 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' 
    : 'linear-gradient(135deg, #343a40 0%, #495057 100%)')};
  color: ${(props) => (props.theme === 'light' ? '#212529' : '#ffffff')};
  padding: 3rem 2rem;
  border-top: 1px solid ${(props) => (props.theme === 'light' ? '#dee2e6' : '#495057')};
  border-radius: 1rem;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h5`
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  font-weight: 700;
  color: ${(props) => (props.theme === 'light' ? '#007bff' : '#00bfff')};
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
`;

const FooterLink = styled.a`
  color: ${(props) => (props.theme === 'light' ? '#212529' : '#ffffff')};
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;
  padding: 0.5rem 0;
  border-radius: 0.5rem;
  font-size: 1rem;

  &:hover {
    color: ${(props) => (props.theme === 'light' ? '#0056b3' : '#0099cc')};
    transform: translateY(-2px);
    background-color: ${(props) => (props.theme === 'light' ? '#e2e6ea' : '#495057')};
    padding: 0.5rem 1rem;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;

  a {
    color: ${(props) => (props.theme === 'light' ? '#212529' : '#ffffff')};
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
      color: ${(props) => (props.theme === 'light' ? '#0056b3' : '#0099cc')};
      transform: scale(1.2);
    }
  }
`;

const NewsletterSignup = styled.div`
  margin-top: 2rem;
  text-align: center;

  h6 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  input {
    border: 1px solid ${(props) => (props.theme === 'light' ? '#ced4da' : '#495057')};
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    width: 80%;
    max-width: 400px;
    margin-right: 0.5rem;
    font-size: 1rem;
  }

  button {
    background-color: ${(props) => (props.theme === 'light' ? '#007bff' : '#00bfff')};
    color: #ffffff;
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${(props) => (props.theme === 'light' ? '#0056b3' : '#0099cc')};
    }
  }
`;

const Footer = ({ theme }) => {
  return (
    <FooterWrapper theme={theme}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <SectionTitle>Use cases</SectionTitle>
            <FooterContent>
              <FooterLink theme={theme}>UI design</FooterLink>
              <FooterLink theme={theme}>UX design</FooterLink>
              <FooterLink theme={theme}>Wireframing</FooterLink>
              <FooterLink theme={theme}>Diagramming</FooterLink>
              <FooterLink theme={theme}>Brainstorming</FooterLink>
              <FooterLink theme={theme}>Online whiteboard</FooterLink>
              <FooterLink theme={theme}>Team collaboration</FooterLink>
            </FooterContent>
          </div>
          <div className="col-md-4 mb-4">
            <SectionTitle>Explore</SectionTitle>
            <FooterContent>
              <FooterLink theme={theme}>Design</FooterLink>
              <FooterLink theme={theme}>Prototyping</FooterLink>
              <FooterLink theme={theme}>Development features</FooterLink>
              <FooterLink theme={theme}>Design systems</FooterLink>
              <FooterLink theme={theme}>Collaboration features</FooterLink>
              <FooterLink theme={theme}>Design process</FooterLink>
              <FooterLink theme={theme}>FigJam</FooterLink>
            </FooterContent>
          </div>
          <div className="col-md-4 mb-4">
            <SectionTitle>Resources</SectionTitle>
            <FooterContent>
              <FooterLink theme={theme}>Blog</FooterLink>
              <FooterLink theme={theme}>Best practices</FooterLink>
              <FooterLink theme={theme}>Colors</FooterLink>
              <FooterLink theme={theme}>Color wheel</FooterLink>
              <FooterLink theme={theme}>Support</FooterLink>
              <FooterLink theme={theme}>Developers</FooterLink>
              <FooterLink theme={theme}>Resource library</FooterLink>
            </FooterContent>
            <div className="mt-4">
              <SectionTitle>Follow Us</SectionTitle>
              <SocialIcons theme={theme}>
                <FooterLink theme={theme} href="https://twitter.com/SpursOfficial"><FaTwitter size={28} /></FooterLink>
                <FooterLink theme={theme} href="https://www.instagram.com/spursofficial/"><FaInstagram size={28} /></FooterLink>
                <FooterLink theme={theme} href="https://www.youtube.com/user/spursofficial"><FaYoutube size={28} /></FooterLink>
                <FooterLink theme={theme} href="https://uk.linkedin.com/company/tottenham-hotspur-ltd"><FaLinkedin size={28} /></FooterLink>
              </SocialIcons>
            </div>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
