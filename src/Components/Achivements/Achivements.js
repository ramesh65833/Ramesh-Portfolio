import React from 'react';
import './Achivements.css';

const Achievements = () => {
  return (
    <section id="achievements" className="achievements">
      <h2>Achievements</h2>
      <div className="achievements-cards">
        <div className="achievement-card">
          <h3>Improved Website Performance</h3>
          <p>Enhanced website speed and user experience through optimization techniques, achieving better client satisfaction.</p>
        </div>
        <div className="achievement-card">
          <h3>Reusable Components in React.js</h3>
          <p>Created reusable components in React to enhance development efficiency and reduce code duplication.</p>
        </div>
        <div className="achievement-card">
          <h3>Client Feedback Ratings</h3>
          <p>Delivered high client feedback ratings, especially for projects at Sourashtra College and Bigdbiz Solutions.</p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
