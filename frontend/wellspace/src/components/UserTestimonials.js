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
        name: "Maria Smantha",
        quote: "Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit.",
        imageUrl: "https://wl-brightside.cf.tsp.li/resize/728x/jpg/8f3/ff4/917bd7512eae29e24e2b97a389.jpg", // Replace with your image path
        backgroundColor: "#cfc4ff" // Example background color
    },
    {
        name: "Lisa Cudrow",
        quote: "Neque cupiditate assumenda in maiores repudi mollitia architecto.",
        imageUrl: "https://hips.hearstapps.com/hmg-prod/images/actor-will-smith-arrives-at-the-los-angeles-world-premiere-news-photo-465783654-1565089503.jpg", // Replace with your image path
        backgroundColor: "#ffdeeb" // Example background color
    },
    {
        name: "John Smith",
        quote: "Delectus impedit saepe officiis ab aliquam repellat rem unde ducimus.",
        imageUrl: "https://qph.cf2.quoracdn.net/main-qimg-b5bca88919984113a9e11eb35bddd250-lq", // Replace with your image path
        backgroundColor: "#d4ebff" // Example background color
    }
];

const TestimonialsSection = () => {
    return (
        <Container className="text-center my-4">
            <div className="testimonials-container">
                <h2 className="text-center">Testimonials</h2>
                <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                <OwlCarousel className='owl-theme' {...options}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="item testimonial-item">
                            <div className="testimonial-card" style={{ backgroundColor: testimonial.backgroundColor }}>
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
            </div>
        </Container>
    );
};

export default TestimonialsSection;
