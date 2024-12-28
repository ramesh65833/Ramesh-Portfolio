import React from 'react';
import './Contacts.css';
import { FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out to me via any of the platforms below:</p>
      <div className="contact-icons">
        <a 
          href="https://www.linkedin.com/in/your-profile/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-link">
          <FaLinkedin className="contact-icon linkedin" />
          LinkedIn
        </a>
        <a 
          href="mailto:ramesh.babu@example.com" 
          className="contact-link">
          <FaEnvelope className="contact-icon email" />
          Email
        </a>
        <a 
          href="https://wa.me/918148621473" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-link">
          <FaWhatsapp className="contact-icon whatsapp" />
          WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Contact;
