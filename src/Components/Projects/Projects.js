import React from 'react';
import './Projects.css';


const Projects = () => {
  const projectData = [
    
    {
      title: 'Adaptable Bakery Tool',
      description: 'POS and inventory management system tailored for bakery operations.',
      link: 'http://106.51.21.129:888/Dashboard',
      image: '/images/bakery.jpg',
    },
    {
        title: 'Kaaveedhan Consulting',
        description: 'A responsive HR Management System developed using React, Redux Saga, and Next.js.',
        link: 'https://kaveedhan-consulting.netlify.app/', 
        image: '/Images/Kaveedhan.jpg', 
      },
   
    {
        title: 'Healthcare 360 (Nutritionist Consultant)',
        description: 'A complete solution for Handling Customer/Clients needs and Document the Details of the Customer/Clients.',
        link: 'https://healthcare360hub.com/category/diet-nutrient/', 
        // image: '/images/laundry-management.jpg',
      },
    {
      title: 'Sourashtra College Website',
      description: 'A responsive website developed for Sourashtra College using modern web technologies.',
      link: 'http://www.sourashtracollege.com/index.aspx', 
      image: '/images/sourashtracollege.jpg', 
    },
   
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-cards">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
