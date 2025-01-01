import React from 'react'
import './Hero.css'
import profile from "../../assets/profile.svg"
const Hero = () => {
  return (
    <div className='hero'>
        <img src="" alt="profile" height="500px" width="300px" />
        <h1><span>I am Ram Krishna</span>, software engineer based in Nepal.</h1>
        <p>I am a full stack developer working with mern stack and next js.</p>
        <div className="hero-action">
            <div className="hero-connect">
                Connect With Me
            </div>
            <div className="hero-resume">
                My Resume
            </div>
        </div>

      
    </div>
  )
}

export default Hero;
