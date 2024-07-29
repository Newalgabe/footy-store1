import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import styled, { keyframes } from 'styled-components';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const commonPasswords = ["123456Aa@", "Password1!", "123456789aB."];

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

const StyledForm = styled(Form)`
  animation: ${fadeIn} 0.5s ease-in-out;
  .form-label {
    font-weight: bold;
    color: ${({ theme }) => theme === 'dark' ? '#ffffff' : '#007bff'};
  }
  .form-control {
    border-radius: 10px;
    padding: 0.75rem;
    border: 1px solid ${({ theme }) => theme === 'dark' ? '#6c757d' : '#ced4da'};
    background-color: ${({ theme }) => theme === 'dark' ? '#343a40' : '#ffffff'};
    color: ${({ theme }) => theme === 'dark' ? '#ffffff' : '#495057'};
  }
  .btn-primary {
    background-color: #007bff;
    border: none;
    border-radius: 50px;
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    text-transform: uppercase;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
  }
  .forgot-password {
    text-align: right;
    margin-top: 1rem;
    color: ${({ theme }) => theme === 'dark' ? '#ffc107' : '#007bff'};
    cursor: pointer;
    font-size: 0.9rem;
    &:hover {
      text-decoration: underline;
    }
  }
  .reset-password-message {
    margin-top: 0.5rem;
    color: ${({ theme }) => theme === 'dark' ? '#ffc107' : '#007bff'};
    font-size: 0.9rem;
    text-align: center;
  }
`;

const PassDetails = ({ type, handleClose, handleShowForgotPassword, theme }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [errors, setErrors] = useState({});
  const [resetPasswordMessage, setResetPasswordMessage] = useState(false);

  const validateEmail = (email) => emailRegex.test(email);
  const validatePassword = (password) => passwordRegex.test(password) && !commonPasswords.includes(password);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    } else if (!validatePassword(password)) {
      newErrors.password = "Password must be at least 8 characters long, contain uppercase, lowercase, number, and special character, and not be a common password.";
    }

    if (type === 'register') {
      if (!username) {
        newErrors.username = "Username is required.";
      } else if (!/^[a-zA-Z0-9]+$/.test(username)) {
        newErrors.username = "Username can only contain alphanumeric characters.";
      }

      if (!confirmPassword) {
        newErrors.confirmPassword = "Confirm Password is required.";
      } else if (password !== confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match.";
      }
    }

    if (Object.keys(newErrors).length === 0) {
      handleClose();
    } else {
      setErrors(newErrors);
    }
  };

  const handleForgotPasswordClick = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(email)) {
      newErrors.email = "Invalid email format.";
    }

    if (Object.keys(newErrors).length === 0) {
      setResetPasswordMessage(true);
      handleShowForgotPassword();
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit} theme={theme}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          theme={theme}
        />
        {errors.email && <Form.Text className="text-danger">{errors.email}</Form.Text>}
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          theme={theme}
        />
        {errors.password && <Form.Text className="text-danger">{errors.password}</Form.Text>}
      </Form.Group>

      {type === 'register' && (
        <>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              theme={theme}
            />
            {errors.username && <Form.Text className="text-danger">{errors.username}</Form.Text>}
          </Form.Group>

          <Form.Group controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              theme={theme}
            />
            {errors.confirmPassword && <Form.Text className="text-danger">{errors.confirmPassword}</Form.Text>}
          </Form.Group>
        </>
      )}

      {type === 'login' && (
        <>
          <div className="forgot-password" onClick={handleForgotPasswordClick}>
            Forgot password?
          </div>
          {resetPasswordMessage && (
            <div className="reset-password-message">
              A password reset email will be sent to your email address.
            </div>
          )}
        </>
      )}

      <Button variant="primary" type="submit">
        {type === 'login' ? 'Login' : 'Register'}
      </Button>
    </StyledForm>
  );
};

export default PassDetails;
