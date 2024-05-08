import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaPenToSquare, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import NavigationBar from '../../components/Navbar';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';  // Import Quill styles
import CommentSection from '../../components/CommentSection';
import { useParams } from 'react-router-dom';

const BlogPostView = () => {
  const [post, setPost] = useState(null);

  const { postId } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/blogs/${postId}`);
        setPost(response.data.data);
      } catch (error) {
        console.error('Error fetching post:', error);
        // Optionally, handle the error by showing a message or redirecting
      }
    };

    fetchPost();
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>; // or any other loading state representation
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <NavigationBar />
      <Container className="mt-3">
        <Row>
          <Col>
            <div className="text-center">
              <h2>{post.title}</h2>
              <hr />
            </div>

            <Row className="align-items-center justify-content-between">
              <Col md="auto" className="text-left">
                <h6 className="mb-1 text-muted">{post.author}</h6>
              </Col>
              <Col md="auto" className="text-center">
                <h6 className="mb-1 text-muted">{post.category}</h6>
              </Col>
              <Col md="auto" className="text-right">
                <h6 className="mb-1 text-muted">Published: {formatDate(post.createdAt)}</h6>
              </Col>
            </Row>
            <hr />

            <div className="text-center">
              <img src={post.image} alt="Post visual" className="img-fluid w-50" />
            </div>

            <div className="mt-3">
              <ReactQuill value={post.content} readOnly={true} theme="bubble" />
            </div>
            
            <div className="mt-4 d-flex justify-content-center">
              <Button variant="outline-primary" className="mx-1">
                <FaFacebookF /> Share on Facebook
              </Button>
              <Button variant="outline-info" className="mx-1">
                <FaTwitter /> Tweet
              </Button>
              <Button variant="outline-secondary" className="mx-1">
                <FaLinkedinIn /> Share on LinkedIn
              </Button>
            </div>

            <div className="mt-4">
              <h5>Comments</h5>
              <CommentSection postId={postId} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BlogPostView;
