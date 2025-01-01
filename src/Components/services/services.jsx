import React from 'react'
import { FaCode, FaDatabase, FaServer, FaMobile } from 'react-icons/fa'
import './services.css'

const Services = () => {
    const services = [
        {
            id: 1,
            icon: <FaCode />,
            title: "Frontend Development",
            description: "Building responsive web applications using React.js and Next.js with modern UI/UX principles",
            skills: ["React.js", "Next.js", "Redux", "Tailwind CSS", "Material UI"]
        },
        {
            id: 2,
            icon: <FaServer />,
            title: "Backend Development",
            description: "Developing robust server-side applications with Node.js and Express.js",
            skills: ["Node.js", "Express.js", "REST APIs", "GraphQL", "Authentication"]
        },
        {
            id: 3,
            icon: <FaDatabase />,
            title: "Database Management",
            description: "Designing and optimizing database structures for scalable applications",
            skills: ["MongoDB", "MySQL", "Database Design", "Data Modeling", "Query Optimization"]
        },
        {
            id: 4,
            icon: <FaMobile />,
            title: "Full Stack Solutions",
            description: "Delivering end-to-end web applications with modern tech stack",
            skills: ["MERN Stack", "Next.js", "AWS", "Docker", "CI/CD"]
        }
    ]

    return (
        <div className="services" id="services">
            <div className="services-title">
                <h2>My Services</h2>
               
            </div>
            
            <div className="services-container">
                {services.map((service) => (
                    <div className="service-card" key={service.id}>
                        <div className="service-icon">
                            {service.icon}
                        </div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <div className="skills-container">
                            {service.skills.map((skill, index) => (
                                <span key={index} className="skill-tag">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services