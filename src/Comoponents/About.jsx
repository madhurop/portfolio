import React from 'react'
import { Fade } from 'react-awesome-reveal'

function About() {
    return (

        <div className="w-full min-h-full flex flex-row justify-center text-white ">
            <Fade className=" min-w-full ">
                <div className="w-full h-full flex flex-col-reverse gap-2 md:flex-row justify-center items-center ">
                    <div className="w-9/12 md:w-6/12 h-auto md:h-full  flex items-center  bg-black overflow-hidden  ">
                        <img className="w-full" src="https://i.postimg.cc/VvFd1sfk/file.png" alt="" />
                    </div>
                    <div className=" w-full md:min-w-6/12 h-3/6 md:h-full  flex flex-col justify-center gap-y-8 ">
                        <h1 className="text-5xl  font-bold ml-4 text-orange-400 ">About Me</h1>
                        <p className="text-gray-400 ml-4 text-wrap text-lg">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        <div className="w-full h-auto">
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full ">
                                    <tbody>
                                        <tr>
                                            <td className="px-4 py- text-xl font-semibold">Name:</td>
                                            <td className="px-4 py-1 text-xl text-gray-400">Madhur Borade</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 text-xl font-semibold">DOB:</td>
                                            <td className="px-4 py-2 text-xl text-gray-400">November 28, 2002</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 text-xl font-semibold">Email:</td>
                                            <td className="px-4 py-2 text-xl text-gray-400">madhurborade654@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 text-xl font-semibold">LinkedIn</td>
                                            <td className="px-4 py-2 text-xl text-gray-400"><a href="https://www.linkedin.com/in/madhurborade/">https://www.linkedin.com/in/madhurborade/</a></td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 text-xl font-semibold">Github</td>
                                            <td className="px-4 py-2 text-xl text-gray-400"><a href="https://github.com/madhurop">https://github.com/madhurop</a></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>

        </div>
    )
}

export default About
