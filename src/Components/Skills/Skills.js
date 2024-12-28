import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaGithub, FaGitAlt } from 'react-icons/fa';
import './Skills.css';


const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skill-card skill-card-animate skill-react"><FaReact className="skill-icon" /> React.js</div>
        <div className="skill-card skill-card-animate skill-html"><FaHtml5 className="skill-icon" /> HTML5</div>
        <div className="skill-card skill-card-animate skill-css"><FaCss3Alt className="skill-icon" /> CSS3</div>
        <div className="skill-card skill-card-animate skill-js"><FaJs className="skill-icon" /> JavaScript</div>
        <div className="skill-card skill-card-animate skill-bootstrap"><FaBootstrap className="skill-icon" /> Bootstrap</div>
        <div className="skill-card skill-card-animate skill-git"><FaGitAlt className="skill-icon" /> Git</div>
        <div className="skill-card skill-card-animate skill-github"><FaGithub className="skill-icon" /> GitHub</div>
        <div className="skill-card skill-card-animate">
          <img src='/Images/Vscode.png' alt="VS Code" className="skill-icon" /> VS Code {/* Display VS Code PNG */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
