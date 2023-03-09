import React from 'react'
import Navbar from '../Components/Navbar'
import image from '../Assets/icon.jpg'
import js from '../Assets/js.png'
import html from '../Assets/html.png'
import css from '../Assets/css.png'
import ai from '../Assets/ai.png'
import expressjs from '../Assets/expressjs.png'
import bootstrap from '../Assets/bootstrap.png'
import lightroom from '../Assets/lightroom.png'
import next from '../Assets/next.png'
import node from '../Assets/node.png'
import pgsql from '../Assets/pgsql.png'
import ps from '../Assets/ps.png'
import react from '../Assets/react.png'
import redux from '../Assets/redux.png'
import tailwind from '../Assets/tailwind.png'
import badminton1 from '../Assets/badminton1.png'
import coffee1 from '../Assets/coffee1.png'
import explore1 from '../Assets/explore1.png'
import football1 from '../Assets/football1.png'
import hangout1 from '../Assets/hangout1.png'
import hiking1 from '../Assets/hiking1.png'
import listening1 from '../Assets/listening1.png'
import mountain1 from '../Assets/mountain1.png'
import playing1 from '../Assets/playing1.png'
import riding1 from '../Assets/riding1.png'
import run1 from '../Assets/run1.png'
import swim1 from '../Assets/swim1.png'


