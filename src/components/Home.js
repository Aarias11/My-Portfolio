import React from 'react'
import {HiArrowNarrowRight, hiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#1a1a1a]'>
        
        {/* {Container} */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#3d808f]'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Alan Arias</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm A Full Stack Software Engineer.</h2>
                <p className='text-[#8892b0] py-5 max-w-[700px]'>I'm a highly motivated and enthusiastic Full-stack developer with a passion for solving complex problems and building innovative software solutions. As a developer, I enjoy tackling challenging problems and constantly seek new and creative ways to overcome obstacles in my work. I have honed my skills in a range of programming languages, frameworks, and databases, and I am committed to staying up-to-date with the latest developments in the field. I take great pride in my ability to learn new technologies quickly, and I am always looking for opportunities to expand my knowledge and skills.</p>
                <div>
                  <a target='_blank' href='https://drive.google.com/file/d/1hal_SUiyZnTjHmcqTaKdfcDLQkdCK_LX/view?usp=drive_link' >

                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#3d808f] hover:border-[#3d808f]'>View Resumé 
                    <span href='work' className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3' />
                    </span>
                    </button>
                  </a>
                </div>
        </div>

    </div>
  )
}

export default Home
