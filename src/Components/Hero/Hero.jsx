import React from 'react';
import './Hero.css';
import profile from "../../assets/profile.svg";

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-content">
        <img src={profile} alt="profile" className="hero-image" />
        <h1>
          <span>I am Ram Krishna</span>, 
          <br />software engineer based in Nepal.
        </h1>
        <p>I am a full stack developer specializing in MERN stack and Next.js, building modern web applications.</p>
        <div className="hero-action">
          <button className="hero-connect">Connect With Me</button>
          <button className="hero-resume">My Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
