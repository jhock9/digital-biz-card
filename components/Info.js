import React from 'react';

function Info() {
  return (
    <div className="info center">
      <img src="./assets/jon-headshot.webp" alt="Your Name" className="info-photo center" />
      <h1 className="info-name center">Jon Hocker</h1>
      <p className="info-role center">Web Developer / Software Engineer</p>
      <p className="info-website center">
        <a href="https://okwebstudios.com" target="_blank" rel="noopener noreferrer">
          www.okwebstudios.com
        </a>
      </p>
      <div className="center">
        <a href="mailto:okwebstudios@gmail.com">
          <button className="email-btn">
            <img src="/assets/email-icon.png" alt="Email" className="email-icon" />
            Email
          </button>
        </a>
      </div>
    </div>
  );
}

export default Info;
