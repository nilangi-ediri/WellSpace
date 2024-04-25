import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, Form, Button, Card } from 'react-bootstrap';
import NavigationBar from '../../components/Navbar';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';  // Import Quill styles
import CommentSection from '../../components/CommentSection';
import Comment from '../../components/Comment';
import { Link } from 'react-router-dom';
import { FaPenToSquare } from 'react-icons/fa6';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa6';

// Static data for categories and post
const categories = ['Technology', 'Health', 'Business', 'Entertainment', 'Sports', 'Science'];
const staticPost = {
  id: 1,
  title: "The Importance of Mental Health",
  summary: "Discover effective strategies to enhance your mental health.",
  image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  content: `<p>Mental health is a crucial aspect of every individual's life. It encompasses our emotional, psychological, and social well-being. The state of our mental health determines how we think, feel, and behave; it also helps dictate how we handle stress, relate to others, and make choices.</p>
  <p><strong>Reasons why mental health is vital:</strong></p>
  <ul>
    <li><strong>Improves Quality of Life:</strong> Good mental health allows individuals to realize their full potential, cope with the stresses of life, work productively, and make meaningful contributions to their communities.</li>
    <li><strong>Prevents Mental Health Disorders:</strong> Regular mental health care can prevent the onset or worsening of mental health conditions, including major depression, anxiety, bipolar disorder, and schizophrenia, among others.</li>

    <li><strong>Enhances Physical Health:</strong> There is a strong link between mental and physical health. Poor mental health is a risk factor for chronic physical conditions, and people with serious mental health conditions are at high risk of experiencing chronic physical conditions.</li>
    </ul>
  <p>Mental health care is important at every stage of life, from childhood and adolescence through adulthood. Throughout your life, if you experience mental health problems, your thinking, mood, and behavior could be affected. Many factors contribute to mental health problems, including:</p>
  <ul>
    <li><strong>Biological factors:</strong> Genes or brain chemistry</li>
    <li><strong>Life experiences:</strong> Trauma or abuse</li>
    <li><strong>Family history:</strong> Having a family history of mental health problems</li>
  </ul>
  <p>People often overlook the importance of mental health until they face mental health issues. Hence, it is critical to understand the value of health as much as physical health and to treat it with the same urgency.</p>
  `,
  date: "Jan 15, 2024", author: "Jane Doe",
  category: "Mental Health",
  comments: [
    { id: 1, text: "Very informative post, thanks!" },
    { id: 2, text: "Looking forward to more articles on this topic." }
  ]
};

const BlogPostView = ({ postId }) => {
  const [post] = useState(staticPost);
  const [comments, setComments] = useState(post.comments);
  const [commentText, setCommentText] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      id: comments.length + 1,
      text: commentText
    };
    setComments([...comments, newComment]);
    setCommentText("");
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
                <h6 className="mb-1 text-muted">Published: {post.date}</h6>
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

