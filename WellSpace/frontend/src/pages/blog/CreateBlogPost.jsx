import React, { useState } from 'react';
import { Card, Container, Row, Col, Form, Button, ListGroup, ToastContainer, Toast } from 'react-bootstrap';
import NavigationBar from '../../components/Navbar';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReusableRichTextEditor from '../../components/ReusableRichTextEditor';
import TextEditor from '../../components/ReusableRichTextEditor';
import HeroSectionBlog from '../../components/HeroSectionBlog';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import uploadCloudinary from '../../utils/uploadCloudinary';

// Static data for categories, you could dynamically generate this list too
const categories = ['Technology', 'Health', 'Business', 'Entertainment', 'Sports', 'Science'];

const CreateBlogPost = () => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [showToast, setShowToast] = useState(false);

  const [imageFile, setImageFile] = useState(null);
  const navigate = useNavigate();

  // const handleImageChange = (e) => {
  //   setImageFile(e.target.files[0]);
  // };
  const handleImageChange = async (e) => {
    const { files } = e.target
    if (files) {
      const file = files[0]
      const data = await uploadCloudinary(file)
      console.log(data);
      setImageFile(data.secure_url)
    }
  }

  const handleEditorChange = content => {
    setContent(content);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const doctorId = "660247adb56a95c2c97fa68b";

    const BlogData = {
      title: title,
      summary: summary,
      image: imageFile.path,
      category: category,
      content: content,
      isPublished: "published"
    }

    try {
      const response = await axios.post(`http://localhost:5000/api/v1/blogs/${doctorId}`, BlogData, {
        // headers: {
        //   'Content-Type': 'multipart/form-data'
        // } //This is to post the image
      });
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        navigate('/blog');
      }, 2000);
      // Handle further actions after successful posting, like redirecting or clearing the form
    } catch (error) {
      console.error('Error posting blog:', error);
      // Handle errors here, such as displaying a message to the user
    }
  };

  return (
    <>
      <NavigationBar />
      <HeroSectionBlog
        title="Share Your Expertise"
        subtitle="Your insights could be the guide someone needs. Write an article and join our mission in promoting mental wellness."
      />
      <Container className='mt-3'>
        <Row>
          <div>
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
                <Form.Label>Summary</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter post summary"
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
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
                Publish
              </Button>
            </Form>
          </div>
        </Row>

        <ToastContainer className="p-3" position="top-end">
          <Toast onClose={() => setShowToast(false)} show={showToast} delay={2000} autohide>
            <Toast.Header>
              <strong className="me-auto">Blog post published successfully!</strong>
            </Toast.Header>
            <Toast.Body>Created!</Toast.Body>
          </Toast>
        </ToastContainer>

      </Container>
    </>
  );
};

export default CreateBlogPost;
