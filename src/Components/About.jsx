import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { ReactTyped } from 'react-typed'
import { Element } from 'react-scroll';

function About() {
    const aboutMeDescriptions = [
        "I'm a passionate web developer who loves to bring ideas to life through code.",
        "As a web developer, I enjoy creating seamless and intuitive online experiences.",
        "I'm a detail-oriented web developer with a knack for problem-solving and innovation.",
        "With a strong foundation in web development, I strive to stay at the forefront of technology trends.",
        "I'm a dedicated web developer who values clean code and user-centric design.",
        "As a web developer, I thrive on collaborating with teams to build dynamic and responsive websites.",
        "I'm a versatile web developer comfortable with both front-end and back-end technologies.",
        "With a passion for learning, I continuously expand my skills as a web developer to deliver top-notch solutions.",
        "I'm a creative web developer who enjoys pushing the boundaries of what's possible online.",
        "As a web developer, I take pride in delivering high-quality, pixel-perfect websites that exceed client expectations."
      ];
      
    return (
        <Element name="about">

        <div id="about" className="w-full min-h-full flex flex-row justify-center text-white adjW ">
            <Fade className=" min-w-full ">
                <div className="w-full h-full flex flex-col-reverse gap-2 md:flex-row justify-center items-center ">
                    <div className="w-9/12 md:w-6/12 h-auto md:h-full  flex items-center  bg-black overflow-hidden  ">
                        <img className="w-full" src="https://i.postimg.cc/VvFd1sfk/file.png" alt="" />
                    </div>
                    <div className=" w-full md:min-w-6/12 h-3/6 md:h-full  flex flex-col justify-center gap-y-8 ">
                        <h1 className="text-5xl  font-bold ml-4 text-orange-400 ">About Me</h1>
                        <p className="text-gray-500 ml-4 text-wrap text-lg"><ReactTyped strings={aboutMeDescriptions} typeSpeed={40} backSpeed={20}/></p>
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
        </Element>
    )
}

export default About
