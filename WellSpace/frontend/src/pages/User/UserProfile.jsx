import React, { useState } from 'react';
import { Form, Button, Image } from 'react-bootstrap';
import NavigationBar from '../../components/Navbar';
import Footer from '../../components/Footer';

const UserProfile = () => {
    const [userDetails, setUserDetails] = useState({
        firstName: 'John',
        lastName: 'Doe',
        username: 'johndoe',
        phoneNumber: '1234567890',
        email: 'john.doe@example.com',
        password: 'password123',
        role: 'expert',
        profilePicture: 'https://via.placeholder.com/150',
        verificationDocument: null
    });
    const [editing, setEditing] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setUserDetails(prev => ({
            ...prev,
            [name]: files ? files[0] : value
        }));
    };

    const toggleEdit = () => setEditing(!editing);

    return (
        <><><NavigationBar /><div className="container mt-4">
            <h1>User Profile</h1>
            <Form>
                <Image src={userDetails.profilePicture} roundedCircle alt="Profile" />
                <Form.Group className="mb-3">
                    <Form.Label>Profile Picture</Form.Label>
                    {editing ? (
                        <Form.Control
                            type="file"
                            name="profilePicture"
                            onChange={handleChange} />
                    ) : null}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={userDetails.firstName}
                        onChange={handleChange}
                        disabled={!editing}
                        required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={userDetails.lastName}
                        onChange={handleChange}
                        disabled={!editing}
                        required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={userDetails.username}
                        onChange={handleChange}
                        disabled={!editing}
                        required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={userDetails.phoneNumber}
                        onChange={handleChange}
                        disabled={!editing}
                        required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        value={userDetails.email}
                        onChange={handleChange}
                        disabled={!editing}
                        required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={userDetails.password}
                        onChange={handleChange}
                        disabled={!editing}
                        required />
                </Form.Group>

                {userDetails.role === 'expert' && editing && (
                    <Form.Group className="mb-3">
                        <Form.Label>Expert Verification Document</Form.Label>
                        <Form.Control
                            type="file"
                            name="verificationDocument"
                            onChange={handleChange}
                            required />
                    </Form.Group>
                )}

                <Button variant="primary" onClick={toggleEdit}>
                    {editing ? 'Save Changes' : 'Edit Profile'}
                </Button>
            </Form>
        </div></><Footer /></>
    );
};

export default UserProfile;
