import './App.css';
import './css/Home.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Import React dependencies.
import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Home from './pages/Home';
import AllBlogPosts from './pages/blog/AllBlogPosts';
import CreateBlogPost from './pages/blog/CreateBlogPost';
import 'animate.css';

// Import the Slate editor factory.
import { createEditor } from 'slate'

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react'
import BlogPostView from './pages/blog/BlogView';
import UserLogin from './pages/Authentification/Login';
import UserSignUp from './pages/Authentification/SignUp';
import Information from './pages/Information';
import UserProfile from './pages/User/UserProfile';
import BlogTable from './pages/User/BlogTable';
import EditBlog from './pages/User/EditBlog';
import { UserProvider } from './contexts/UserContext';
import { PrivateRouteExpert, PrivateRoute } from './components/PrivateRoute';
import ContactUs from './pages/ContactUs';
import Volunteer from './pages/Volunteer';
import ScrollToTop from './components/ScrollToTop';
import Challenges from './pages/Challenges/Challenges';
import MindfulnessQuiz from './pages/Challenges/MindfulnessQuiz';
import Booking from './pages/Booking/booking';
import DoctorsPage from './pages/Booking/doctorspage';
import AboutUs from './pages/aboutus';
import Donation from './pages/Donation/Donation';
import Payment from './pages/Donation/Payment';
import Challenge1 from './pages/Challenges/Challenge1'
import Challenge2 from './pages/Challenges/Challenge2'
import DailySteps from './pages/Challenges/DailySteps'
import DigitalDetox from './pages/Challenges/DigitalDetox'
import HealthyEating from './pages/Challenges/HealthyEating'
import HydrationBoost from './pages/Challenges/HydrationBoost';
import PositiveAffirmations from './pages/Challenges/PositiveAffirmations'
import RestfulSleep from './pages/Challenges/RestfulSleep'
import SevenDayMindfulness from './pages/Challenges/SevenDayMindfulness'

function App() {
  const [editor] = useState(() => withReact(createEditor()));
  return (
    <UserProvider>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/blog" element={<AllBlogPosts />} />
            <Route path="/create-blog" element={<PrivateRouteExpert element={CreateBlogPost} />} />
            <Route path="/blog/:postId" element={<BlogPostView />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/sign-up" element={<UserSignUp />} />
            <Route path="/info" element={<Information />} />
            <Route path="/user-profile" element={<PrivateRoute element={UserProfile} />} />
            {/* <Route path="/user-profile" element={<UserProfile />} /> */}
            <Route path="/user-profile/blog" element={<PrivateRouteExpert element={BlogTable} />} />
            <Route path="/user-profile/blog/:postId" element={<PrivateRouteExpert element={EditBlog} />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/mind-quiz" element={<MindfulnessQuiz />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/doctorspage" element={<DoctorsPage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/challenge1" element={<Challenge1 />} />
            <Route path="/challenge2" element={<Challenge2 />} />
            <Route path="/steps-challenge" element={<DailySteps />} />
            <Route path="/digital-detox-challenge" element={<DigitalDetox />} />
            <Route path="/healthy-eating-challenge" element={<HealthyEating />} />
            <Route path="/hydration-challenge" element={<HydrationBoost />} />
            <Route path="/affirmations-challenge" element={<PositiveAffirmations />} />
            <Route path="/restful-sleep-challenge" element={<RestfulSleep />} />
            <Route path="/seven" element={<SevenDayMindfulness />} />

          </Routes>
        </ScrollToTop>
      </Router>
    </UserProvider>
  );
}

export default App;


