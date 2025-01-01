import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
    };

    return (
        <div className="contact" id="contact">
            <div className="contact-title">
                <h2>Get In Touch</h2>
                <p>Let's work together</p>
            </div>

            <div className="contact-container">
                <div className="contact-info">
                    <div className="info-item">
                        <FaEnvelope />
                        <p>youremail@example.com</p>
                    </div>
                    <div className="info-item">
                        <FaPhone />
                        <p>+1 234 567 8900</p>
                    </div>
                    <div className="info-item">
                        <FaMapMarkerAlt />
                        <p>Your Location</p>
                    </div>
                    
                    <div className="social-links">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="text" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Subject" required />
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;