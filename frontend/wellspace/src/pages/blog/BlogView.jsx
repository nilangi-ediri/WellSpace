import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, Form, Button, Card } from 'react-bootstrap';
import NavigationBar from '../../components/Navbar';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';  // Import Quill styles

// Static data for categories and post
const categories = ['Technology', 'Health', 'Business', 'Entertainment', 'Sports', 'Science'];
const staticPost = {
  id: 1,
  title: "The Importance of Mental Health",
  summary: "Discover effective strategies to enhance your mental health.",
  image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*tp2SoFHMNOfWcNqJ",
  content: "This is the rich text content of the blog post. It discusses various strategies for improving mental health.",
  date: "Jan 15, 2024", author: "Jane Doe",
  category: "Mental Health",
  comments: [
    { id: 1, text: "Very informative post, thanks!" },
    { id: 2, text: "Looking forward to more articles on this topic." }
  ]
};

const BlogPostView = () => {
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
          <Col md={8}>
            <Card>
              <Card.Img variant="top" src={post.image} />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                {`${post.category} - posted by ${post.author} on ${post.date}`}
                </Card.Subtitle>
                <ReactQuill value={post.content} readOnly={true} theme="bubble" />
                <div className="mt-4">
                  <h5>Comments</h5>
                  {comments.map((comment, index) => (
                    <Card key={index} className="mb-2">
                      <Card.Body>
                        <Card.Text>{comment.text}</Card.Text>
                      </Card.Body>
                    </Card>
                  ))}
                  <Form onSubmit={handleCommentSubmit}>
                    <Form.Group controlId="comment">
                      <Form.Label>Add a comment</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                      />
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                  </Form>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
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

export default BlogPostView;
