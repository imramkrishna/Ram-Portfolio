import React from 'react';
import './Hero.css';
import profile from "../../assets/profile.svg";

const Hero = () => {
  const handleResumeDownload = () => {
    // Use public URL path
    window.open('https://drive.google.com/file/d/1M-Sb3wpGwR19hkIWKN6jVu4WRbZEOXgv/view?usp=drive_link', '_blank');
  };

  return (
    <div className='hero' id="home">
      <div className="hero-content">
        <img src={profile} alt="profile" className="hero-image" />
        <h1>
          <span>I am Ram Krishna</span>, 
          <br />software engineer based in Nepal.
        </h1>
        <p>I am a full stack developer specializing in MERN stack and Next.js, building modern web applications.</p>
        <div className="hero-action">
          <a href="#contact"><button className="hero-connect">Connect With Me</button></a>
          <button className="hero-resume" onClick={handleResumeDownload}>My Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
