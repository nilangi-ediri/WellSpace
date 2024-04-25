import React, { useState } from 'react';
import { Form, Button, ToggleButtonGroup, ToggleButton, OverlayTrigger, Tooltip } from 'react-bootstrap';

function UserSignUp() {
  const [userDetails, setUserDetails] = useState({
    role: 'user', // default role is 'user'
    firstName: '',
    lastName: '',
    username: '',
    phoneNumber: '',
    email: '',
    password: '',
    verificationDocument: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setUserDetails(prevDetails => ({
      ...prevDetails,
      [name]: files ? files[0] : value
    }));
  };

  const handleRoleChange = (val) => setUserDetails({ ...userDetails, role: val });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // The form data for the backend API
    const userData = {
      name: `${userDetails.firstName} ${userDetails.lastName}`,
      username: userDetails.username,
      phoneNumber: userDetails.phoneNumber,
      email: userDetails.email,
      password: userDetails.password,
      verificationDocumentURL: '',
      status: userDetails.role === 'expert' ? 'pending' : 'active'
    };

    // Add verification document for expert
    if (userDetails.role === 'expert') {
      // Convert the file to a URL or send the file itself based on your backend implementation
      // Here we're just using the file name as a placeholder
      userData.verificationDocumentURL = userDetails.verificationDocument?.name || '';
    }

    console.log('User data to be submitted:', userData);

    // Here you would submit to the appropriate backend endpoint
    if (userDetails.role === 'expert') {
      if (!userDetails.verificationDocument) {
        alert('Verification document is required for expert registration.');
        return;
      }
      // Submit to the expert registration endpoint
      alert('Thank you for registering as an expert. You will be notified once your documents are verified.');
    } else {
      // Submit to the regular user registration endpoint
      alert('Your account has been created successfully.');
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
        width: '60px', // Adjust width as needed
        height: 'auto' // Keeps the aspect ratio
      }}
      alt="WellSpace Logo"
    />
   
      
        <ToggleButtonGroup type="radio" name="role" defaultValue={userDetails.role} onChange={handleRoleChange}>
          <ToggleButton id="tbg-radio-1" value={'user'} variant="outline-dark">User</ToggleButton>
          <ToggleButton id="tbg-radio-2" value={'expert'} variant="outline-dark">Expert</ToggleButton>
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

          {userDetails.role === 'expert' && (
            <Form.Group className="mb-3" controlId="formVerificationDocument">
              <Form.Label>Expert Verification Document</Form.Label>
              <Form.Control
                type="file"
                name="verificationDocument"
                onChange={handleChange}
                required={userDetails.role === 'expert'}
              />
            </Form.Group>
          )}

          <Button variant="dark" type="submit" className="w-100">
            {userDetails.role === 'expert' ? 'Register as Expert' : 'Create Account'}
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default UserSignUp;
