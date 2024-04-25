import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Pagination, Col, Form, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegCalendarAlt, FaRegUser, FaRegComments, FaList } from 'react-icons/fa';
import NavigationBar from '../../components/Navbar';


const HeroSection = () => (
  <Card className="bg-dark text-white text-center hero-section">
    <Card.ImgOverlay>
      <Container>
        <Card.Title as="h1" className="display-4">WellSpace Blog</Card.Title>
        <Card.Text className="lead">
          Discover the latest insights and trends in mental health and wellness.
        </Card.Text>
      </Container>
    </Card.ImgOverlay>
  </Card>
);
// Mock data structure for a blog post
const blogPostsData = [//api call get all
    {
      id: 1,
      title: "The Importance of Mental Health",
      summary: "Discover effective strategies to enhance your mental health.",
      image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*tp2SoFHMNOfWcNqJ",
      link: "/blog/5-tips-for-learning-programming",
      date: "Jan 15, 2024",
      author: "Jane Doe",
      category: "Health",
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
        category: "Technology",
        comments: 12
      },
      {
        id: 3,
        title: "5 Tips for Learning Programming",
        summary: "Discover effective strategies to enhance your coding skills.",
        image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*tp2SoFHMNOfWcNqJ",
        content: "This is the rich text content of the blog post. It discusses various strategies for improving mental health.",
        link: "/blog/5-tips-for-learning-programming",
        date: "Jan 15, 2024",
        author: "Jane Doe",
        category: "Sports",
        comments: 12
      },
    // ...other blog post objects
  ];

  // const staticPost = {
  //   id: 1,
  //   title: "The Importance of Mental Health",
  //   summary: "Discover effective strategies to enhance your mental health.",
  //   image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*tp2SoFHMNOfWcNqJ",
  //   content: "This is the rich text content of the blog post. It discusses various strategies for improving mental health.",
  //   date: "Jan 15, 2024", author: "Jane Doe",
  //   category: "Mental Health",
  //   comments: [
  //     { id: 1, text: "Very informative post, thanks!" },
  //     { id: 2, text: "Looking forward to more articles on this topic." }
  //   ]
  // };

// Static data for categories
const categories = ['All','Technology', 'Health', 'Business', 'Entertainment', 'Sports', 'Science'];

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
  const [posts, setPosts] = useState(blogPostsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

   // Handling search input change
   const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
    setCurrentPage(1); // Reset to first page on search change
  };

  // Handling category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page on category change
  };

  // Filter posts by search query and selected category
  const filteredPosts = posts.filter(post => {
    const inCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const inSearch = post.title.toLowerCase().includes(searchQuery) || post.summary.toLowerCase().includes(searchQuery);
    return inCategory && inSearch;
  });

// Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <><NavigationBar />
    <HeroSection />
     <Container className='mt-3'>
          <Row>
              <Col md={8}>
                  {currentPosts.map((post) => (
                      <BlogPost key={post.id} post={post} />
                  ))}
                  <Pagination className="justify-content-center my-4">
                      {Array.from({ length: Math.ceil(filteredPosts.length / postsPerPage) }, (_, i) => (
                          <Pagination.Item key={i + 1} active={i + 1 === currentPage} onClick={() => paginate(i + 1)}>
                              {i + 1}
                          </Pagination.Item>
                      ))}
                  </Pagination>
              </Col>
              <Col md={4}>
                  <Form className="mb-4">
                      <Form.Group controlId="searchBar">
                          <Form.Control type="text" placeholder="Search blog..." onChange={handleSearchChange} />
                      </Form.Group>
                  </Form>
                  <ListGroup>
                      <ListGroup.Item active>Categories</ListGroup.Item>
                      {categories.map((category, index) => (
                          <ListGroup.Item key={index} action onClick={() => handleCategorySelect(category)}>
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

export default AllBlogPosts;
