// App.js
import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Skill from './Components/Skill';
import { Element } from 'react-scroll';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="bg-black h-screen flex justify-center">
      <div className="bg-black h-11/12 w-screen ml-1 sm:w-10/12 h-full flex flex-col">
        <Navbar />
        <div className="w-full min-h-full flex flex-col flex-nowrap overflow-hidden overflow-y-auto scrollbar">
          <Home />
          <About />
          <Element name="skills">
            <Skill />
          </Element>
          <Projects />

        </div>
      </div>
    </div>
  );
}

export default App;
