import React from 'react';
import './Abouts.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-container">
        
        <div className="avatar-container">
          <img src="Images/Hi.png" alt="Avatar" className="about-avatar" />
        </div>
        
        
        <div className="about-content">
          <div className="name-intro">
            <h1>
              Hi, I am <span className="highlight-name">Rameshbabu</span> Boolu JeyaPrakash
            </h1>
            <h3>FRONTEND WEB DEVELOPER</h3>
          </div>
          <p className="about-description">
            I am a passionate Front-End Web Developer eager to create beautiful, user-friendly websites. I blend design and code to craft compelling digital experiences. Let's build something amazing together! I specialize in front-end development and am excited to kick-start my career in web development.
          </p>
          <div className="about-info">
            <div className="about-item">
            <a href="/assets/Ramesh B J-v1.2.1.pdf" className="resume-link" target="_blank" rel="noopener noreferrer">
          <button className="check-resume-btn">Check Resume</button>
        </a>
            </div>
            <div className="about-item">
              <p><strong>Completed Projects:</strong> 5+</p>
            </div>
            <div className="about-item">
              <p><strong>Years of Experience:</strong> 1+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
