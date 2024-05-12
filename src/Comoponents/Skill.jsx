import React from 'react'
import { ReactTyped } from 'react-typed'

function Skill() {
  return (
    <div className="w-full min-h-screen full flex flex-col  items-center">
        <div className="w-full flex justify-center items-center">
            <h1 className="text-5xl text-orange-400">Skills</h1>
        </div>
        <div className="w-11/12  h-auto mt-4 text-white flex flex-auto flex-wrap gap-x-14 gap-y--5 justify-evenly ">
            <div className=" w-4/12 sm:w-2/12  flex flex-col items-center  ">
              <img className="w-11/12" src="https://img.icons8.com/color/480/html-5--v1.png" alt="" />HTML</div>
            <div className="w-4/12 sm:w-2/12  flex flex-col items-center  ">
              <img className="w-11/12" src="https://img.icons8.com/fluency/240/css3.png" alt="" />CSS</div>
            <div className="w-4/12 sm:w-2/12 flex flex-col items-center  ">
              <img className="w-11/12" src="https://img.icons8.com/fluency/240/javascript.png" alt="" />Javascript</div>
            <div className="w-4/12 sm:w-2/12 flex flex-col items-center  ">
              <img className="w-10/12 mt-2" src="https://img.icons8.com/officel/480/react.png" alt="" />React</div>
            <div className="w-4/12 sm:w-2/12 flex flex-col items-center  ">
              <img className="w-11/12" src="https://img.icons8.com/color/480/python--v1.png" alt="" />Python</div>
            <div className="w-4/12 sm:w-2/12 flex flex-col items-center  ">
              <img className="w-11/12" src="https://img.icons8.com/ios/500/FFFFFF/express-js.png" alt="" />Express</div>
            <div className="w-4/12 sm:w-2/12 flex flex-col items-center  ">
              <img className="w-11/12" src="https://img.icons8.com/color/480/redux.png" alt="" />Redux</div>
            <div className="w-4/12 sm:w-2/12 flex flex-col items-center  ">
              <img className="w-11/12" src="https://img.icons8.com/fluency/240/node-js.png" alt="" />Node Js</div>


        </div>
      
    </div>
  )
}

export default Skill
