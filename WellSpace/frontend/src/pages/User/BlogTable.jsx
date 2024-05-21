import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Table, Button, Image } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import NavigationBar from '../../components/Navbar';
import Footer from '../../components/Footer';
import UserContext from '../../contexts/UserContext';
import { FaPenToSquare } from 'react-icons/fa6';

const BlogTable = () => {
    const { user, loading } = useContext(UserContext);
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading && user) {
            const fetchBlogs = async () => {
                try {
                    const response = await axios.get(`http://localhost:5000/api/v1/blogs`);
                    const filteredBlogs = response.data.data.filter(blog => blog.doctor._id === user._id);
                    setBlogs(filteredBlogs);
                    console.log(filteredBlogs)
                } catch (error) {
                    console.error('Error fetching blogs:', error);
                }
            };
            fetchBlogs();
        }
    }, [loading, user]);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/blogs/${id}`);
            setBlogs(blogs.filter(blog => blog._id !== id));
        } catch (error) {
            console.error('Error deleting blog:', error);
        }
    };

    const handleEdit = (id) => {
        navigate(`${id}`);
    };

    return (
        <>
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
                                    <Button variant="danger" size="sm" onClick={() => handleDelete(post._id)}>Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <Footer />
        </>
    );
};

export default BlogTable;
