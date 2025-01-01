// import React, { useState, useEffect } from 'react';
// import { Card, Container, Row, Pagination, Col, Form, ListGroup, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { FaRegCalendarAlt, FaRegUser, FaRegComments, FaList  } from 'react-icons/fa';
// import { FaPenToSquare  } from 'react-icons/fa6';
// import NavigationBar from '../../components/Navbar';
// import HeroSectionBlog from '../../components/HeroSectionBlog';
// import axios from 'axios';

// // const HeroSection = () => (
// //   <Card className="bg-dark text-white text-center hero-section">
// //     <Card.ImgOverlay>
// //       <Container>
// //         <Card.Title as="h1" className="display-4">WellSpace Blog</Card.Title>
// //         <Card.Text className="lead">
// //           Discover the latest insights and trends in mental health and wellness.
// //         </Card.Text>
// //       </Container>
// //     </Card.ImgOverlay>
// //   </Card>
// // );

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     });
//   };

// // Mock data structure for a blog post
// /* const blogPostsData = [//api call get all
//     {
//       id: 1,
//       title: "The Importance of Mental Health",
//       summary: "Discover effective strategies to enhance your mental health.",
//       image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       link: "/view-blog",
//       date: "Jan 15, 2024",
//       author: "Jane Doe",
//       category: "Health",
//       comments: 12
//     },
//     {
//         id: 2,
//         title: "5 Tips for Learning Programming",
//         summary: "Discover effective strategies to enhance your coding skills.",
//         image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         link: "/view-blog",
//         date: "Jan 15, 2024",
//         author: "Jane Doe",
//         category: "Technology",
//         comments: 12
//       },
//       {
//         id: 3,
//         title: "5 Tips for Learning Programming",
//         summary: "Discover effective strategies to enhance your coding skills.",
//         image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         content: "This is the rich text content of the blog post. It discusses various strategies for improving mental health.",
//         link: "/view-blog",
//         date: "Jan 15, 2024",
//         author: "Jane Doe",
//         category: "Sports",
//         comments: 12
//       },
//     // ...other blog post objects
//   ]; */

//   // const staticPost = {
//   //   id: 1,
//   //   title: "The Importance of Mental Health",
//   //   summary: "Discover effective strategies to enhance your mental health.",
//   //   image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   //   content: "This is the rich text content of the blog post. It discusses various strategies for improving mental health.",
//   //   date: "Jan 15, 2024", author: "Jane Doe",
//   //   category: "Mental Health",
//   //   comments: [
//   //     { id: 1, text: "Very informative post, thanks!" },
//   //     { id: 2, text: "Looking forward to more articles on this topic." }
//   //   ]
//   // };

// // Static data for categories
// const categories = ['All','Technology', 'Health', 'Business', 'Entertainment', 'Sports', 'Science'];

// const BlogPost = ({ post }) => (
//   <Card className="mb-3 d-flex flex-row">
//     <Card.Img 
//       variant="left" 
//       src={post.imageUrl} 
//       style={{ 
//         width: '200px', 
//         height: '150px', 
//         objectFit: 'cover', 
//         objectPosition: 'center' 
//       }} 
//     />
//     <Card.Body>
//       <Card.Title>{post.title}</Card.Title>
//       <Card.Text>{post.summary}</Card.Text>
//       <div className="d-flex justify-content-between">
//         <div className="d-flex align-items-center">
//           <FaRegCalendarAlt className="icon mx-1" />
//           <span>{formatDate(post.createdAt)}</span>
//         </div>
//         <div className="d-flex align-items-center">
//           <FaRegUser className="icon mx-1" />
//           <span>{post.doctor.name}</span>
//         </div>
//         {/* <div className="d-flex align-items-center">
//           <FaRegComments className="icon mx-1" />
//           <span>{post.comments}</span>
//         </div> */}
//         <div className="d-flex align-items-center">
//           <FaList className="icon mx-1" />
//           <span>{post.category}</span>
//         </div>
//       </div>
//       <Link to={`/blog/${post._id}`} className="stretched-link">Read More</Link>
//     </Card.Body>
//   </Card>
// );

// const AllBlogPosts = () => {
//   const [posts, setPosts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [postsPerPage] = useState(5);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   // Fetch blog posts from the backend
//   useEffect(() => {
//     const fetchPosts = async () => {
//         try {
//             const response = await axios.get(`http://localhost:5000/api/v1/blogs?query=${searchQuery}`);
//             setPosts(response.data.data); 
//             console.log(response.data.data)
//         } catch (error) {
//             console.error('Failed to fetch blogs:', error);
//         }
//     };

//     fetchPosts();
// }, [searchQuery]); 


//    // Handling search input change
//    const handleSearchChange = (e) => {
//     console.log(e.target.value.toLowerCase())
//     const lowerCase = e.target.value.toLowerCase()
//     setSearchQuery(lowerCase);
//     setCurrentPage(1); // Reset to first page on search change

//   };


//   // Handling category selection
//   const handleCategorySelect = (category) => {
//     setSelectedCategory(category);
//     setCurrentPage(1); // Reset to first page on category change
//   };

