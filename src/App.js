import React from 'react';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Education from './Components/Education/Education';
import Achievements from './Components/Achivements/Achivements';
import Contact from './Components/Contacts/Contacts';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App;
