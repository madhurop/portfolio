import Navbar from './Comoponents/Navbar'
import './App.css'
import Home from './Comoponents/Home'
import MyComponent from './Comoponents/Typed'
import About from './Comoponents/About'
import Skill from './Comoponents/Skill'

function App() {


  return (

    <div className="bg-black h-screen flex justify-center">
      <div className="bg-black h-11/12 w-full ml-1 sm:w-10/12 h-full flex flex-col  ">

        <Navbar />
        <div className="w-full min-h-full  flex flex-col flex-nowrap overflow-hidden overflow-y-auto scrollbar">
          <Home />
          <About />
          <Skill/>
          {/* <MyComponent /> */}
        </div>

      </div>

    </div>



  )
}

export default App
