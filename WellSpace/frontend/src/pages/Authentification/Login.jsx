import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Call the backend API to login 
      const response = await axios.post('http://localhost:5000/api/v1/auth/login', {
        email: email,
        password: password
      });

      // You can check the response data for some condition if needed
      if (response.data.status === 'approved') {
        console.log('Login successful:', response.data);
        // Redirect or do something on successful login
      } else {
        setError('Your account is not approved yet.');
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(error.response.data.message || 'An error occurred during login.');
      } else if (error.request) {
        // The request was made but no response was received
        setError('No response from server. Check your network connection.');
      } else {
        // Something happened in setting up the request that triggered an Error
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
      </div>
    </div>
  );
}

export default UserLogin;
