import React from 'react'

function Navbar() {
  return (
    <div className="h-14 w-full flex flex-row justify-between items-center p-4  ">
        <h1 className=" text-white text-3xl  ">Madhur</h1>
        <div className=" flex flex-row w-6/12 h-full justify-evenly items-center navHide">
            <div className="text-white hover:text-orange-400  hover:border-b border-orange-400">Home</div>
            <div className="text-white hover:text-orange-400  hover:border-b border-orange-400">About</div>
            <div className="text-white hover:text-orange-400  hover:border-b border-orange-400">Resume</div>
            <div className="text-white hover:text-orange-400  hover:border-b border-orange-400">Service</div>
            <div className="text-white hover:text-orange-400  hover:border-b border-orange-400">Skills</div>
            <div className="text-white hover:text-orange-400  hover:border-b border-orange-400">Project</div>
            <div className="text-white hover:text-orange-400  hover:border-b border-orange-400">My Blog</div>
            <div className="text-white hover:text-orange-400  hover:border-b border-orange-400">Contact</div>
        </div>
      
    </div>
  )
}

export default Navbar
