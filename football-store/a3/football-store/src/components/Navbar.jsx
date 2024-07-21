import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Modal } from 'react-bootstrap';
import { FaUser, FaCog } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';
import PassDetails from './PassDetails';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledNav = styled.nav`
  .navbar {
    transition: all 0.3s ease;
    position: fixed;
    top: 0;
    z-index: 1000;
    width: 100%;
    background-color: ${(props) => (props.theme === 'light' ? '#ffffff' : '#1f1f1f')};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 0.5rem 1rem;
  }

  .navbar-brand {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => (props.theme === 'light' ? '#212529' : '#f8f9fa')};
    text-transform: uppercase;
    letter-spacing: 1.2px;

    img {
      height: 40px;
      margin: 0 10px;
    }
  }

  .navbar-toggler {
    border: none;
    color: ${(props) => (props.theme === 'light' ? '#212529' : '#f8f9fa')};
  }

  .navbar-toggler:focus {
    box-shadow: none;
  }

  .nav-link {
    color: ${(props) => (props.theme === 'light' ? '#212529' : '#f8f9fa')};
    font-size: 1.1rem;
    margin: 0 0.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${(props) => (props.theme === 'light' ? '#007bff' : '#ffc107')};
    }
  }

  .dropdown-toggle::after {
    display: none;
  }
`;

const StyledModal = styled(Modal)`
  .modal-content {
    background-color: ${({ theme }) => (theme === 'dark' ? '#343a40' : '#ffffff')};
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    animation: ${fadeIn} 0.5s ease-in-out;
  }

  .modal-header, .modal-body {
    border-bottom: none;
  }

  .modal-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#000000')};
  }

  .close {
    color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#000000')};
  }
`;

const Navbar = ({ toggleTheme, theme }) => {
  const [showLogin, setShowLogin] = React.useState(false);
  const [showRegister, setShowRegister] = React.useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  return (
    <>
      <StyledNav theme={theme}>
        <nav className={`navbar navbar-expand-lg ${theme === 'light' ? 'navbar-light' : 'navbar-dark'}`}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Tottenham
              <img src="https://i.pinimg.com/originals/9b/fa/b0/9bfab08e8215fc14783e0bda3ace32d6.png" alt="Tottenham Logo" />
              Store
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">Catalog</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/news">News</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about-us">About Us</Link>
                </li>
              </ul>
              <div className="d-flex">
                <Dropdown>
                  <Dropdown.Toggle variant="link" className={`text-decoration-none ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
                    <FaUser />
                  </Dropdown.Toggle>
                  <Dropdown.Menu align="end" className={theme === 'dark' ? 'dropdown-menu-dark' : ''}>
                    <Dropdown.Item onClick={handleShowLogin}>Login</Dropdown.Item>
                    <Dropdown.Item onClick={handleShowRegister}>Register</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <a href="#" className="nav-link" onClick={toggleTheme}><FaCog /></a>
              </div>
            </div>
          </div>
        </nav>
      </StyledNav>

      <StyledModal show={showLogin} onHide={handleCloseLogin} theme={theme}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PassDetails type="login" handleClose={handleCloseLogin} theme={theme} />
        </Modal.Body>
      </StyledModal>

      <StyledModal show={showRegister} onHide={handleCloseRegister} theme={theme}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PassDetails type="register" handleClose={handleCloseRegister} theme={theme} />
        </Modal.Body>
      </StyledModal>
    </>
  );
};

export default Navbar;
