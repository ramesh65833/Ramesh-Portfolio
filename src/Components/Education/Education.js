import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <h2>Education</h2>
      <div className="education-cards">
        <div className="education-card">
          <h3>Bachelor of Engineering (BE) in ECE</h3>
          <p>Thiagarajar College of Engineering, Madurai</p>
          <p>CGPA: 6.3</p>
          <p>Graduated: 2021</p>
        </div>
        <div className="education-card">
          <h3>Diploma in Electrical and Electronics Engineering</h3>
          <p>K.L.N Polytechnic College, Madurai</p>
          <p>Percentage: 67.73%</p>
          <p>Completed: 2016</p>
        </div>
        <div className="education-card">
          <h3>SSLC</h3>
          <p>Sourashtra Boys Higher Secondary School, Madurai</p>
          <p>Percentage: 57.53%</p>
          <p>Completed: 2013</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
