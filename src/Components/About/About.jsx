import React from 'react';
import "./About.css";


const About = () => {
    return (
        <div className='about '>
            <div className="about-title">
                <h1>About Me</h1>

            </div>
            <div className="about-sections">

                <div className="about-right">
                    <div className="about-para">
                        <p>I am a Passionate coder diving deep into the world of software development.Constantly exploring new technologies and building innovative solutions</p>
                        <p>A software engineer specializing in full-stack development, proficient in technologies such as MERN (MongoDB, Express, React, Node.js) and Next.js, is adept at building dynamic, scalable, and high-performance web applications. This engineer has a deep understanding of both front-end and back-end development, capable of designing user-friendly interfaces with React and efficiently managing data and server-side logic using Node.js and Express. Their expertise extends to utilizing MongoDB for handling complex data structures and ensuring smooth integration across the stack. In addition, they leverage Next.js for optimized performance, enabling server-side rendering and static site generation. With a focus on creating responsive, secure, and maintainable solutions, this full-stack engineer plays a critical role in bringing innovative ideas to life through robust, modern web technologies.</p>
                    </div>
                    <div className="about-skills">
                        <p>Full Stack development<hr style={{ width: "50%" }} /></p>
                    </div>
                    <div className="about-skills">
                        <p>MERN Stack <hr style={{ width: "50%" }} /></p>
                    </div>
                    <div className="about-skills">
                        <p>NEXT JS<hr style={{ width: "50%" }} /></p>
                    </div>
                    <div className="about-skills">
                        <p>Database Management<hr style={{ width: "50%" }} /></p>
                    </div>
                </div>
            </div>
            <div className="about-acheivements">
                <div className="about-achievement">
                    <h1>3+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>90+</h1>
                    <p>PROJECTS COMMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>15+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
                <hr />

            </div>

        </div>
    )

}

export default About
