import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../Assets/ij light.png'

const Navbar = ({ className }) => {

  const navigate = useNavigate()
  const [isActive, setIsActive] = useState(false)

  return (
    <div className={className}>
        <div className="wrapper hidden md:flex container mx-auto text-xl" id='semibold'>
            <div className="logo w-20">
              <Link to={'/'}>
                  <img src={logo} alt="" className='w-20 h-20 p-1' />
              </Link>
            </div>
            <button onClick={()=>navigate('/about-me')} className='rounded-md transition-all text-2xl ml-auto duration-700 py-2 h-max my-auto px-7 text-white hover:bg-white hover:text-[#000428] hover:scale-110'>About Me</button>
            {/* <button className='rounded-md transition-all duration-700 py-2 h-max my-auto px-7 text-white hover:bg-white hover:text-[#000428] hover:scale-110'>Portofolio</button> */}
        </div>
        <div className="block md:hidden py-2">
          <div className="wrapper w-12 mx-auto p-1">
            <Link to={'/'}>
              <img src={logo} alt="" className='w-10 h-10' />
            </Link>
            <button onClick={()=>isActive === false ? setIsActive(true) : setIsActive(false)} className='absolute text-white top-3 right-4'>
              { isActive === false ? 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
              :
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              }
            </button>
            <div className={`wrapper absolute grid top-[68px] left-0 w-screen bg-gradient-to-r from-[#000428] to-[#004e92] text-white p-4 space-y-3 transition-all duration-1000 ${isActive === true ? 'opacity-100 mt-1' : 'opacity-0 -mt-[500px]'}`}>
              <button onClick={()=>navigate('/about-me')} className='text-lg mx-auto'>About Me</button>
              {/* <button className='text-lg mx-auto'>Portofolio</button> */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar