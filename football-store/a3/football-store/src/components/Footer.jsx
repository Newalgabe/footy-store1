import React from 'react';
import styled from 'styled-components';
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  background-color: ${(props) => (props.theme === 'light' ? '#f8f9fa' : '#343a40')};
  color: ${(props) => (props.theme === 'light' ? '#212529' : '#ffffff')};
  padding: 2rem 0;
`;

const SectionTitle = styled.h5`
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  font-weight: bold;
`;

const FooterLink = styled.a`
  color: ${(props) => (props.theme === 'light' ? '#212529' : '#ffffff')};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => (props.theme === 'light' ? '#007bff' : '#007bff')};
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
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
              <SocialIcons>
                <FooterLink theme={theme} href="https://twitter.com/SpursOfficial"><FaTwitter size={24} /></FooterLink>
                <FooterLink theme={theme} href="https://www.instagram.com/spursofficial/"><FaInstagram size={24} /></FooterLink>
                <FooterLink theme={theme} href="https://www.youtube.com/user/spursofficial"><FaYoutube size={24} /></FooterLink>
                <FooterLink theme={theme} href="https://uk.linkedin.com/company/tottenham-hotspur-ltd"><FaLinkedin size={24} /></FooterLink>
              </SocialIcons>
            </div>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
