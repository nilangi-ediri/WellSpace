import './App.css';
import './css/Home.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import NavigationBar from './components/Navbar';
import HeroSection from './components/HeroSection';
import GetInvolvedSection from './components/GetInvolvedSection';
import HelpSection from './components/HelpSection';
import TestimonialVideoSection from './components/TestimonialVideoSection';
import TestimonialsSection from './components/UserTestimonials';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <GetInvolvedSection />
      <HelpSection />
      <TestimonialVideoSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
}

export default App;
