import React from 'react';
import githubIcon from '/assets/GitHub-icon.png';
import linkedinIcon from '/assets/Linkedin-icon.png'; 

const Footer = () => {
  return (
    <div className="footer center">
      <a href="https://www.linkedin.com/in/jonhocker/" target="_blank" rel="noopener noreferrer">
        <img src={linkedinIcon} alt="LinkedIn" className="footer-icon" />
      </a>
      <a href="https://github.com/jhock9" target="_blank" rel="noopener noreferrer">
        <img src={githubIcon} alt="GitHub" className="footer-icon" />
      </a>
    </div>
  );
}

export default Footer;
