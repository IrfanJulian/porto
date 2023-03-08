import React from 'react'
import image from '../Assets/icon.jpg'
import Navbar from '../Components/Navbar'
import github from '../Assets/github1.png'
import whatsapp from '../Assets/whatsapp1.png'
import linkedin from '../Assets/linkedin1.png'
import facebook from '../Assets/facebook1.png'
import instagram from '../Assets/instagram1.png'
import phone from '../Assets/phone1.png'
import mail from '../Assets/mail1.png'

const LandingPage = () => {
  return (
    <div className='h-full md:h-screen w-screen'>
        <div className='fixed w-screen h-screen' id='wrapper'></div>
        <div className="main absolute w-screen top-0 left-0 mt-10 md:mt-44 py-10 px-5 md:px-0">
            <div className="container mx-auto flex">
              <div className="md:w-1/2 w-11/12 md:mx-0 mx-auto">
                  <div className="wrapperimg md:hidden mb-5 mt-2">
                    <img src={image} alt="" className='w-3/4 mx-auto rounded-full' />
                  </div>
                  <p className='text-xl md:text-4xl mb-5 md:-mb-5 text-white text-center md:text-left' id='extralight'>Assalamu’alaikum Warahmatullahi Wabarakatuh.</p>
                  <div className="flex space-x-2 md:my-10 md:space-x-10">
                    <p className='text-7xl md:text-[15rem] text-white' id='glock'>Hi</p>
                    <p className='text-2xl md:text-6xl text-white mt-1 md:mt-8' id='glock'>I'm Irfan Julian Ibrahim, you can call me Irfan.</p>
                  </div>
                  <p className='text-xl md:text-5xl text-white mt-5' id='semibold'>I'm Website Developer, Life and design enthusiast.</p>
                  <div className="wrapper md:hidden my-7">
                    <p className='text-lg text-white' id='light'>Connect with me:</p>
                    <div className="flex space-x-2 w-max my-4 mx-auto">
                      <button className='transition-all duration-500 hover:scale-125'>
                        <img src={linkedin} alt="" className='w-10 h-10 rounded-full' />
                      </button>
                      <button className='transition-all duration-500 hover:scale-125'>
                        <img src={github} alt="" className='w-10 h-10 rounded-full' />
                      </button>
                      <button className='transition-all duration-500 hover:scale-125'>
                        <img src={instagram} alt="" className='w-10 h-10 rounded-full' />
                      </button>
                      <button className='transition-all duration-500 hover:scale-125'>
                        <img src={whatsapp} alt="" className='w-10 h-10 rounded-full' />
                      </button>
                      <button className='transition-all duration-500 hover:scale-125'>
                        <img src={facebook} alt="" className='w-10 h-10 rounded-full' />
                      </button>
                      <button className='transition-all duration-500 hover:scale-125'>
                        <img src={mail} alt="" className='w-10 h-10 rounded-full' />
                      </button>
                      <button className='transition-all duration-500 hover:scale-125'>
                        <img src={phone} alt="" className='w-10 h-10 rounded-full' />
                      </button>
                    </div>
                  </div>
                  <div id='semibold' className='md:mt-20 grid'>
                    <button className='bg-gradient-to-r from-[#000428] to-[#004e92] mt-7 py-2 md:px-20 px-14 rounded-lg text-lg md:text-2xl md:w-1/2 mx-auto animate-pulse transition-all text-white duration-700 hover:scale-125'>More about me? Click Here.</button>
                  </div>
                </div>
                <div className="w-1/2 hidden md:grid">
                  <img src={image} alt="" className='rounded-full w-5/12 m-auto' />
                  <p className='text-2xl text-white text-center' id='medium'>Connect with me:</p>
                  <div className="flex space-x-5 w-max -mt-48 mx-auto">
                    <button className='transition-all duration-500 hover:scale-125'>
                      <img src={linkedin} alt="" className='w-14 h-14 rounded-full' />
                    </button>
                    <button className='transition-all duration-500 hover:scale-125'>
                      <img src={github} alt="" className='w-14 h-14 rounded-full' />
                    </button>
                    <button className='transition-all duration-500 hover:scale-125'>
                      <img src={instagram} alt="" className='w-14 h-14 rounded-full' />
                    </button>
                    <button className='transition-all duration-500 hover:scale-125'>
                      <img src={whatsapp} alt="" className='w-14 h-14 rounded-full' />
                    </button>
                    <button className='transition-all duration-500 hover:scale-125'>
                      <img src={facebook} alt="" className='w-14 h-14 rounded-full' />
                    </button>
                    <button className='transition-all duration-500 hover:scale-125'>
                      <img src={mail} alt="" className='w-14 h-14 rounded-full' />
                    </button>
                    <button className='transition-all duration-500 hover:scale-125'>
                      <img src={phone} alt="" className='w-14 h-14 rounded-full' />
                    </button>
                  </div>
                </div>
            </div>
        </div>
        <Navbar className='absolute top-0 left-0 w-screen md:p-2 bg-gradient-to-r from-[#000428] to-[#004e92]' />
    </div>
  )
}

export default LandingPage