const About = () => {
  return (
    <div className=''>
        <div className='fixed w-screen h-screen' id='wrapper'></div>
        <div className="absolute grid w-screen top-0 left-0 md:-left-5">
            <div className='container mx-auto mt-10 pt-10 md:pt-20 px-10 md:grid' >
                <p className='text-white text-3xl md:text-5xl text-center mb-5' id='medium'>About Me</p>
                <div className="wrapper bg-white rounded-full p-1 w-40 md:w-80 mx-auto my-10 md:my-14">
                    <img src={image} alt="" className='w-40 md:w-80 rounded-full' />
                </div>
                <div className="wrap space-y-3 text-center">
                    <p className='text-2xl md:text-4xl text-white' id='semibold'>Background :</p>
                    <p className='text-white text-lg md:text-2xl' id='extralight'>
                        Hi there please welcome to my website profile. my name is <span id='medium'>Irfan Julian Ibrahim</span> or you can call me Irfan. <span id='medium'>I'm a moslem</span>, father for two kids and a husband for my beloved wife <span id='medium'>Muthia</span>.
                    </p>
                    <p className='text-white text-lg md:text-2xl' id='extralight'>
                        I'm <span id='medium'>Network Engineer</span>, <span id='medium'>Website Developer</span>, and <span id='medium'>Amateur Designer</span>. Currently I'm working as <span id='medium'>Network Engineer</span> and I provide to sevices build various kind of <span id='medium'>Websites</span> as side job to get more income. Sometimes I made some design for my own self.
                    </p>
                    <p className='text-white text-lg md:text-2xl' id='extralight'>
                    <span id='medium'>Curiousity</span> is my character, so that's made me never stop to learn something new in my own fucking life. Anyway I can build software with <span id='medium'>Javascript Programming Language</span> and some Libraries and Frameworks.
                    </p>
                </div>
                <div className="wrap skills space-y-3 mt-20 md:mt-40 text-left">
                <p className='text-2xl md:text-4xl text-white text-center mb-10 md:mb-20' id='semibold'>Programming Skills :</p>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-20" id='medium'>
                        <div className="space-x-2 hover:scale-110 transition-all duration-500">
                            <div className="wrapper mx-auto bg-white rounded-full w-20 md:w-40">
                                <img src={js} alt="" className='w-20 md:w-40 mb-4' />
                            </div>
                            <p className='text-white text-center md:text-2xl'>Javascript</p>
                        </div>
                        <div className="space-x-2 hover:scale-110 transition-all duration-500">
                            <div className="wrapper mx-auto bg-white rounded-full w-20 md:w-40">
                                <img src={html} alt="" className='w-20 md:w-40 mb-4' />
                            </div>
                            <p className='text-white text-center md:text-2xl'>HTML</p>
                        </div>
                        <div className="space-x-2 hover:scale-110 transition-all duration-500">
                            <div className="wrapper mx-auto bg-white rounded-full w-20 md:w-40">
                                <img src={css} alt="" className='w-20 md:w-40 mb-4' />
                            </div>
                            <p className='text-white text-center md:text-2xl'>CSS</p>
                        </div>
                        <div className="space-x-2 hover:scale-110 transition-all duration-500">
                            <div className="wrapper mx-auto bg-white rounded-full w-20 md:w-40">
                                <img src={expressjs} alt="" className='w-20 md:w-40 mb-4' />
                            </div>
                            <p className='text-white text-center md:text-2xl'>Express JS</p>
                        </div>
                        <div className="space-x-2 hover:scale-110 transition-all duration-500">
                            <div className="wrapper mx-auto bg-white rounded-full w-20 md:w-40">
                                <img src={react} alt="" className='w-20 md:w-40 mb-4' />
                            </div>
                            <p className='text-white text-center md:text-2xl'>React JS</p>
                        </div>
                        <div className="space-x-2 hover:scale-110 transition-all duration-500">
                            <div className="wrapper mx-auto bg-white rounded-full w-20 md:w-40">
                                <img src={next} alt="" className='w-20 md:w-40 mb-4' />
                            </div>
                            <p className='text-white text-center md:text-2xl'>Next JS</p>
                        </div>
                        <div className="space-x-2 hover:scale-110 transition-all duration-500">
                            <div className="wrapper mx-auto bg-white rounded-full w-20 md:w-40">
                                <img src={node} alt="" className='w-20 md:w-40 mb-4' />
                            </div>
                            <p className='text-white text-center md:text-2xl'>Node JS</p>
                        </div>
                        <div className="space-x-2 hover:scale-110 transition-all duration-500">
                            <div className="wrapper mx-auto bg-white rounded-full w-20 md:w-40">
                                <img src={redux} alt="" className='w-20 md:w-40 mb-4' />
                            </div>
                            <p className='text-white text-center md:text-2xl'>Redux</p>
                        </div>
                        <div className="space-x-2 hover:scale-110 transition-all duration-500">
                            <div className="wrapper mx-auto bg-white rounded-full w-20 md:w-40">
                                <img src={bootstrap} alt="" className='w-20 md:w-40 mb-4' />
                            </div>
                            <p className='text-white text-center md:text-2xl'>Bootstrap</p>
                        </div>
                        <div className="space-x-2 hover:scale-110 transition-all duration-500">
                            <div className="wrapper mx-auto bg-white rounded-full w-20 md:w-40">
                                <img src={tailwind} alt="" className='w-20 md:w-40 mb-4' />
                            </div>
                            <p className='text-white text-center md:text-2xl'>Tailwind</p>
                        </div>
                        <div className="space-x-2 hover:scale-110 transition-all duration-500">
                            <div className="wrapper mx-auto bg-white rounded-full w-20 md:w-40">
                                <img src={pgsql} alt="" className='w-20 md:w-40 mb-4' />
                            </div>
                            <p className='text-white text-center md:text-2xl'>PostgreSQL</p>
                        </div>
                        <div className="space-x-2 hover:scale-110 transition-all duration-500">
                            <div className="wrapper mx-auto bg-white rounded-full w-20 md:w-40">
                                <img src={ai} alt="" className='w-20 md:w-40 mb-4' />
                            </div>
                            <p className='text-white text-center md:text-2xl'>Illustrator</p>
                        </div>
                        <div className="space-x-2 hover:scale-110 transition-all duration-500">
                            <div className="wrapper mx-auto bg-white rounded-full w-20 md:w-40">
                                <img src={ps} alt="" className='w-20 md:w-40 mb-4' />
                            </div>
                            <p className='text-white text-center md:text-2xl'>Photoshop</p>
                        </div>
                        <div className="space-x-2 hover:scale-110 transition-all duration-500">
                            <div className="wrapper mx-auto bg-white rounded-full w-20 md:w-40">
                                <img src={lightroom} alt="" className='w-20 md:w-40 mb-4' />
                            </div>
                            <p className='text-white text-center md:text-2xl'>Lightroom</p>
                        </div>
                    </div>
                </div>
                <div className="wrap hobbies mt-20 md:mt-40 text-center">
                    <p className='text-2xl md:text-4xl text-white md:mb-20' id='semibold'>My Hobbies :</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-7 md:gap-20 mt-10">
                        <div className="transition-all duration:700 hover:scale-105">
                            <div className="wrapperimg bg-white w-20 md:w-80 rounded-2xl mx-auto">
                                <img src={coffee1} alt="" className='w-20 md:w-80' />
                            </div>
                            <p className='text-white md:mt-4 md:text-3xl' id='medium'>Drinking Coffee</p>
                        </div>
                        <div className="transition-all duration:700 hover:scale-105">
                            <div className="wrapperimg bg-white w-20 md:w-80 rounded-2xl mx-auto">
                                <img src={hiking1} alt="" className='w-20 md:w-80' />
                            </div>
                            <p className='text-white md:mt-4 md:text-3xl' id='medium'>Hiking</p>
                        </div>
                        <div className="transition-all duration:700 hover:scale-105">
                            <div className="wrapperimg bg-white w-20 md:w-80 rounded-2xl mx-auto">
                                <img src={explore1} alt="" className='w-20 md:w-80' />
                            </div>
                            <p className='text-white md:mt-4 md:text-3xl' id='medium'>Explore Something New</p>
                        </div>
                        <div className="transition-all duration:700 hover:scale-105">
                            <div className="wrapperimg bg-white w-20 md:w-80 rounded-2xl mx-auto">
                                <img src={run1} alt="" className='w-20 md:w-80' />
                            </div>
                            <p className='text-white md:mt-4 md:text-3xl' id='medium'>Jogging</p>
                        </div>
                        <div className="transition-all duration:700 hover:scale-105">
                            <div className="wrapperimg bg-white w-20 md:w-80 rounded-2xl mx-auto">
                                <img src={football1} alt="" className='w-20 md:w-80' />
                            </div>
                            <p className='text-white md:mt-4 md:text-3xl' id='medium'>Playing Football</p>
                        </div>
                        <div className="transition-all duration:700 hover:scale-105">
                            <div className="wrapperimg bg-white w-20 md:w-80 rounded-2xl mx-auto">
                                <img src={badminton1} alt="" className='w-20 md:w-80' />
                            </div>
                            <p className='text-white md:mt-4 md:text-3xl' id='medium'>Playing Badminton</p>
                        </div>
                        <div className="transition-all duration:700 hover:scale-105">
                            <div className="wrapperimg bg-white w-20 md:w-80 rounded-2xl mx-auto">
                                <img src={hangout1} alt="" className='w-20 md:w-80' />
                            </div>
                            <p className='text-white md:mt-4 md:text-3xl' id='medium'>Hangout with Friends</p>
                        </div>
                        <div className="transition-all duration:700 hover:scale-105">
                            <div className="wrapperimg bg-white w-20 md:w-80 rounded-2xl mx-auto">
                                <img src={mountain1} alt="" className='w-20 md:w-80' />
                            </div>
                            <p className='text-white md:mt-4 md:text-3xl' id='medium'>Go to Nature</p>
                        </div>
                        <div className="transition-all duration:700 hover:scale-105">
                            <div className="wrapperimg bg-white w-20 md:w-80 rounded-2xl mx-auto">
                                <img src={listening1} alt="" className='w-20 md:w-80' />
                            </div>
                            <p className='text-white md:mt-4 md:text-3xl' id='medium'>Listening Good Music</p>
                        </div>
                        <div className="transition-all duration:700 hover:scale-105">
                            <div className="wrapperimg bg-white w-20 md:w-80 rounded-2xl mx-auto">
                                <img src={playing1} alt="" className='w-20 md:w-80' />
                            </div>
                            <p className='text-white md:mt-4 md:text-3xl' id='medium'>Paying Guitar</p>
                        </div>
                        <div className="transition-all duration:700 hover:scale-105">
                            <div className="wrapperimg bg-white w-20 md:w-80 rounded-2xl mx-auto">
                                <img src={riding1} alt="" className='w-20 md:w-80' />
                            </div>
                            <p className='text-white md:mt-4 md:text-3xl' id='medium'>Riding</p>
                        </div>
                        <div className="transition-all duration:700 hover:scale-105">
                            <div className="wrapperimg bg-white w-20 md:w-80 rounded-2xl mx-auto">
                                <img src={swim1} alt="" className='w-20 md:w-80' />
                            </div>
                            <p className='text-white md:mt-4 md:text-3xl' id='medium'>Swimming</p>
                        </div>

                    </div>
                </div>
                <button className='transition-all duration-500 bg-gradient-to-l from-[#000428] to-[#004e92] text-white text-xl w-full md:w-1/2 md:mx-auto md:text-2xl py-3 my-20 rounded-xl hover:scale-110 animate-pulse' id='medium'>
                    Check My Portofolio
                </button>
            </div>
        </div>
        <Navbar className='absolute top-0 left-0 md:-left-[17px] w-screen md:p-2 bg-gradient-to-r from-[#000428] to-[#004e92]' />
    </div>
  )
}

export default About