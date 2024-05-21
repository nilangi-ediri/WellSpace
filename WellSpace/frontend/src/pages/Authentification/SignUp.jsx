import React, { useState, useEffect } from 'react';
import { Form, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import axios from 'axios';
import uploadCloudinary from '../../utils/uploadCloudinary';
import { useNavigate, NavLink, useLocation } from 'react-router-dom';

function UserSignUp() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialRole = queryParams.get('role') || 'patient'; // default role is 'patient'

  const [userDetails, setUserDetails] = useState({
    role: initialRole,
    firstName: '',
    lastName: '',
    username: '',
    phoneNumber: '',
    email: '',
    password: '',
    verificationDocument: null
  });

  const navigate = useNavigate();

  useEffect(() => {
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      role: initialRole
    }));
  }, [initialRole]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setUserDetails(prevDetails => ({
      ...prevDetails,
      [name]: files ? files[0] : value
    }));
  };

  const handleFileChange = async (e) => {
    const { files } = e.target;
    if (files) {
      const file = files[0];
      const data = await uploadCloudinary(file);
      setUserDetails(prev => ({
        ...prev,
        verificationDocument: data.secure_url
      }));
    }
  };

  const handleRoleChange = (val) => setUserDetails({ ...userDetails, role: val });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      name: `${userDetails.firstName} ${userDetails.lastName}`,
      userName: userDetails.username,
      phoneNumber: userDetails.phoneNumber,
      email: userDetails.email,
      password: userDetails.password,
      verificationDocument: userDetails.verificationDocument,
      status: userDetails.role === 'doctor' ? 'pending' : 'active',
      role: userDetails.role
    };

    if (userDetails.role === 'doctor') {
      if (!userDetails.verificationDocument) {
        alert('Verification document is required for expert registration.');
        return;
      }
    }

    try {
      const response = await axios.post('http://localhost:5000/api/v1/auth/register', userData);
      console.log('Data sent successfully:', response.data);
      alert(userDetails.role === 'doctor' ? 'Thank you for registering as an expert. You will be notified once your documents are verified.' : 'Your account has been created successfully.');
    } catch (error) {
      console.error('Error:', error);
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

        <ToggleButtonGroup type="radio" name="role" value={userDetails.role} onChange={handleRoleChange}>
          <ToggleButton id="tbg-radio-1" value={'patient'} variant="outline-dark">User</ToggleButton>
          <ToggleButton id="tbg-radio-2" value={'doctor'} variant="outline-dark">Expert</ToggleButton>
        </ToggleButtonGroup>

        <Form onSubmit={handleSubmit} className="mt-3">
          <Form.Group className="mb-3" controlId="formFirstName">
            <Form.Control
              type="text"
              name="firstName"
              placeholder="First Name"
              value={userDetails.firstName}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formLastName">
            <Form.Control
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={userDetails.lastName}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Control
              type="text"
              name="username"
              placeholder="User Name"
              value={userDetails.username}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPhone">
            <Form.Control
              type="number"
              name="phoneNumber"
              placeholder="Phone Number"
              value={userDetails.phoneNumber}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              name="email"
              placeholder="E-mail"
              value={userDetails.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={userDetails.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {userDetails.role === 'doctor' && (
            <Form.Group className="mb-3" controlId="formVerificationDocument">
              <Form.Label>Expert Verification Document</Form.Label>
              <Form.Control
                type="file"
                name="verificationDocument"
                onChange={handleFileChange}
                required={userDetails.role === 'doctor'}
              />
            </Form.Group>
          )}

          <div className="text-center mt-3">
            <p style={{ fontSize: '0.875em', color: '#6c757d', textShadow: '1px 1px 1px rgba(0, 0, 0, 0.1)' }}>
              Already have an account?
              <NavLink 
                to="/login" 
                style={{ 
                  marginLeft: '5px', // Add space before the link
                  color: '#6c757d', 
                  textDecoration: 'underline', 
                  textShadow: '1px 1px 1px rgba(0, 0, 0, 0.1)' 
                }}
              >
                Log In
              </NavLink>
            </p>
          </div>

          <Button variant="dark" type="submit" className="w-100">
            {userDetails.role === 'doctor' ? 'Register as Expert' : 'Create Account'}
          </Button>

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
        </Form>
      </div>
    </div>
  );
}

export default UserSignUp;
