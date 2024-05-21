import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Table, Button, Image, Modal, ToastContainer, Toast } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import NavigationBar from '../../components/Navbar';
import Footer from '../../components/Footer';
import UserContext from '../../contexts/UserContext';
import { FaPenToSquare } from 'react-icons/fa6';

const BlogTable = () => {
    const { user, loading } = useContext(UserContext);
    const [refresh, setRefresh] = useState(false);
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [showDeleteToast, setShowDeleteToast] = useState(false);
    const [postId, setPostId] = useState(null);

    useEffect(() => {
        if (!loading && user) {
            const fetchBlogs = async () => {
                try {
                    const response = await axios.get(`http://localhost:5000/api/v1/blogs`);
                    const filteredBlogs = response.data.data.filter(blog => blog.doctor._id === user._id);
                    setBlogs(filteredBlogs);
                } catch (error) {
                    console.error('Error fetching blogs:', error);
                }
            };
            fetchBlogs();
        }
    }, [loading, user, refresh]);

    const funcDelete = async () => {
        try {
          await axios.delete(`http://localhost:5000/api/v1/blogs/${postId}`);
          setShowModal(false);
          setShowDeleteToast(true);
          setTimeout(() => {
            setShowDeleteToast(false);
            navigate('/user-profile/blog');
            setRefresh(prev => !prev);
          }, 2000);
        } catch (error) {
          console.error('Error deleting blog:', error);
        }
      };

    const handleDel = (postId) => {
        setPostId(postId);
        setShowModal(true);
      }

    const handleEdit = (id) => {
        navigate(`${id}`);
    };

    return (
        <div className='outer-container'>
            <NavigationBar />
            <div className="container mt-5">
                <div className="d-flex justify-content-end mb-3">
                    <Link to="/create-blog">
                    <Button className=" w-100">
                                <FaPenToSquare className="icon mx-1" /> Write a New Article
                    </Button>
                    </Link>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.map((post) => (
                            <tr key={post._id}>
                                <td>
                                    <Image
                                        src={post.imageUrl}
                                        style={{
                                            width: '100px',
                                            height: '75px',
                                            objectFit: 'cover'
                                        }}
                                        rounded
                                    />
                                </td>
                                <td><strong>{post.title}</strong> <br /> {post.summary}</td>
                                <td>{post.category}</td>
                                <td>{new Date(post.createdAt).toLocaleDateString()}</td>
                                <td>
                                    <Button variant="primary" size="sm" onClick={() => handleEdit(post._id)}>Edit</Button>
                                    {' '}
                                    <Button variant="danger" size="sm" onClick={() => handleDel(post._id)}>Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

            <ToastContainer className="p-3 position-fixed" position="top-end">
            <Toast onClose={() => setShowDeleteToast(false)} show={showDeleteToast} delay={2000} autohide>
                <Toast.Header>
                <strong className="me-auto">Blog post deleted successfully!</strong>
                </Toast.Header>
                <Toast.Body>Deleted!</Toast.Body>
            </Toast>
        </ToastContainer> 

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this blog post?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
                    <Button variant="danger" onClick={funcDelete}>Delete</Button>
                </Modal.Footer>
            </Modal>
            <Footer />
        </div>
    );
};
export default BlogTable;
