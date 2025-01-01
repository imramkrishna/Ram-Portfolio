import React from 'react';
import "./About.css";

const About = () => {
    return (
        <div className='about '>
            <div className="about-title">
                <h1>About Me</h1>
                
            </div>
            <div className="about-sections">
                <div className="about-left">

                    <img src="" alt="profile image" />

                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a Passionate coder diving deep into the world of software development.Constantly exploring new technologies and building innovative solutions</p>
                        <p>I work as a Full Stack Engineer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js), Next.js, and database management.</p>
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
                    <h1>10+</h1>
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
