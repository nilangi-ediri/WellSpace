import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Container } from 'react-bootstrap';

const options = {
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
};

const testimonials = [
    {
        name: "Maria Samantha",
        quote: "Discovering WellSpace was like a breath of fresh air in my daily routine, uplifting and deeply beneficial.",
        imageUrl: "/images/girl.jpg",
        // backgroundColor: "#ace0f9"
    },
    {
        name: "Lisa Cudrow",
        quote: "In the midst of chaos, WellSpace has been my sanctuary of peace, offering support and a sense of community.",
        imageUrl: "/images/woman.jpg",
        // backgroundColor: "#fbd490"
    },
    {
        name: "John Smith",
        quote: "WellSpace isn't just a platform, it's a journey to a better self, guided by wisdom and shared experiences.",
        imageUrl: "/images/boy.jpg",
        // backgroundColor: "#bde4a7"
    }
];

function TestimonialsSection() {
    return (
        <Container className="text-center my-4">
            <div className="testimonials-container smaller">
                <h2 className="text-center">Hear What Our Happy Customers Say!</h2>
                <p className="text-center">Discover how our services have transformed the lives of our users...</p>
                <OwlCarousel className='owl-theme' {...options}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="item testimonial-item">
                            <div className="testimonial-card">
                                <div className="card-header">
                                    <img src={testimonial.imageUrl} alt={testimonial.name} className="testimonial-image" />
                                </div>
                                <div className="card-body">
                                    <h5 className="testimonial-name">{testimonial.name}</h5>
                                    <p className="testimonial-quote">"{testimonial.quote}"</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
            </div >
        </Container >
    );
}

export default TestimonialsSection;
