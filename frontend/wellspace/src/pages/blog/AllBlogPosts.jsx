import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Pagination, Col, Form, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegCalendarAlt, FaRegUser, FaRegComments, FaList } from 'react-icons/fa';
import NavigationBar from '../../components/Navbar';

// Mock data structure for a blog post
const blogPostsData = [
    {
      id: 1,
      title: "The Importance of Mental Health",
      summary: "Discover effective strategies to enhance your mental health.",
      image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*tp2SoFHMNOfWcNqJ",
      link: "/blog/5-tips-for-learning-programming",
      date: "Jan 15, 2024",
      author: "Jane Doe",
      category: "Mental Health",
      comments: 12
    },
    {
        id: 2,
        title: "5 Tips for Learning Programming",
        summary: "Discover effective strategies to enhance your coding skills.",
        image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*tp2SoFHMNOfWcNqJ",
        link: "/blog/5-tips-for-learning-programming",
        date: "Jan 15, 2024",
        author: "Jane Doe",
        category: "Mental Health",
        comments: 12
      },
      {
        id: 3,
        title: "5 Tips for Learning Programming",
        summary: "Discover effective strategies to enhance your coding skills.",
        image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*tp2SoFHMNOfWcNqJ",
        link: "/blog/5-tips-for-learning-programming",
        date: "Jan 15, 2024",
        author: "Jane Doe",
        category: "Mental Health",
        comments: 12
      },
    // ...other blog post objects
  ];

// Static data for categories
const categories = ['Technology', 'Health', 'Business', 'Entertainment', 'Sports', 'Science'];

const BlogPost = ({ post }) => (
  <Card className="mb-3 d-flex flex-row">
    <Card.Img variant="left" src={post.image} style={{ width: '200px', height: 'auto' }} />
    <Card.Body>
      <Card.Title>{post.title}</Card.Title>
      <Card.Text>{post.summary}</Card.Text>
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <FaRegCalendarAlt className="icon mx-1" />
          <span>{post.date}</span>
        </div>
        <div className="d-flex align-items-center">
          <FaRegUser className="icon mx-1" />
          <span>{post.author}</span>
        </div>
        <div className="d-flex align-items-center">
          <FaRegComments className="icon mx-1" />
          <span>{post.comments}</span>
        </div>
        <div className="d-flex align-items-center">
          <FaList className="icon mx-1" />
          <span>{post.category}</span>
        </div>
      </div>
      <Link to={post.link} className="stretched-link">Read More</Link>
    </Card.Body>
  </Card>
);

const AllBlogPosts = () => {
  const [posts, setPosts] = useState(blogPostsData); // Directly set to blogPostsData for simplicity
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5); // Set number of posts per page

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <><NavigationBar />
     <Container className='mt-3'>
          <Row>
              <Col md={8}>
                  {currentPosts.map((post) => (
                      <BlogPost key={post.id} post={post} />
                  ))}
                  <Pagination className="justify-content-center my-4">
                      {Array.from({ length: Math.ceil(posts.length / postsPerPage) }, (_, i) => (
                          <Pagination.Item key={i + 1} active={i + 1 === currentPage} onClick={() => paginate(i + 1)}>
                              {i + 1}
                          </Pagination.Item>
                      ))}
                  </Pagination>
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

export default AllBlogPosts;
