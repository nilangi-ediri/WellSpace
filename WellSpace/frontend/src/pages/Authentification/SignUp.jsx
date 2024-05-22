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

  const [errors, setErrors] = useState({});
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
    validateField(name, value);
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

  const validateField = (name, value) => {
    let errorMsg = '';
    switch (name) {
      case 'firstName':
      case 'lastName':
        if (!/^[A-Za-z]+$/.test(value)) {
          errorMsg = 'Only alphabetic characters are allowed';
        } else if (value.length < 2) {
          errorMsg = 'Must be at least 2 characters long';
        }
        break;
      case 'username':
        if (!/^[A-Za-z0-9]+$/.test(value)) {
          errorMsg = 'Only alphanumeric characters are allowed';
        } else if (value.length < 3) {
          errorMsg = 'Must be at least 3 characters long';
        }
        break;
      case 'phoneNumber':
        if (!/^\d{10}$/.test(value)) {
          errorMsg = 'Phone number must be exactly 10 digits';
        }
        break;
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
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: errorMsg
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if there are any errors before submitting
    const formErrors = Object.values(errors).filter(error => error);
    if (formErrors.length > 0) {
      alert('Please fix the errors in the form');
      return;
    }

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
      navigate('/login');
    } catch (error) {
      if (error.response && error.response.status === 400 && error.response.data.message === "User exists!") {
        alert('A user with this email already exists. Please log in or use a different email.');
      } else {
        console.error('Error:', error);
        alert('An error occurred while creating your account. Please try again.');
      }
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
              isInvalid={!!errors.firstName}
              required
            />
            <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formLastName">
            <Form.Control
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={userDetails.lastName}
              onChange={handleChange}
              isInvalid={!!errors.lastName}
              required
            />
            <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Control
              type="text"
              name="username"
              placeholder="User Name"
              value={userDetails.username}
              onChange={handleChange}
              isInvalid={!!errors.username}
              required
            />
            <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPhone">
            <Form.Control
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={userDetails.phoneNumber}
              onChange={handleChange}
              isInvalid={!!errors.phoneNumber}
              required
            />
            <Form.Control.Feedback type="invalid">{errors.phoneNumber}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              name="email"
              placeholder="E-mail"
              value={userDetails.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
              required
            />
            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={userDetails.password}
              onChange={handleChange}
              isInvalid={!!errors.password}
              required
            />
            <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
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

/* First Name and Last Name: Only alphabetic characters, minimum length of 2 characters.
Username: Alphanumeric characters only, minimum length of 3 characters.
Phone Number: Exactly 10 digits.
Email: Valid email format.
Password: Minimum 6 characters. */