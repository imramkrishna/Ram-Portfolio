import React,{useState} from 'react';
import { FaGithub, FaLinkedin,FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const formData = {
                name: e.target.name.value, 
                email: e.target.email.value,
                subject: e.target.subject.value,
                message: e.target.message.value
            };
    
            const response = await fetch('http://localhost:3001/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (response.ok) {
                alert('Message sent successfully!');
                e.target.reset();
            } else {
                throw new Error('Failed to send message');
            }
            
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to send message. Please try again.');
        }
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
                        <p>itsramky234@gmail.com</p>
                    </div>
                    <div className="info-item">
                        <FaPhone />
                        <p>+977 9703577211</p>
                    </div>
                    <div className="info-item">
                        <FaMapMarkerAlt />
                        <p>Kathmandu, Nepal</p>
                    </div>
                    
                    <div className="social-links">
                        <a href="https://github.com/imramkrishna" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com/in/ramkrishnaprofile" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="https://x.com/ramkrishnacode" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>

                    </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
                <input type="text" name="subject" placeholder="Subject" required />
            </div>
            <div className="form-group">
                <textarea name="message" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit">Send Message</button>
        </form>
            </div>
        </div>
    );
};

export default Contact;