// Navbar.js
import React from 'react';

const Navbar = () => {
  

  return (
    <nav className="bg-black border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auhref p-4">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Madhur</span>
        </a>
        <buthrefn
          type="buthrefn"
          className="inline-flex text-bolder items-center p-2 w-10 h-10 justify-center text-sm border border-white text-white rounded-lg md:hidden bg-black hover:bg-gray-400"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          O
        </buthrefn>
        <div className="hidden w-full md:block md:w-auhref" id="navbar-default navHide">
          <div className="font-medium flex flex-col p-4 md:p-0 mt-4 navHide border border-white rounded-lg bg-black text-orange-400 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <div className="hover:text-white">
              <a href="#home" smooth={true} duration={500}>Home</a>
            </div>
            <div className="hover:text-white">
              <a href="#about" smooth={true} duration={500}>About</a>
            </div>
            <div className="hover:text-white">
              <a href="#skills" smooth={true} duration={500}>Skills</a>
            </div>
            <div className="hover:text-white">
              <a href="#projects" smooth={true} duration={500}>Projects</a>
            </div>
            <div className="hover:text-white">
              <a href="https://drive.google.com/file/d/1XyNGDfzjqHV6j9JY0d92uho_CsmUzWkg/view?usp=drive_link" smooth={true} duration={500}>Resume</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
