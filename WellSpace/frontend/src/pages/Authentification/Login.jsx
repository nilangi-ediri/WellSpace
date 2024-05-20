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
  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setShowToast(false);

    try {
      const response = await axios.post('http://localhost:5000/api/v1/auth/login', {
        email: email,
        password: password
      });

      const userData = response.data; 

      login(userData.data); 

      setShowToast(true);
      setTimeout(() => {
        navigate('/'); // Redirects to the home page after showing the toast
      }, 2000); // Wait for 2 seconds before redirecting

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
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={handlePasswordChange}
              required 
            />
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
