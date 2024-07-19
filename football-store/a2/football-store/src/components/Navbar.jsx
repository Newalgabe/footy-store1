import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Modal, Button, Form } from 'react-bootstrap';
import { FaUser, FaCog } from 'react-icons/fa';

const Navbar = ({ toggleTheme, theme }) => {
  const [showLogin, setShowLogin] = React.useState(false);
  const [showRegister, setShowRegister] = React.useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  return (
    <>
      <nav className={`navbar navbar-expand-lg ${theme === 'light' ? 'navbar-light bg-light' : 'navbar-dark bg-dark'} sticky-top`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Tottenham Store</Link>
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
                <Link className="nav-link" to="#">News</Link>
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

      <Modal show={showLogin} onHide={handleCloseLogin} className={theme === 'dark' ? 'modal-dark' : ''}>
        <Modal.Header closeButton className={theme === 'dark' ? 'bg-dark text-white' : ''}>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body className={theme === 'dark' ? 'bg-dark text-white' : ''}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" className={theme === 'dark' ? 'bg-dark text-white' : ''} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" className={theme === 'dark' ? 'bg-dark text-white' : ''} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleCloseLogin}>
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={showRegister} onHide={handleCloseRegister} className={theme === 'dark' ? 'modal-dark' : ''}>
        <Modal.Header closeButton className={theme === 'dark' ? 'bg-dark text-white' : ''}>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body className={theme === 'dark' ? 'bg-dark text-white' : ''}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" className={theme === 'dark' ? 'bg-dark text-white' : ''} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" className={theme === 'dark' ? 'bg-dark text-white' : ''} />
            </Form.Group>

            <Form.Group controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" className={theme === 'dark' ? 'bg-dark text-white' : ''} />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleCloseRegister}>
              Register
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Navbar;
