import React from 'react';

const projects = [
  { src: "https://i.postimg.cc/0QCNX1Wd/pr-pmc.png", alt: "PMC Project",url:"https://pmcgarment.vercel.app/" },
  { src: "https://i.postimg.cc/SRTxq7pn/pr-swiggy.png", alt: "Swiggy Project",url:"https://spicymadhur.vercel.app/" },
  { src: "https://i.postimg.cc/RhVZjp2r/pr-weather.png", alt: "Weather Project",url:"https://codepen.io/madhur2624/pen/jORVYQp" }
];

function Projects() {
  return (
    <div className="min-w-full min-h-screen  flex flex-col gap-y-4 overflow-hidden overflow-y-auto">
      {projects.map((project, index) => (
        <a href={project.url}>
        <div key={index} className="w-full p-2 lg:p-5 text-white ">
          <img src={project.src} alt={project.alt} className="rounded-md" />
        </div>
        </a>
      ))}
    </div>
  );
}

export default Projects;
