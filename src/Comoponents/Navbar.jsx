import React from 'react'
import { useEffect } from 'react'

function Navbar() {
   useEffect(()=>{
    personalApi()
   },[])
   
   const personalApi = async () => {
    try {
      const apiUrl = await fetch("/api/v1/products");
      const res = await apiUrl.json();
      console.log(res);
  
      // Assuming res is already an array of JSON strings
      // const arr = res.map(e => JSON.parse(e));
      // console.log(arr);
      // console.log(arr[1][0]);
      // console.log(arr[1][0].length);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  return (


    <nav className="bg-black border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">

          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Madhur</span>
        </a>
        <button type="button" className="inline-flex text-bolder items-center p-2 w-10 h-10 justify-center text-sm border border-white text-white rounded-lg md:hidden bg-black hover:bg-gray-400" aria-controls="navbar-default" aria-expanded="false">
          O
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default navHide">
          <div className="font-medium flex flex-col p-4 md:p-0 mt-4 navHide border border-white rounded-lg bg-black text-orange-400  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            <div className="hover:text-white">Home</div>
            <div className="hover:text-white">About</div>
            <div className="hover:text-white">Skill</div>
            <div className="hover:text-white">Projects</div>
            <div className="hover:text-white">Resume</div>
          </div>
        </div>
      </div>
    </nav>


  )
}

export default Navbar
