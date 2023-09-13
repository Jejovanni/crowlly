import React from 'react'
import Nav from './components/Nav'
import Footer from './Footer'

function About() {
  return (
    <div>
      <Nav />
      <div className=' min-h-[15rem] bg-hero-pattern bg-cover bg-center flex items-end'>
        <h1 className='text-white text-5xl  text-left  md:text-6xl lg:text-8xl lg:mx-10 tracking-tighter font-medium p-4 '>About</h1>
      </div>
      <div className=' min-h-screen'>
        <p className=' text-white text-2xl p-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt aliquid rerum iusto dicta culpa laboriosam assumenda fugit praesentium aut sed harum quidem dolorum,
          id, velit sunt sequi atque quis at!</p>
      </div>
      <Footer />
    </div>
  )
}

export default About