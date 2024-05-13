/* import React, { useState } from 'react';
import { Form, Button, Image, Container, Row, Col, Card } from 'react-bootstrap';
import NavigationBar from '../../components/Navbar'; // Ensure this is correctly exported in Navbar.js
import Footer from '../../components/Footer'; // Ensure this is correctly exported in Footer.js

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
    const [verificationDocPreview, setVerificationDocPreview] = useState(null);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (files) {
            const file = files[0];
            if (name === 'profilePicture') {
                const reader = new FileReader();
                reader.onload = (loadEvent) => {
                    setUserDetails((prev) => ({
                        ...prev,
                        [name]: loadEvent.target.result
                    }));
                };
                reader.readAsDataURL(file);
            } else if (name === 'verificationDocument') {
                setUserDetails((prev) => ({
                    ...prev,
                    verificationDocument: file
                }));
                setVerificationDocPreview(URL.createObjectURL(file));
            }
        } else {
            setUserDetails((prev) => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const toggleEdit = () => setEditing(!editing);

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
                                <Card.Title>Welcome to Your Profile, {userDetails.firstName}!</Card.Title>
                                <Card.Text>Manage your profile details and settings.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <h1>User Profile</h1>
                <Form>
                    <Row className="mb-3">
                        <Col xs={12} md={4} className="text-center">
                            <label>
                                <Image 
                                    src={userDetails.profilePicture} 
                                    roundedCircle 
                                    alt="Profile" 
                                    thumbnail 
                                    style={{ width: '150px', height: '150px', objectFit: 'cover', cursor: 'pointer' }} 
                                />
                                {editing && <Form.Control
                                    type="file"
                                    onChange={handleChange}
                                    name="profilePicture"
                                    id="profile-picture-upload"
                                    style={{ display: 'none' }}
                                />}
                            </label>
                        </Col>
                    </Row>

                    {['firstName', 'lastName', 'username', 'phoneNumber', 'email'].map((field, index) => (
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
                        <Form.Label>{formatLabel('password')}</Form.Label>
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
                            {verificationDocPreview && <img src={verificationDocPreview} alt="Verification Document" style={{ width: '100%', marginTop: '10px' }} />}
                        </Form.Group>
                    )}

                    <Button variant="primary" onClick={toggleEdit} className="mb-5">
                        {editing ? 'Save Changes' : 'Edit Profile'}
                    </Button>
                </Form>
            </Container>
            <Footer />
        </>
    );
};

export default UserProfile;
 */

/* import React, { useState } from 'react';
import { Form, Button, Image, Container, Row, Col, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { PencilSquare } from 'react-bootstrap-icons'; // Make sure to install react-bootstrap-icons if not already installed
import NavigationBar from '../../components/Navbar'; // Ensure this is correctly exported in Navbar.js
import Footer from '../../components/Footer'; // Ensure this is correctly exported in Footer.js

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
    const [verificationDocPreview, setVerificationDocPreview] = useState(null);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (files) {
            const file = files[0];
            if (name === 'profilePicture') {
                const reader = new FileReader();
                reader.onload = (loadEvent) => {
                    setUserDetails(prev => ({
                        ...prev,
                        [name]: loadEvent.target.result
                    }));
                };
                reader.readAsDataURL(file);
            } else if (name === 'verificationDocument') {
                setUserDetails(prev => ({
                    ...prev,
                    verificationDocument: file
                }));
                setVerificationDocPreview(URL.createObjectURL(file));
            }
        } else {
            setUserDetails(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const toggleEdit = () => setEditing(!editing);

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
                                <Card.Title>Welcome to Your Profile, {userDetails.firstName}!</Card.Title>
                                <Card.Text>Manage your profile details and settings.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <h1>User Profile</h1>
                <Form>
                    <Row className="mb-3">
                        <Col xs={12} md={4} className="text-center">
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
                                            onChange={handleChange}
                                            name="profilePicture"
                                            id="profile-picture-upload"
                                            style={{ display: 'none' }}
                                        />
                                    </>
                                )}
                            </label>
                        </Col>
                    </Row>

                    {['firstName', 'lastName', 'username', 'phoneNumber', 'email'].map((field, index) => (
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
                        <Form.Label>{formatLabel('password')}</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={userDetails.password}
                            onChange={handleChange}
                            disabled={!editing}
                            required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Expert Verification Document</Form.Label>
                        {editing ? (
                            <Form.Control
                                type="file"
                                name="verificationDocument"
                                onChange={handleChange}
                                required />
                        ) : verificationDocPreview ? (
                            <img src={verificationDocPreview} alt="Verification Document" style={{ width: '100%', marginTop: '10px' }} />
                        ) : (
                            <p>No document uploaded</p>
                        )}
                    </Form.Group>

                    <Button variant="primary" onClick={toggleEdit} className="mb-5">
                        {editing ? 'Save Changes' : 'Edit Profile'}
                    </Button>
                </Form>
            </Container>
            <Footer />
        </>
    );
};

export default UserProfile;
 */

import React, { useState } from 'react';
import { Form, Button, Image, Container, Row, Col, Card } from 'react-bootstrap';
import { PencilSquare } from 'react-bootstrap-icons'; // Ensure this is installed via `npm install react-bootstrap-icons`
import NavigationBar from '../../components/Navbar'; // Ensure this is correctly exported
import Footer from '../../components/Footer'; // Ensure this is correctly exported
import uploadCloudinary from '../../utils/uploadCloudinary';

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
    const [verificationDocPreview, setVerificationDocPreview] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleImageChange = async (e) => {
        const { files } = e.target
        if (files) {
            const file = files[0]
            const data = await uploadCloudinary(file)
            console.log(data);
            setUserDetails(prev => ({
                ...prev,
                profilePicture: data.secure_url
            }))
        }
    }

    const handleFileChange = async (e) => {
        const { files } = e.target
        if (files) {
            const file = files[0]
            const data = await uploadCloudinary(file)
            console.log(data);
            setUserDetails(prev => ({
                ...prev,
                verificationDocument: data.secure_url
            }))
        }
    }

    const toggleEdit = () => setEditing(!editing);

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
                                <Card.Title>Hey there! Welcome to your profile, {userDetails.firstName}! </Card.Title>
                                <Card.Text>Manage your profile details and settings.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <h1 style={{ fontSize: '1.75rem' }}>Profile of {userDetails.firstName} {userDetails.lastName}</h1>
                <Form>
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

                    {['firstName', 'lastName', 'username', 'phoneNumber', 'email'].map((field, index) => (
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
                        <Form.Label>{formatLabel('password')}</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={userDetails.password}
                            onChange={handleChange}
                            disabled={!editing}
                            required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Expert Verification Document</Form.Label>
                        {verificationDocPreview && (
                            <div style={{ marginTop: '10px' }}>
                                <Image src={verificationDocPreview} alt="Verification Document" thumbnail style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                            </div>
                        )}
                        {editing && (
                            <Form.Control
                                type="file"
                                name="verificationDocument"
                                onChange={handleFileChange}
                                required />
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


