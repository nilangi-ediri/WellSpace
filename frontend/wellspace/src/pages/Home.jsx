import React from 'react'
import '../css/Home.css'


import HeroSection from '../components/HeroSection';
import HelpSection from '../components/HelpSection';
import TestimonialVideoSection from '../components/TestimonialVideoSection';
import TestimonialsSection from '../components/UserTestimonials';
import Footer from '../components/Footer';
import NavigationBar from '../components/Navbar';
import GetInvolvedCards from '../components/GetInvolvedCards';

function Home() {
  return (
    <>
    <NavigationBar />
    <HeroSection />
    <GetInvolvedCards />
    <HelpSection />
    <TestimonialVideoSection />
    <TestimonialsSection />
    <Footer />
    </>
  )
}

export default Home