import React, { useState } from 'react';
import { Form, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

function UserSignUp() {
  const [userDetails, setUserDetails] = useState({
    role: 'user', // default role is 'user'
    firstName: '',
    lastName: '',
    username: '',
    phoneNumber: '',
    email: '',
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
    <div className="container mt-3">
      <h2>Sign Up</h2>
      <ToggleButtonGroup type="radio" name="role" defaultValue={userDetails.role} onChange={handleRoleChange}>
        <ToggleButton id="tbg-radio-1" value={'user'} variant="outline-primary">User</ToggleButton>
        <ToggleButton id="tbg-radio-2" value={'expert'} variant="outline-secondary">Expert</ToggleButton>
      </ToggleButtonGroup>

      <Form onSubmit={handleSubmit} className="mt-3">
        <Form.Group className="mb-3" controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            placeholder="Enter first name"
            value={userDetails.firstName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            placeholder="Enter last name"
            value={userDetails.lastName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Enter username"
            value= {userDetails.username}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            name="phoneNumber"
            placeholder="Enter phone number"
            value={userDetails.phoneNumber}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={userDetails.email}
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

        <Button variant="primary" type="submit">
          {userDetails.role === 'expert' ? 'Register as Expert' : 'Create Account'}
        </Button>
      </Form>
    </div>
  );
}

export default UserSignUp;
