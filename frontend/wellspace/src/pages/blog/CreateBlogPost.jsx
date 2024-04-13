import React, { useState } from 'react';
import { Card, Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';
import NavigationBar from '../../components/Navbar';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReusableRichTextEditor from '../../components/ReusableRichTextEditor';
import TextEditor from '../../components/ReusableRichTextEditor';

// Static data for categories, you could dynamically generate this list too
const categories = ['Technology', 'Health', 'Business', 'Entertainment', 'Sports', 'Science'];

const CreateBlogPost = () => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');

  const [imageFile, setImageFile] = useState(null);

  const handleImageChange = (e) => {
      setImageFile(e.target.files[0]);
  };

  const handleEditorChange = content => {
    setContent(content);
};

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the data here, i.e., send a POST request to your API
    console.log({ title, summary, image, category, content });
  };

  return (
    <>
      <NavigationBar />
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

              <Form.Group className="mb-3" controlId="blogTitle">
                <Form.Label>Content</Form.Label>
                <ReusableRichTextEditor value={content} onChange={handleEditorChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="blogImage">
                  <Form.Label>Image File</Form.Label>
                  <Form.Control
                      type="file"
                      accept="image/*"  // Accepts image files only
                      onChange={handleImageChange}
                  />
                  {imageFile && <div>Selected file: {imageFile.name}</div>}
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
      </Container>
    </>
  );
};

export default CreateBlogPost;