//   // Filter posts by search query and selected category
//   const filteredPosts = posts.filter(post => {
//     const inCategory = selectedCategory === 'All' || post.category === selectedCategory;
//     const inSearch = post.title?.toLowerCase().includes(searchQuery) || post.summary?.toLowerCase().includes(searchQuery);
//     return inCategory && inSearch;
//   });

// // Pagination logic
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <>
//     <NavigationBar />
//     <HeroSectionBlog 
//         title="Discover Insights and Inspiration" 
//         subtitle="Explore our collection of articles, personal stories, and expert advice designed to support your mental health journey."
//       />
//      <Container className='mt-3'>
//           <Row>
//               <Col md={8}>
//                   {currentPosts.map((post) => (
//                       <BlogPost key={post.id} post={post} />
//                   ))}
//                   <Pagination className="justify-content-center my-4">
//                       {Array.from({ length: Math.ceil(filteredPosts.length / postsPerPage) }, (_, i) => (
//                           <Pagination.Item key={i + 1} active={i + 1 === currentPage} onClick={() => paginate(i + 1)}>
//                               {i + 1}
//                           </Pagination.Item>
//                       ))}
//                   </Pagination>
//               </Col>
//               <Col md={4}>
//               <Link to="/create-blog">
//               <Button className="mb-4 w-100">
//                 <FaPenToSquare  className="icon mx-1"/> Write a New Article
//               </Button>
//               </Link>
//                   <Form className="mb-4">
//                       <Form.Group controlId="searchBar">
//                           <Form.Control type="text" placeholder="Search blog..." onChange={handleSearchChange} />
//                       </Form.Group>
//                   </Form>
//                   <ListGroup>
//                       <ListGroup.Item active>Categories</ListGroup.Item>
//                       {categories.map((category, index) => (
//                           <ListGroup.Item key={index} action onClick={() => handleCategorySelect(category)}>
//                               {category}
//                           </ListGroup.Item>
//                       ))}
//                   </ListGroup>
//               </Col>
//           </Row>
//       </Container>
//       </>
//   );
// };

// export default AllBlogPosts;

import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Pagination, Col, Form, ListGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegCalendarAlt, FaRegUser, FaRegComments, FaList } from 'react-icons/fa';
import NavigationBar from '../../components/Navbar';
import HeroSectionBlog from '../../components/HeroSectionBlog';
import axios from 'axios';
import { Categories } from '../../constants/categories';
import Footer from '../../components/Footer';
import '../../css/AllBlogPosts.css'; // Import the CSS file

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

const BlogPost = ({ post }) => (
    <Card className="mb-3 d-flex flex-row all-blog-posts-card">
        <Card.Img
            variant="left"
            src={post.imageUrl}
            className="all-blog-posts-card-img"
        />
        <Card.Body>
            <Card.Title className="all-blog-posts-card-title">{post.title}</Card.Title>
            <Card.Text className="all-blog-posts-card-text">{post.summary}</Card.Text>
            <div className="all-blog-posts-card-meta">
                <div>
                    <FaRegCalendarAlt className="icon mx-1" />
                    <span>{formatDate(post.createdAt)}</span>
                </div>
                <div>
                    <FaRegUser className="icon mx-1" />
                    <span>{post.doctor.name}</span>
                </div>
                <div>
                    <FaRegComments className="icon mx-1" />
                    <span>{Array.isArray(post.comments) ? post.comments.length : post.comments.replies.length}</span>
                </div>
                <div>
                    <FaList className="icon mx-1" />
                    <span>{post.category}</span>
                </div>
            </div>
            <Link to={`/blog/${post._id}`} className="stretched-link">Read More</Link>
        </Card.Body>
    </Card>
);

const AllBlogPosts = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(Categories.ALL);

    // Fetch blog posts from the backend
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/v1/blogs?query=${searchQuery}`);
                setPosts(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.error('Failed to fetch blogs:', error);
            }
        };

        fetchPosts();
    }, [searchQuery]);

    // Handling search input change
    const handleSearchChange = (e) => {
        console.log(e.target.value.toLowerCase());
        const lowerCase = e.target.value.toLowerCase();
        setSearchQuery(lowerCase);
        setCurrentPage(1); // Reset to first page on search change
    };

    // Handling category selection
    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1); // Reset to first page on category change
    };

    // Filter posts by search query and selected category
    const filteredPosts = posts.filter(post => {
        const inCategory = selectedCategory === Categories.ALL || post.category === selectedCategory;
        const inSearch = post.title?.toLowerCase().includes(searchQuery) || post.summary?.toLowerCase().includes(searchQuery);
        return inCategory && inSearch;
    });

    // Pagination logic
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <NavigationBar />
            <HeroSectionBlog
                title="Discover Insights and Inspiration"
                subtitle="Explore our collection of articles, personal stories, and expert advice designed to support your mental health journey."
            />
            <Container className='mt-3'>
                <Row>
                    <Col md={8}>
                        {currentPosts.map((post) => (
                            <BlogPost key={post._id} post={post} />
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
                            {Object.values(Categories).map((category, index) => (
                                <ListGroup.Item key={index} action onClick={() => handleCategorySelect(category)}>
                                    {category}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default AllBlogPosts;
