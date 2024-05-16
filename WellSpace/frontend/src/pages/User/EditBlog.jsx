import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Container, Row, Col, Form, Button, ToastContainer, Toast } from 'react-bootstrap';
import NavigationBar from '../../components/Navbar';
import ReusableRichTextEditor from '../../components/ReusableRichTextEditor';
import axios from 'axios';
import { categoriesArray } from '../../constants/categories';
import Footer from '../../components/Footer';

const EditBlog = () => {
  const [blogPost, setBlogPost] = useState({
    title: '',
    summary: '',
    image: '',
    category: '',
    content: ''
  });
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');
  const [categories, setCategories] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/v1/blogs/${postId}`);
        setBlogPost(data.data);
        setImagePreviewUrl(data.data.imageUrl);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      }
    };

    fetchBlogPost();
  }, [postId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogPost(prev => ({ ...prev, [name]: value }));
  };

  const handleEditorChange = (content) => {
    setBlogPost(prev => ({ ...prev, content }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewUrl(reader.result);
        setBlogPost(prev => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/v1/blogs/${postId}`, blogPost);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        navigate('/blog');
      }, 2000);
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/blogs/${postId}`);
      navigate('/blog');
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  return (
    <>
      <NavigationBar />
      <Container className='mt-3'>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="blogTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={blogPost.title}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="blogSummary">
                <Form.Label>Summary</Form.Label>
                <Form.Control
                  type="text"
                  name="summary"
                  value={blogPost.summary}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="blogContent">
                <Form.Label>Content</Form.Label>
                <ReusableRichTextEditor value={blogPost.content} onChange={handleEditorChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="blogImage">
                <Form.Label>Image File</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {imagePreviewUrl && (
                  <div>
                    <img src={imagePreviewUrl} alt="Preview" style={{ width: '50%', marginTop: '10px' }} />
                  </div>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="blogCategory">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  as="select"
                  name="category"
                  value={blogPost.category}
                  onChange={handleInputChange}
                >
                  <option>Select a category</option>
                  {categoriesArray.map((cat, index) => (
                    <option key={index} value={cat}>{cat}</option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Button variant="primary" type="submit">Update</Button>
              {' '}
              <Button variant="danger" onClick={handleDelete}>Delete</Button>
            </Form>
          </Col>
        </Row>

        <ToastContainer className="p-3" position="top-end">
          <Toast onClose={() => setShowToast(false)} show={showToast} delay={2000} autohide>
            <Toast.Header>
              <strong className="me-auto">Blog post updated successfully!</strong>
            </Toast.Header>
            <Toast.Body>Updated!</Toast.Body>
          </Toast>
        </ToastContainer>
      </Container>
      <Footer />
    </>
  );
};

export default EditBlog;
