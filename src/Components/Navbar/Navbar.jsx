import React, { useState } from 'react';
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    if (target) {
      const headerOffset = 80; // adjust based on your navbar height
      const elementPosition = target.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  return (
    <div className='navbar'>
      <div className="nav-brand">
        <p>Ram Krishna</p>
      </div>

      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={handleClick}>Home</a></li>
        <li><a href="#about" onClick={handleClick}>About Me</a></li>
        <li><a href="#services" onClick={handleClick}>Services</a></li>
        <li><a href="#portfolio" onClick={handleClick}>Portfolio</a></li>
        <li><a href="#contact" onClick={handleClick}>Contact</a></li>
      </ul>

      <div className="nav-connect">
        <a href="#contact">Connect With Me</a>
      </div>
    </div>
  );
};

export default Navbar;
