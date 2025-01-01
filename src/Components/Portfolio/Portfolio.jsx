import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Portfolio.css';

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            title: "Food Delivery App",
            image: "/images/food-delivery.jpg",
            description: "A full-stack food delivery application built with MERN stack and real-time order tracking",
            technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"],
            github: "https://github.com/yourusername/food-delivery",
            live: "https://food-delivery-app.com",
        },
        {
            id: 2,
            title: "Restaurant Booking System",
            image: "/images/restaurant-booking.jpg",
            description: "Next.js based restaurant reservation system with real-time availability",
            technologies: ["Next.js", "MongoDB", "Tailwind CSS", "JWT"],
            github: "https://github.com/yourusername/restaurant-booking",
            live: "https://restaurant-booking.com",
        },
        {
            id: 3,
            title: "E-Commerce Platform",
            image: "/images/ecommerce.jpg",
            description: "Full-featured e-commerce platform with payment integration and admin dashboard",
            technologies: ["MERN Stack", "Redux", "Stripe", "AWS"],
            github: "https://github.com/yourusername/ecommerce",
            live: "https://ecommerce-platform.com",
        }
    ];

    return (
        <div className="portfolio" id="portfolio">
            <div className="portfolio-title">
                <h2>My Projects</h2>
                <p>Recent work showcasing my full-stack development skills</p>
            </div>

            <div className="projects-container">
                {projects.map((project) => (
                    <div className="project-card" key={project.id}>
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                            <div className="project-overlay">
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <FaGithub />
                                </a>
                                <a href={project.live} target="_blank" rel="noopener noreferrer">
                                    <FaExternalLinkAlt />
                                </a>
                            </div>
                        </div>
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-tech">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;