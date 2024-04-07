import './App.css';
import './css/Home.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Home from './pages/Home';
import UserSignUp from './pages/UserSignUp';
import AllBlogPosts from './pages/blog/AllBlogPosts';
import CreateBlogPost from './pages/blog/CreateBlogPost';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<UserSignUp />} />
          <Route path="/blog" element={<AllBlogPosts />} />
          <Route path="/create-blog" element={<CreateBlogPost />} />
          {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
