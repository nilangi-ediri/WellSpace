import React, { useState } from 'react';
import { Card, Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';
import NavigationBar from '../../components/Navbar';

// Static data for categories, you could dynamically generate this list too
const categories = ['Technology', 'Health', 'Business', 'Entertainment', 'Sports', 'Science'];

const CreateBlogPost = () => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the data here, i.e., send a POST request to your API
    console.log({ title, summary, image, category });
  };

  return (
    <><NavigationBar />
     <Container className='mt-3'>
          <Row>
              <Col md={8}>
                  <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="blogTitle">
                          <Form.Label>Title</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter post title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                          />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="blogSummary">
                          <Form.Label>Summary</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Enter post summary"
                            value={summary}
                            onChange={(e) => setSummary(e.target.value)}
                          />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="blogImage">
                          <Form.Label>Image URL</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter image URL"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                          />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="blogCategory">
                          <Form.Label>Category</Form.Label>
                          <Form.Control
                            as="select"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                          >
                            <option>Select a category</option>
                            {categories.map((cat, index) => (
                              <option key={index} value={cat}>{cat}</option>
                            ))}
                          </Form.Control>
                      </Form.Group>
                      <Button variant="primary" type="submit">
                          Create Post
                      </Button>
                  </Form>
              </Col>
              <Col md={4}>
                  <Form className="mb-4">
                      <Form.Group controlId="searchBar">
                          <Form.Control type="text" placeholder="Search blog..." />
                      </Form.Group>
                  </Form>
                  <ListGroup>
                      <ListGroup.Item active>Categories</ListGroup.Item>
                      {categories.map((category, index) => (
                          <ListGroup.Item key={index} action>
                              {category}
                          </ListGroup.Item>
                      ))}
                  </ListGroup>
              </Col>
          </Row>
      </Container></>
  );
};

export default CreateBlogPost;
