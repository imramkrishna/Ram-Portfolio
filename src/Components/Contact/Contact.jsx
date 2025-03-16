import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState({ show: false, type: '', message: '' });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            const response = await fetch('http://localhost:3001/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (response.ok) {
                setFormStatus({
                    show: true,
                    type: 'success',
                    message: 'Message sent successfully! I will get back to you soon.'
                });
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                throw new Error('Failed to send message');
            }
            
        } catch (error) {
            console.error('Error:', error);
            setFormStatus({
                show: true,
                type: 'error',
                message: 'Failed to send message. Please try again.'
            });
        } finally {
            setIsSubmitting(false);
            setTimeout(() => {
                setFormStatus({ show: false, type: '', message: '' });
            }, 5000);
        }
    };

    return (
        <div className="contact" id="contact">
            <div className="contact-title">
                <h2>Get In Touch</h2>
                <div className="title-underline">
                    <span></span>
                </div>
                <p>Let's collaborate on your next project</p>
            </div>

            {formStatus.show && (
                <div className={`notification ${formStatus.type}`}>
                    {formStatus.message}
                </div>
            )}

            <div className="contact-container">
                <div className="contact-info">
                    <h3>Contact Information</h3>
                    <p>Feel free to reach out through any of these channels</p>
                    
                    <div className="info-item">
                        <div className="icon-container">
                            <FaEnvelope />
                        </div>
                        <div className="info-content">
                            <h4>Email</h4>
                            <p>itsramky234@gmail.com</p>
                        </div>
                    </div>
                    
                    <div className="info-item">
                        <div className="icon-container">
                            <FaPhone />
                        </div>
                        <div className="info-content">
                            <h4>Phone</h4>
                            <p>+977 9703577211</p>
                        </div>
                    </div>
                    
                    <div className="info-item">
                        <div className="icon-container">
                            <FaMapMarkerAlt />
                        </div>
                        <div className="info-content">
                            <h4>Location</h4>
                            <p>Kathmandu, Nepal</p>
                        </div>
                    </div>
                    
                    <div className="social-links">
                        <a href="https://github.com/imramkrishna" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com/in/ramkrishnaprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href="https://x.com/ramkrishnacode" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <FaTwitter />
                        </a>
                    </div>
                </div>

                <div className="form-container">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Your Name" 
                                value={formData.name}
                                onChange={handleChange} 
                                required 
                            />
                            <span className="form-highlight"></span>
                        </div>
                        <div className="form-group">
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Your Email" 
                                value={formData.email}
                                onChange={handleChange} 
                                required 
                            />
                            <span className="form-highlight"></span>
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="subject" 
                                placeholder="Subject" 
                                value={formData.subject}
                                onChange={handleChange} 
                                required 
                            />
                            <span className="form-highlight"></span>
                        </div>
                        <div className="form-group">
                            <textarea 
                                name="message" 
                                placeholder="Your Message" 
                                value={formData.message}
                                onChange={handleChange} 
                                required
                            ></textarea>
                            <span className="form-highlight"></span>
                        </div>
                        <button 
                            type="submit" 
                            className={isSubmitting ? 'submitting' : ''}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : (
                                <>
                                    <span>Send Message</span>
                                    <FaPaperPlane className="send-icon" />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;