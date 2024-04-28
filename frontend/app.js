import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <div className="container">
            <header>
                <h1>WellSpace</h1>
            </header>
            <nav>
                <ul>
                    
                    <li><a href="aboutus.html">About Us</a></li>
                    <li><a href="booking.html">Contact</a></li>
                </ul>
            </nav>
            <main>
                <section>
                    <h2>Welcome to Our Center</h2>
                    <p>We provide a safe and supportive environment for your mental wellness journey.</p>
                </section>
                <section>
                    <h2>Our Services</h2>
                    <ul>
                        <li>Counseling</li>
                        <li>Therapy Sessions</li>
                        <li>Mindfulness Workshops</li>
                        <li>Group Therapy</li>
                        
                    </ul>
                </section>
                <section>
                    <h2>Meet Our Team</h2>
                    <div className="team-member">
                        <img src="team-member1.jpg" alt="Team Member 1"/>
                        <h3>Dr. John Doe</h3>
                        <p>Psychologist</p>
                    </div>
                    
                </section>
            </main>
            <footer>
                <p>&copy; 2024 Mental Wellness Center. All rights reserved.</p>
            </footer>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
