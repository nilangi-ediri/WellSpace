// import React from "react";
// import { Nav } from "react-bootstrap";
// import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

// const Footer = () => (
//     <footer className="page-footer font-small blue pt-4 pb-4" style={{ backgroundColor: '#008080', color: 'white', fontFamily: 'Arial, sans-serif', fontSize: '14px' }}>
//         <div className="container-fluid text-center">
//             <div className="row justify-content-center align-items-center" style={{ height: '100%' }}>
//                 <div className="col-md-4 mt-md-3 mt-3 text-center mx-3">
//                     <img src="/images/Logo.png" alt="WellSpace Logo" style={{ height: '50px', filter: 'invert(100%)' }} />  {/* Inverted color for logo to make it white */}
//                     <h5>WellSpace</h5>
//                     <p style={{ textAlign: 'justify' }}>WellSpace is dedicated to promoting mental well-being through community engagement, educational resources, and accessible support systems. We strive to empower individuals by providing the tools and knowledge needed to achieve mental health and wellness.</p>
//                     <p style={{ textAlign: 'center' }}>
//                         Contact Us: (123) 456-7890<br />
//                         Address: 123 Wellness St, Health City<br />
//                         Email: contact@wellspace.org
//                     </p>
//                 </div>

//                 <div className="col-md-6 text-center">
//                     <ul className="list-unstyled" style={{ textAlign: 'center', fontSize: '16px' }}>
//                         <li><Nav.Link href="/info" style={{ color: 'white' }}>Learn About Mental Health</Nav.Link></li>
//                         <li><Nav.Link href="#about" style={{ color: 'white' }}>About Us</Nav.Link></li>
//                         <li><Nav.Link href="/blog" style={{ color: 'white' }}>Blog & Discussion</Nav.Link></li>
//                         <li><Nav.Link href="#challenges" style={{ color: 'white' }}>Challenges</Nav.Link></li>
//                         <li><Nav.Link href="#contact" style={{ color: 'white' }}>Contact Us</Nav.Link></li>
//                     </ul>

//                     <div style={{ fontSize: '24px' }}>
//                         <FaFacebook className="mx-2" style={{ color: 'white' }} />
//                         <FaInstagram className="mx-2" style={{ color: 'white' }} />
//                         <FaLinkedin className="mx-2" style={{ color: 'white' }} />
//                         <FaYoutube className="mx-2" style={{ color: 'white' }} />
//                     </div>
//                 </div>
//             </div>
//         </div>

//         <div className="footer copyright text-center py-3">© 2023 Copyright:
//             <a href="#" style={{ color: 'white' }}> WellSpace</a>
//         </div>
//     </footer>
// );

// export default Footer;

import React from "react";
import { Nav } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import '../css/footer.css'

const Footer = () => (
    <footer className="page-footer font-small blue pt-4 footer">
        <div className="container-fluid text-center">
            <div className="row justify-content-center align-items-center" style={{ height: '100%' }}>
                <div className="col-md-4 mt-md-3 mt-3 text-center mx-3">
                    <img src="/images/Logo.png" alt="WellSpace Logo" style={{ height: '50px', filter: 'invert(100%)' }} />
                    <h5>WellSpace</h5>
                    <p style={{ textAlign: 'justify' }}>WellSpace is dedicated to promoting mental well-being through community engagement, educational resources, and accessible support systems. We strive to empower individuals by providing the tools and knowledge needed to achieve mental health and wellness.</p>
                    <p style={{ textAlign: 'center' }}>
                        Contact Us: (123) 456-7890<br />
                        Address: 123 Wellness St, Health City<br />
                        Email: contact@wellspace.org
                    </p>
                </div>

                <div className="col-md-6 text-center">
                    <ul className="list-unstyled" style={{ textAlign: 'center', fontSize: '16px' }}>
                        <li><Nav.Link href="/info" style={{ color: 'white' }}>Learn About Mental Health</Nav.Link></li>
                        <li><Nav.Link href="/about-us" style={{ color: 'white' }}>About Us</Nav.Link></li>
                        <li><Nav.Link href="/blog" style={{ color: 'white' }}>Blog & Discussion</Nav.Link></li>
                        <li><Nav.Link href="/challenges" style={{ color: 'white' }}>Challenges</Nav.Link></li>
                        <li><Nav.Link href="/contact-us" style={{ color: 'white' }}>Contact Us</Nav.Link></li>
                    </ul>

                    <div style={{ fontSize: '24px' }}>
                        <FaFacebook className="mx-2" style={{ color: 'white' }} />
                        <FaInstagram className="mx-2" style={{ color: 'white' }} />
                        <FaLinkedin className="mx-2" style={{ color: 'white' }} />
                        <FaYoutube className="mx-2" style={{ color: 'white' }} />
                    </div>
                </div>
            </div>
        </div>

        <div className="footer copyright text-center py-3">© 2023 Copyright:
            <a href="/" style={{ color: 'white' }}> WellSpace</a>
        </div>
    </footer>
);

export default Footer;

