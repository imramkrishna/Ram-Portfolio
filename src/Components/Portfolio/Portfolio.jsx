import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Portfolio.css';

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            title: "Multi Vendor Admin panrl",
            image: "admin.png",
            description: "A robust multi vendor admin panel for food,grocery and pharmacy delivery applications with admin panel",
            technologies: ["NextJs", "Node.js", "MongoDB", "Express", "Redux" ,"Tailwind CSS", "JWT"],
            github: "https://github.com/imramkrishna/multivendor",
            live: "https://multivendorpanel.vercel.app/grocery/dashboard",
        },
        {
            id: 2,
            title: "Time Checker Chrome Extension",
            image: "timechecker.jpeg",
            description: "This is a chrome extension that tracks all the websites visited and shows how much have you spent on them.",
            technologies: ["React Js", "Javascript", "Chrome Extension"],
            github: "https://github.com/imramkrishna/Website-Time-Tracker",
            live: "https://github.com/imramkrishna/Website-Time-Tracker",
        },
        {
            id: 3,
            title: "Banking System",
            image: "bank.avif",
            description: "This Full Stack Banking Application allows users to manage accounts, make transactions, and check balances securely. Built with Node.js, Express, Mongoose, and a responsive frontend using HTML, CSS, and JavaScript.",
            technologies: ["MERN Stack", "Redux", "AWS"],
            github: "https://github.com/imramkrishna/BankingWebApplication",
            live: "https://bankingwebapplication.onrender.com",
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