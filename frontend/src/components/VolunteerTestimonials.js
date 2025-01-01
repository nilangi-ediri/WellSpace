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
        name: "Alice Johnson",
        quote: "Volunteering as a counseling volunteer at WellSpace has been a life-changing experience. I've been able to help others while also growing personally.",
        imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZlbWFsZSUyMHBvcnRyYWl0fGVufDB8fDB8fHwy"
    },
    {
        name: "David Thompson",
        quote: "Being an expert contributor allows me to share my knowledge and make a real difference in people's lives. WellSpace is a fantastic platform for this.",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbGV8ZW58MHx8MHx8fDI%3D"
    },
    {
        name: "Emily Carter",
        quote: "The sense of community and support at WellSpace is incredible. Volunteering here has given me a sense of purpose and fulfillment.",
        imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9jdG9yfGVufDB8fDB8fHwy"
    }
];

function VolunteerTestimonials() {
    return (
        <Container className="text-center my-4">
            <div className="testimonials-container smaller">
                <h2 className="text-center">Hear What Our Volunteers Say!</h2>
                <p className="text-center">Discover how volunteering with us has transformed the lives of our volunteers...</p>
                <OwlCarousel className='owl-theme' {...options}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="item testimonial-item">
                            <div className="testimonial-card">
                                <div className="card-header">
                                    <img src={testimonial.imageUrl} alt={testimonial.name} className="testimonial-image" />
                                </div>
                                <div className="card-body">
                                    <h5 className="testimonial-name text-center">{testimonial.name}</h5>
                                    <p className="testimonial-quote text-center">"{testimonial.quote}"</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
            </div>
        </Container>
    );
}

export default VolunteerTestimonials;
