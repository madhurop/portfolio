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

      <img className="p-5" src="https://lh3.googleusercontent.com/pw/AP1GczMlf-32ktTHPrA81xoulUWS5hYJHJmIddTuR57Su2sqxhQ5HMXrxPmOtnEgamCwpTH9wEIUCLpElN9OhaYdTrfd1ueZt4zv6kfAQ_oQ2FeQ2qR351vS24qUoeHEBFxv4fvlawfxoHpwBVy7_qwwoxJPDN8abUy_9Svkpr3L9LanM2VPB1Zyaiwf180v0Yz82vpeVzR9FSUu9-9fW2o0Ru7Sllxlpezor3QGbWuxnFXevCylffQX8kCcpMYTvoWowcYKYObHyVOmSg8T56jZDowWqY0bK-eU00VKjlTNmFfQwlIj52UxNZj9m2ma0Ci5WLCKhsRkEHQd8VYbfNRM8_POJ39QP_c-1zY-zu_P35M0KeOKDAGCQECVI2XOXL41EsIXAy1ZVwjvxsyCuhtKtU920-DpHDZqGyc3XK23G3rzZeH2LSveh9wqauFgUzRnE2bHRXpCUjtNLvgzj4I48Pa_9n1XSZTZFteCjORH7eQanpTSLNDdP-F7Y58KGSEsb0phzW6O4YfHiql4gP7pU7q_P-I9nx1Lst2nMrx1n6bEfRuBrrfPttktrrSQMQSD_V9gCaS8LjcRVQl5vQ-WplHPuUYTy994u2dLuke_KS1Ckee6J12Gz7aidFHKqdO183TcoICSMElPeb4K3SD5yJZb3RKCS6sXJ5_v3xH3howxohob6HO7plUuPA3KYkkC36rKgv36DIjoQEkhW1DaGJxZrNwLtht83cixW14P6Tn7v3ciDI5Mk3DBbKT3mnv7D8Ll4kIVQ1Q3Poc_AUSP6Ttz98U8kE35f1_oq833OL9PGdJsgqB2PAOtgrvKWy_3XASYMFfFDds1E0kfzEI3OGy8oma1VwJm67BYubbwkBIEh42eQ3GHrMrykYTxk2cc3_FtW6CTbDqm1WhvVhAWHbCqaA=w500-h500-s-no-gm?authuser=0" alt="" />
      </div>

    </div>
  )
}

export default Home

