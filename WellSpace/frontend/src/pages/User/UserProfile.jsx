import React, { useState, useContext, useEffect } from 'react';
import { Form, Button, Image, Container, Row, Col, Card } from 'react-bootstrap';
import { PencilSquare } from 'react-bootstrap-icons'; // Ensure this is installed via `npm install react-bootstrap-icons`
import NavigationBar from '../../components/Navbar'; // Ensure this is correctly exported
import Footer from '../../components/Footer'; // Ensure this is correctly exported
import uploadCloudinary from '../../utils/uploadCloudinary';
import UserContext from '../../contexts/UserContext';
import axios from 'axios';

const UserProfile = () => {
    const { user, login, logout } = useContext(UserContext);
    const [userDetails, setUserDetails] = useState({
        firstName: '',
        lastName: '',
        username: '',
        phoneNumber: '',
        email: '',
        password: '',
        role: '',
        profilePicture: 'https://via.placeholder.com/150',
        verificationDocument: null
    });
    const [editing, setEditing] = useState(false);
    const [verificationDocPreview, setVerificationDocPreview] = useState(null);

    useEffect(() => {
        console.log(user)
        if (user) {
            setUserDetails(prev => ({
                ...prev,
                ...user,
                profilePicture: user.profilePicture || 'https://via.placeholder.com/150'
            }));
   
        }
        console.log(user)
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleImageChange = async (e) => {
        const { files } = e.target;
        if (files) {
            const file = files[0];
            const data = await uploadCloudinary(file);
            setUserDetails(prev => ({
                ...prev,
                profilePicture: data.secure_url
            }));
        }
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // console.log(userDetails)
            const response = await axios.put(`http://localhost:5000/api/v1/users/${user._id}`, userDetails);
            if (response.status === 200) {
                console.log('xxx',response.data.data)
                login(response.data.data); // Update context with new user data
                setEditing(false); // Exit editing mode
                alert('Profile updated successfully');
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Failed to update profile');
        }
    };

    const toggleEdit = (e) => {
        if (editing) {
            handleSubmit(e);
        } else {
            setEditing(true);
        }
    };

    const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();

    const formatLabel = (field) => {
        return field
            .split(/(?=[A-Z])/)
            .map(word => capitalize(word))
            .join(" ");
    };

    return (
        <>
            <NavigationBar />
            <Container className="mt-4">
                <Row className="mb-4">
                    <Col>
                        <Card className="text-center" style={{ background: 'linear-gradient(to right, #008080, #66b2b2)' }}>
                            <Card.Body>
                                <Card.Title>Hey there! Welcome to your profile, {userDetails.name}!</Card.Title>
                                <Card.Text>Manage your profile details and settings.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <h1 style={{ fontSize: '1.75rem' }}>Profile of {userDetails.name}</h1>
                <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Col xs={12} md={4} className="text-left">
                            <label className="profile-image-container" style={{ position: 'relative', cursor: 'pointer' }}>
                                <Image
                                    src={userDetails.profilePicture}
                                    roundedCircle
                                    alt="Profile"
                                    thumbnail
                                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                                />
                                {editing && (
                                    <>
                                        <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%', background: 'rgba(0,0,0,0.5)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <PencilSquare color="white" size={30} />
                                        </div>
                                        <Form.Control
                                            type="file"
                                            onChange={handleImageChange}
                                            name="profilePicture"
                                            id="profile-picture-upload"
                                            style={{ display: 'none' }}
                                        />
                                    </>
                                )}
                            </label>
                        </Col>
                    </Row>

                    {['name', 'userName', 'phoneNumber', 'email'].map((field, index) => (
                        <Form.Group className="mb-3" key={index}>
                            <Form.Label>{formatLabel(field)}</Form.Label>
                            <Form.Control
                                type={field === 'email' ? 'email' : 'text'}
                                name={field}
                                placeholder={formatLabel(field)}
                                value={userDetails[field]}
                                onChange={handleChange}
                                disabled={!editing}
                                required
                            />
                        </Form.Group>
                    ))}

                    <Form.Group className="mb-3">
                        <Form.Label>Expert Verification Document</Form.Label>
                        {userDetails.verificationDocument && (
                            <div style={{ marginTop: '10px' }}>
                                <a href={userDetails.verificationDocument} target="_blank" rel="noopener noreferrer">
                                    <img src="https://via.placeholder.com/150?text=PDF" alt="PDF Thumbnail" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                                    <p>{userDetails.verificationDocument.split('/').pop()}</p>
                                </a>
                            </div>
                        )}
                        {editing && (
                            <Form.Control
                                type="file"
                                name="verificationDocument"
                                onChange={handleFileChange}
                                required
                            />
                        )}
                    </Form.Group>

                    <Button variant="dark" onClick={toggleEdit} className="mb-5">
                        {editing ? 'Save Changes' : 'Edit Profile'}
                    </Button>
                </Form>
            </Container>
            <Footer />
        </>
    );
};

export default UserProfile;
