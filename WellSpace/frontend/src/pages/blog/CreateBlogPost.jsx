import React, { useState } from 'react';
import { Card, Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';
import NavigationBar from '../../components/Navbar';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReusableRichTextEditor from '../../components/ReusableRichTextEditor';
import TextEditor from '../../components/ReusableRichTextEditor';
import HeroSectionBlog from '../../components/HeroSectionBlog';
import axios from 'axios';

// Static data for categories, you could dynamically generate this list too
const categories = ['Technology', 'Health', 'Business', 'Entertainment', 'Sports', 'Science'];

const CreateBlogPost = () => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');

  const [imageFile, setImageFile] = useState(null);

  const handleImageChange = (e) => {
      setImageFile(e.target.files[0]);
  };

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
      image: imageFile,
      category: category,
      content: content
    }
    
    try {
      const response = await axios.post(`http://localhost:5000/api/v1/blogs/${doctorId}`, BlogData, {
        // headers: {
        //   'Content-Type': 'multipart/form-data'
        // }
      });
      console.log('Blog post created:', response.data);
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
      </Container>
    </>
  );
};

export default CreateBlogPost;
