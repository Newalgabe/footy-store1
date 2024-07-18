import React from 'react';
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Footer = ({ theme }) => {
  return (
    <footer className={`py-4 ${theme === 'light' ? 'bg-light text-dark' : 'bg-dark text-white'}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Use cases</h5>
            <ul className="list-unstyled">
              <li>UI design</li>
              <li>UX design</li>
              <li>Wireframing</li>
              <li>Diagramming</li>
              <li>Brainstorming</li>
              <li>Online whiteboard</li>
              <li>Team collaboration</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Explore</h5>
            <ul className="list-unstyled">
              <li>Design</li>
              <li>Prototyping</li>
              <li>Development features</li>
              <li>Design systems</li>
              <li>Collaboration features</li>
              <li>Design process</li>
              <li>FigJam</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Resources</h5>
            <ul className="list-unstyled">
              <li>Blog</li>
              <li>Best practices</li>
              <li>Colors</li>
              <li>Color wheel</li>
              <li>Support</li>
              <li>Developers</li>
              <li>Resource library</li>
            </ul>
            <div className="d-flex mt-3">
              <a href="https://twitter.com/SpursOfficial" className={`me-3 ${theme === 'light' ? 'text-dark' : 'text-white'}`}><FaTwitter /></a>
              <a href="https://www.instagram.com/spursofficial/" className={`me-3 ${theme === 'light' ? 'text-dark' : 'text-white'}`}><FaInstagram /></a>
              <a href="https://www.youtube.com/user/spursofficial" className={`me-3 ${theme === 'light' ? 'text-dark' : 'text-white'}`}><FaYoutube /></a>
              <a href="https://uk.linkedin.com/company/tottenham-hotspur-ltd" className={`me-3 ${theme === 'light' ? 'text-dark' : 'text-white'}`}><FaLinkedin /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
