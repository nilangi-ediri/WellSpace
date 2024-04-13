import './App.css';
import './css/Home.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Import React dependencies.
import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Home from './pages/Home';
import UserSignUp from './pages/UserSignUp';
import AllBlogPosts from './pages/blog/AllBlogPosts';
import CreateBlogPost from './pages/blog/CreateBlogPost';
import 'animate.css';

// Import the Slate editor factory.
import { createEditor } from 'slate'

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react'
import BlogPostView from './pages/blog/BlogView';

function App() {
  const [editor] = useState(() => withReact(createEditor()))
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<UserSignUp />} />
          <Route path="/blog" element={<AllBlogPosts />} />
          <Route path="/create-blog" element={<CreateBlogPost />} />
          <Route path="/view-blog" element={<BlogPostView />} />
          {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
