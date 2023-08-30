import React, { useState } from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter, FaYoutube} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonFill} from 'react-icons/bs'
import {Link} from 'react-scroll'
import logo from '../assets/logo.png'

const Navbar = () => {
    const[nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1a1a1a] text-gray-300'>
        <div>
            <img className='transform' src={logo}  alt='Logo Image' style={{width: '100px'}} />
        </div>

        {/* menu */}
        
        <ul className=' hidden md:flex'>
            <li> 
            <Link to="home" smooth={true} duration={500}>
          Home
        </Link>
            </li>
            <li>
                
            <Link to="about" smooth={true} duration={500}>
          About
        </Link>
            </li>
            <li><Link to="skills" smooth={true} duration={500}>
          Skills
        </Link></li>
            <li><Link to="work" smooth={true} duration={500}>
          Work
        </Link></li>
            <li>
            <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
            </li>
        </ul>
        

        {/* hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
          Home
        </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
          About
        </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
          Skills
        </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
          Work
        </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
          Contact
        </Link>
            </li>
        </ul>

        {/* Social icons*/}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-2'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded bg-blue-500'>
                    <a target='_blank' className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/aarias11/'>
                        Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded bg-[#333333]'>
                    <a target='_blank' className='flex justify-between items-center w-full text-gray-300' href='https://github.com/Aarias11'>
                        Github <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded bg-blue-400'>
                    <a target='_blank' className='flex justify-between items-center w-full text-gray-300' href='https://twitter.com/Alancodes11'>
                        Twitter <FaTwitter size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded bg-red-500'>
                    <a target='_blank' className='flex justify-between items-center w-full text-gray-300' href='https://www.youtube.com/@AlanCodes'>
                        YouTube <FaYoutube size={30} />
                    </a>
                </li>
                
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded bg-[#565f69]'>
                    <a target='_blank' className='flex justify-between items-center w-full text-gray-300' href='https://drive.google.com/file/d/1B_t6u2RD-wpJDlJJx49cLgOkFd6mGTX5/view?usp=drive_link' >
                        Resumé <BsFillPersonFill size={30} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
