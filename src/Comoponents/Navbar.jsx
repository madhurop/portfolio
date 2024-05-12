import React from 'react'

function Navbar() {
  return (
    <div className="h-14 w-full flex flex-row justify-between items-center p-4  ">
        <h1 className=" text-white text-3xl  ">Madhur</h1>
        <div className=" flex flex-row w-6/12 h-full justify-evenly items-center navHide">
            <div className="text-black hover:text-orange-400  hover:border-b border-orange-400  md:text-white ">Home</div>
            <div className="text-black hover:text-orange-400  hover:border-b border-orange-400  md:text-white ">About</div>
            <div className="text-black hover:text-orange-400  hover:border-b border-orange-400  md:text-white ">Resume</div>
            <div className="text-black hover:text-orange-400  hover:border-b border-orange-400  md:text-white ">Service</div>
            <div className="text-black hover:text-orange-400  hover:border-b border-orange-400  md:text-white ">Skills</div>
            <div className="text-black hover:text-orange-400  hover:border-b border-orange-400  md:text-white ">Project</div>
            <div className="text-black hover:text-orange-400  hover:border-b border-orange-400  md:text-white ">My Blog</div>
            <div className="text-black hover:text-orange-400  hover:border-b border-orange-400  md:text-white ">Contact</div>
        </div>
      
    </div>
  )
}

export default Navbar
