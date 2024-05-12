import React from 'react'
import { ReactTyped } from "react-typed";



function Home() {
  return (
    <div className="w-full  min-h-full flex flex-col sm:flex-row text-white justify-between items-center">
      <div className="w-full sm:w-5/12  h-full  flex items-center">
        <div className="min-w-full sm:w-full h-auto  flex flex-col justify-evenly gap-y-3">

          <span className='text-orange-400 text-2xl font-bold'>Hello!</span>
          <h1 className="text-white  font-bold text-4xl sm:text-6xl ">I'am <span className="text-orange-400 font-bold text-4xl sm:text-6xl handleText">Madhur Borade</span></h1>
          <h1 className="text-white font-bold text-md sm:text-4xl"><ReactTyped strings={["A Web Developer","Build Responsive Websites"]} typeSpeed={40} backSpeed={50} loop/></h1>
          
          <div className="w-3/5 flex flex-row justify-evenly items-center  mt-1">
            <button className="text-white w-4/5 sm:text-sm sm:w-2/5 h-12 p-2 rounded-2xl bg-orange-400 ">Hire Me</button>
            <button className="text-white w-4/5 sm:text-sm sm:w-2/5 h-12 p-2 rounded-2xl border border-white ">My Works</button>
          </div>
        </div>
      </div>
      <div className="min-w-2/12">

      <img className="p-5" src="https://i.postimg.cc/7YMWvFSt/downloadfile-1-removebg-preview.png" alt="" />
      </div>

    </div>
  )
}

export default Home

