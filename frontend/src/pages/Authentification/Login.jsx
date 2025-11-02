import React, { useState, useContext } from 'react';
import { Form, Button, Toast, ToastContainer } from 'react-bootstrap';
import { useNavigate, NavLink } from 'react-router-dom';
import axios from 'axios';
import UserContext from '../../contexts/UserContext';

function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateField('email', e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validateField('password', e.target.value);
  };

  const validateField = (name, value) => {
    let errorMsg = '';
    switch (name) {
      case 'email':
        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
          errorMsg = 'Invalid email format';
        }
        break;
      case 'password':
        if (value.length < 3) {
          errorMsg = 'Password must be at least 3 characters long';
        }
        break;
      default:
        break;
    }
    setValidationErrors(prevErrors => ({
      ...prevErrors,
      [name]: errorMsg
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setShowToast(false);

    const formErrors = Object.values(validationErrors).filter(error => error);
    if (formErrors.length > 0) {
      setError('Please fix the errors in the form');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/v1/auth/login', {
        email: email,
        password: password
      });

      const userData = response.data;

      login(userData.data);

      setShowToast(true);
      navigate('/');

    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || 'An error occurred during login.');
      } else if (error.request) {
        setError('No response from server. Check your network connection.');
      } else {
        setError('Error setting up request.');
      }
      console.error('Login error:', error);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2 className="text-center">WellSpace</h2>
        <img
          src="/images/Logo.png"
          style={{
            display: 'block',
            margin: '0 auto',
            width: '60px',
            height: 'auto'
          }}
          alt="WellSpace Logo"
        />

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control 
              type="email" 
              placeholder="E-mail" 
              value={email}
              onChange={handleEmailChange}
              isInvalid={!!validationErrors.email}
              required 
            />
            <Form.Control.Feedback type="invalid">{validationErrors.email}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={handlePasswordChange}
              isInvalid={!!validationErrors.password}
              required 
            />
            <Form.Control.Feedback type="invalid">{validationErrors.password}</Form.Control.Feedback>
          </Form.Group>
          
          {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

          <Button variant="dark" type="submit" className="w-100">
            LogIn
          </Button>
        </Form>

        <div className="text-center mt-3">
          <p style={{ fontSize: '0.875em', color: '#6c757d', textShadow: '1px 1px 1px rgba(0, 0, 0, 0.1)' }}>
            Don't have an account?
            <NavLink 
              to="/sign-up" 
              style={{ 
                marginLeft: '5px', // Add space before the link
                color: '#6c757d', 
                textDecoration: 'underline', 
                textShadow: '1px 1px 1px rgba(0, 0, 0, 0.1)' 
              }}
            >
              Sign Up
            </NavLink>
          </p>
        </div>

        <div className="text-center mt-3">
          <Button 
            variant="link" 
            onClick={() => navigate('/')} 
            style={{ 
              textDecoration: 'underline', 
              color: '#6c757d', 
              textShadow: '1px 1px 1px rgba(0, 0, 0, 0.1)' 
            }}
          >
            Back to Home
          </Button>
        </div>

        <ToastContainer className="p-3" position="top-end">
          <Toast onClose={() => setShowToast(false)} show={showToast} delay={2000} autohide>
            <Toast.Header>
              <strong className="me-auto">Login Success</strong>
            </Toast.Header>
            <Toast.Body>Welcome back!</Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
    </div>
  );
}

export default UserLogin;

/* Email: Valid email format.
Password: Minimum length of 3 characters. */